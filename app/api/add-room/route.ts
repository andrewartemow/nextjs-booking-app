import { sql } from '@vercel/postgres';
import fs from "fs";
import path from 'path';
import { NextResponse } from 'next/server';
 
export async function POST(request: Request) {
 
  try {
    const body = await request.json();
    const { title, price, location, description, image } = body;
    // const { title, price, location, description } = body;

    // const image = fs.readFileSync('/assets/room-picture2.jpg');
    
    if (!title || !price || !location || !description || !image) throw new Error('title , price, location are required');

    await sql`INSERT INTO Rooms (title, price, location, description, image) VALUES (${title}, ${price}, ${location}, ${description}, ${image});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const rooms = await sql`SELECT * FROM Rooms;`;
  return NextResponse.json({ rooms }, { status: 200 });
}