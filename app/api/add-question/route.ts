import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const question = searchParams.get('question');
  const optionA = searchParams.get('optionA');
  const optionB = searchParams.get('optionB');
  const optionC = searchParams.get('optionC');
  const optionD = searchParams.get('optionD');
  const correctoptiona = searchParams.get('correctoptiona'); // Added correctOption parameter
  const correctoptionb = searchParams.get('correctoptionb'); // Added correctOption parameter
  const correctoptionc = searchParams.get('correctoptionc'); // Added correctOption parameter
  const correctoptiond = searchParams.get('correctoptiond'); // Added correctOption parameter
  const contentA = searchParams.get('contentA');
  const contentB = searchParams.get('contentB');
  const contentC = searchParams.get('contentC');
  const contentD = searchParams.get('contentD');
  const explanation = searchParams.get('explanation');
  
 
  try {
    if (!question) throw new Error('Question is required');
    await sql`INSERT INTO question (question, optionA, optionB, optionC, optionD, correctoptiona,correctoptionb,correctoptionc,correctoptiond, contentA, contentB, contentC, contentD, explanation) VALUES (${question}, ${optionA}, ${optionB}, ${optionC}, ${optionD}, ${correctoptiona},${correctoptionb},${correctoptionc},${correctoptiond}, ${contentA}, ${contentB}, ${contentC}, ${contentD}, ${explanation} );`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const questions = await sql`SELECT * FROM question;`;
  return NextResponse.json({ questions }, { status: 200 });
}
