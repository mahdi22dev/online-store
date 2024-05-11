export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/((?!home|login|api|register|public|cart|_next|customize|products|.*\\..*).*)",
  ],
};
