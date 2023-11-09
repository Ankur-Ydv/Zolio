import { compare } from "bcrypt";
import NextAuth from "next-auth";
import Users from "@/utils/UserModel";
import DbConnect from "@/utils/DbConnect";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials, req, res) {
        DbConnect()
          .then(() => console.log("DB connected"))
          .catch(() => console.log(error));

        const user = await Users.findOne({ username: credentials.username });

        const checkPassword = await compare(
          credentials.password,
          user.password
        );

        if (user && checkPassword) {
          delete user.password;
          return Promise.resolve(user);
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.username = token._doc.username;
      }
      return { session };
    },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
