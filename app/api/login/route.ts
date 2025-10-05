import { NextResponse } from 'next/server';
export async function POST(req: Request){
const { email, pw } = await req.json();
// デモ用の固定認証（本番禁止！）
const ok = email === 'demo@sample.dev' && pw === 'demo1234';
if(!ok) return new NextResponse('Unauthorized', { status:401 });
const res = new NextResponse('OK');
res.cookies.set('demo_token','ok',{ path:'/', httpOnly:true });
return res;
}