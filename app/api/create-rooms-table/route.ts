import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE Rooms ( title varchar(255), price int, location varchar(255) );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

// export async function GET(request: Request) {
//     try {
//       const result =
//         await sql`CREATE TABLE Rooms ( room_id int PRIMARY KEY AUTO_INCREMENT, title varchar(255), price int, location varchar(255), description varchar(700), image varbinary(MAX));`;
//       return NextResponse.json({ result }, { status: 200 });
//     } catch (error) {
//       return NextResponse.json({ error }, { status: 500 });
//     }
//   }