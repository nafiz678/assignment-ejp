import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export function middleware(req) {
  return withAuth(req);
}

export const config = {
  matcher: ["/profile"],
};
