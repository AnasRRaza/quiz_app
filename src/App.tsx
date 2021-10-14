import React, { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import ResultCard from './components/ResultCard';
import { getQuestion } from './container';
import { Question } from "./types/index";

function App() {

  let [questions, setQuestions] = useState<Question[]>([]);
  let [questionNumber, setQuestionNumber] = useState(0);
  let [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data: Question[] = await getQuestion(5, "easy");
      setQuestions(data);
    }
    fetchData();
  }, []);

  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();
    // check user answer from correct answer
    const checkAns: Question = questions[questionNumber];
    if (userAns === checkAns.answer) {
      setScore(++score);
    }
    // show result
    if (questionNumber === questions.length - 1) {
      setShowResult(true);
    }
    else {
      setQuestionNumber(++questionNumber);
    }
  }

  return (
    questions.length === 0 ? <h1>Loading</h1> :
      <>
        {showResult ?
          <ResultCard score={score} totalQuestions={questions.length} />
          :
          <Cards
            questions={questions[questionNumber].question}
            options={questions[questionNumber].options}
            handleSubmit={handleSubmit}
          />
        }
      </>
  );
}

export default App;
