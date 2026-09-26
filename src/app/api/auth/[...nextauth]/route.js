import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "admin@stocksense.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });

        if (!user) {
          // If no user exists, let's create the default admin user for testing purposes
          if (credentials.email === "admin@stocksense.com") {
            const hashedPassword = await bcrypt.hash("password123", 10);
            const newUser = await prisma.user.create({
              data: {
                name: "Admin User",
                email: "admin@stocksense.com",
                password: hashedPassword,
                role: "admin"
              }
            });
            // Verify password against new user
            const isPasswordValid = await bcrypt.compare(credentials.password, newUser.password);
            if (isPasswordValid) return { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role };
          }
          return null;
        }

        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role
        };
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
        session.user.id = token.id;
      }
      return session;
    }
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET || "fallback_super_secret_key_change_me",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
