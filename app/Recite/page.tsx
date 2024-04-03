"use client";
import { useState, useEffect } from "react";

// Define a TypeScript interface for the question structure based on the database schema
interface Question {
  question: string;
  optiona: string;
  optionb: string;
  optionc: string;
  optiond: string;
}

function ReciteQuestions() {
  // Use the Question interface to type the questions state
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Client-side-only code
      fetch("/api/sel-question")
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched questions:", data.question.rows); // Log fetched data to the console
          setQuestions(data.question.rows); // Assuming the data structure includes a 'rows' field containing the questions
        })
        .catch((error) => console.error("Error fetching questions:", error));
    }
  }, []);

  return (
    <div>
      {questions.length > 0 ? (
        <ul>
          {questions.map((question, index) => (
            <li key={index}>
              <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-100 dark:to-gray-200 dark:text-gray-900">
                {question.question}
              </h1>
              <code className="font-mono font-bold">{question.optiona}</code>
              <h2 className="text-2xl font-semibold">{question.optionb}</h2>
              <h2 className="text-2xl font-semibold">{question.optionc}</h2>
              <h2 className="text-2xl font-semibold">{question.optiond}</h2>
            </li>
          ))}
        </ul>
      ) : (
        <p>No questions available.</p>
      )}
    </div>
  );
}

export default function Recite() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <ReciteQuestions />
      </div>
    </main>
  );
}
