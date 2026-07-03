import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, pw } = await req.json();
  // デモ用の固定認証です。本番ではDBや認証サービスに置き換えてください。
  const ok = email === 'demo@sample.dev' && pw === 'demo1234';

  if (!ok) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const res = new NextResponse('OK');
  res.cookies.set('demo_token', 'ok', {
    httpOnly: true,
    maxAge: 60 * 60,
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });

  return res;
}
