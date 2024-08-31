import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // const { searchParams } = new URL(request.url);
  // const title = searchParams.get('title');
  // const price = searchParams.get('price');
  // const location = searchParams.get('location');
  // const description = searchParams.get('description');
  // const image = searchParams.get('image');

  try {
    const headers = new Headers();
    headers.set(
      'Cache-Control',
      'no-store, no-cache, must-revalidate, proxy-revalidate'
    );
    headers.set('Pragma', 'no-cache');
    headers.set('Expires', '0');

    const rooms = await sql`SELECT * FROM rooms`;

    return NextResponse.json({ rooms }, { status: 200, headers: headers });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
