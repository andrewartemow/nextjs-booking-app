import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';
import { NextApiRequest } from 'next';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');

  try {
    const rooms = await sql`SELECT *
FROM rooms
WHERE name LIKE ${`%${name}%`};`;

    return NextResponse.json({ rooms }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
