import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import axios from "axios";
import { CheckExistingUser } from "../../../models/users.models";

export default NextAuth({
  //providers: [
  //   CredentialProvider({
  //     name: "credentials",
  //     credentials: {
  //       username: {
  //         label: "username",
  //         type: "text",
  //         placeholder: "johndoe@test.com",
  //       },
  //       password: { label: "Password", type: "password" },
  //     },
  //     authorize: async (credentials) => {
  //       const response = await axios.post("http://localhost:3000/api/userLogin", {
  //         username: credentials.username,
  //         password: credentials.password,
  //       });

  //       if (response.data.status === "connected") {
  //         return response.data;
  //       }

  //       return null;
  //     },
  //   }),
  // ],

  providers: [
    CredentialProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "email", type: "text", placeholder: "jsmith@test.fr" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("je passe bien par le sign in");
        const response = await axios.post(
          "http://localhost:3000/api/UserLogin",
          {
            email: credentials.email,
            password: credentials.password,
          }
        );
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)

        // If no error and we have user data, return it
        console.log("ma rep", response.data);
        if (response.data.status == "connected") {
          console.log("je suis connectée", response.data.user);
          const user = response.data.user;
          return user;
        } else {
          console.log("je suis connectée mais ça marche pas ", response.data);
          // Return null if user data could not be retrieved
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      // first time jwt callback is run, user object is available
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }

      return session;
    },
  },

  secret: "test",
  jwt: {
    secret: "test",
    encryption: true,
  },
  pages: {
    signIn: "/Login",
    error: "/Login",
  },
});
