import { cookies } from "next/headers";

export function POST(request: Request & { body: { token: string } }) {
  const cookieStore = cookies();
  const token = request.body.token;
  return new Response("Hello, Next.js!", {
    status: 200,
    headers: { "Set-Cookie": `token=${token}` },
  });
}
