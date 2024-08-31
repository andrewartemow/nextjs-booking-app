import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // const { searchParams } = new URL(request.url);
  // const title = searchParams.get('title');
  // const price = searchParams.get('price');
  // const location = searchParams.get('location');
  // const description = searchParams.get('description');
  // const image = searchParams.get('image');
  //   try {
  //     const res = await sql`SELECT * FROM Rooms`;
  //   } catch (error) {
  //     return NextResponse.json({ error }, { status: 500 });
  //   }
  // const rooms = await sql`SELECT * FROM rooms;`;
  // return NextResponse.json({ rooms }, { status: 200 });
}
