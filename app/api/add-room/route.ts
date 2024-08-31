import { sql } from '@vercel/postgres';
import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      price,
      location,
      description,
      image,
      contact_number,
      contact_name,
      contact_email,
    } = body;
    // const { name, price, location, description } = body;

    // const image = fs.readFileSync('/assets/room-picture2.jpg');

    if (
      !name ||
      !price ||
      !location ||
      !description ||
      !image ||
      !contact_name ||
      !contact_number ||
      !contact_email
    )
      throw new Error('title , price, location are required');

    await sql`INSERT INTO Rooms (name, price, description, location, image, contact_name, contact_number, contact_email) VALUES (${name}, ${price}, ${description}, ${location}, ${image}, ${contact_name}, ${contact_number}, ${contact_email});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const rooms = await sql`SELECT * FROM Rooms;`;
  return NextResponse.json({ rooms }, { status: 200 });
}
