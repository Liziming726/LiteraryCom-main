"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import { Button, Divider } from "antd";
import type { ConfigProviderProps } from "antd";

import { ArrowLeftOutlined, SyncOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

type SizeType = ConfigProviderProps["componentSize"];

interface Question {
  question: string;
  optiona?: string;
  optionb?: string;
  optionc?: string;
  optiond?: string;
  correctOption: string;
  contenta?: string;
  contentb?: string;
  contentc?: string;
  contentd?: string;
  explanation: string;
}

interface QuestionWithDynamicOptions extends Question {
  [key: string]: string | undefined;
}

function ReciteQuestions() {
  const [questions, setQuestions] = useState<QuestionWithDynamicOptions[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const [size, setSize] = useState<SizeType>("large");

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetch("/api/sel-topic")
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched questions:", data.question.rows);
          setQuestions(data.question.rows);
        })
        .catch((error) => console.error("Error fetching questions:", error));
    }
  }, []);

  const handleOptionSelect = (optionKey: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    setSelectedOption(optionKey);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    }
  };

  return (
    <div>
      {questions.length > 0 ? (
        <div>
          <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-100 dark:to-gray-200 dark:text-gray-900">
            <Image
              src="/assets/question.svg"
              width={30}
              height={30}
              alt="?"
              className="w-4 h-4 inline-block question"
            />
            {questions[currentQuestionIndex].question}
          </h1>
          {["optiona", "optionb", "optionc", "optiond"].map((optionKey) => {
            const optionValue =
              questions[currentQuestionIndex][
                optionKey as keyof QuestionWithDynamicOptions
              ];
            return (
              optionValue && (
                <div className="center">
                  <Button
                    className="mt-4 text-xl btn"
                    block
                    key={optionKey}
                    onClick={() => handleOptionSelect(optionKey)}
                    size={size}
                  >
                    {optionValue}
                  </Button>
                </div>
              )
            );
          })}
          {selectedOption && (
            <div>
              <Divider orientation="right">解析</Divider>
              <h3 className="explanation">
                A: {questions[currentQuestionIndex].contenta}
              </h3>
              <h3 className="explanation">
                B: {questions[currentQuestionIndex].contentb}
              </h3>
              <h3 className="explanation">
                C: {questions[currentQuestionIndex].contentc}
              </h3>
              <h3 className="explanation">
                D: {questions[currentQuestionIndex].contentd}
              </h3>
              <Divider></Divider>
              <h3>
                解释:
                <p className="explanation">
                  {questions[currentQuestionIndex].explanation}
                </p>
              </h3>
              <button
                onClick={handleNextQuestion}
                className="p-2 mt-4 text-xl font-bold"
              >
                Next Question
              </button>
            </div>
          )}
        </div>
      ) : (
        <p>😜等等等等等等等~马上就来~.</p>
      )}
    </div>
  );
}

export default function Recite() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex1">
        <ReciteQuestions />

        <FloatButton.Group shape="square" style={{ right: 24 }}>
          <FloatButton icon={<SyncOutlined />} onClick={() => window.location.reload()} />
          <FloatButton.BackTop visibilityHeight={0} />
          <FloatButton  icon={<ArrowLeftOutlined />} onClick={() => window.history.back()} />
        </FloatButton.Group>
      </div>
    </main>
  );
}
