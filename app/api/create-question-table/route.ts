import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
      const result =
        await sql`CREATE TABLE Question (
            Question varchar(255),
          OptionA varchar(255),
          OptionB varchar(255),
          OptionC varchar(255),
          OptionD varchar(255),
          CorrectOptionA varchar(255),
          CorrectOptionB varchar(255),
          CorrectOptionC varchar(255),
          CorrectOptionD varchar(255),
          ContentA text,
          ContentB text,
          ContentC text,
          ContentD text,
          Explanation text
        );`;
      return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
  }