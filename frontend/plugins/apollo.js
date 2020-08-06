// export default function (context) {
//   let httpEndpoint = process.env.APOLLO_SERVER_HTTP || 'http://localhost:3001'
//   let wsEndpoint = process.env.APOLLO_SERVER_WS || 'ws://localhost:3001'
//
//   if (process.client) {
//     httpEndpoint = process.env.APOLLO_CLIENT_HTTP || 'http://localhost:3001'
//     wsEndpoint = process.env.APOLLO_CLIENT_WS || 'ws://localhost:3001'
//   }
//
//   return {
//     httpEndpoint,
//     httpLinkOptions: {
//       credentials: 'same-origin',
//     },
//     wsEndpoint,
//   }
// }
