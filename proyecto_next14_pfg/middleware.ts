import { NextResponse } from "next/server";

export default function middleware(req) {
  const verify = req.cookies.get("next-auth.session-token");
  const url = req.url;

  if (!verify && url.includes("/profile")) {
    return NextResponse.redirect("http://localhost:3000/login");
  }
}
