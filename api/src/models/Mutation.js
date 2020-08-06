const { UserInputError } = require("apollo-server");
const jwt = require("jsonwebtoken");
const lodash = require("lodash");
const bcrypt = require("bcrypt");
const { Character, validateCharacter } = require("./Character");
const { User, validateUser } = require("../User");
const { sendConfirmationEmail } = require("../services/EmailService");

const Mutation = {
  addCharacter(_, payload) {
    const { value, error } = validateCharacter(payload, {
      abortEarly: false,
    });
    if (error) {
      throw new UserInputError(
        "Failed to create a character due to validation errors",
        {
          validationErrors: error.details,
        }
      );
    }
    return Character.create(value);
  },
  async signup(_, { user }) {
    const { value, error } = validateUser(user);
    if (error) {
      throw new UserInputError(
        "Failed to create a character due to validation errors",
        {
          validationErrors: error.details,
        }
      );
    }
    const password = await bcrypt.hash(user.password, 10);
    const registerUser = await User.create({
      ...value,
      password,
    });

    sendConfirmationEmail(registerUser);

    const token = await jwt.sign(
      {
        _id: registerUser._id,
      },
      process.env.JWT_SECRET_KEY
    );

    return {
      token,
      user: lodash.pick(registerUser, ["id", "name", "email"]),
    };
  },
  async confirmEmail(_, { token }) {
    try {
      const verifyToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
      return true;
    } catch (err) {
      return false;
    }
  },
};

module.exports = Mutation;
