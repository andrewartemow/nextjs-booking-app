import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// export async function GET(request: Request) {
//   try {
//     const result =
//       await sql`CREATE TABLE Rooms ( title varchar(255), price int, location varchar(255) );`;
//     return NextResponse.json({ result }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }

export async function GET(request: Request) {
  try {
    const result = await sql`CREATE TABLE rooms (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description VARCHAR(65535),
    location VARCHAR(255),
    image VARCHAR(255),
    contact_name VARCHAR(255) NOT NULL,
    contact_number VARCHAR(20),
    contact_email VARCHAR(255)
);`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
