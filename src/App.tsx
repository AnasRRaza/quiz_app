import React, { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import ResultCard from './components/ResultCard';
import Spinner from './components/Spinner';
import { getQuestion } from './container';
import { difficulty, Question } from "./types/index";

function App() {

  let [questions, setQuestions] = useState<Question[]>([]);
  let [questionNumber, setQuestionNumber] = useState(0);
  let [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [restart, setRestart] = useState(false);



  useEffect(() => {
    const fetchData = async () => {
      const data: Question[] = await getQuestion(5, difficulty.EASY);
      setQuestions(data);
      setLoading(true)
    }
    fetchData();
  }, [restart]);

  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();
    // check user answer from correct answer
    const checkAns: Question = questions[questionNumber];
    if (userAns === checkAns.answer) {
      setScore(++score);
    }
    if (questionNumber === questions.length - 1) {
      setShowResult(true);
    }
    else {
      setQuestionNumber(++questionNumber);
    }
  }

  const tryAgain = () => {
    setRestart(true);
    console.log("running")
    // window.location.reload();
  }

  return (
    questions.length === 0 ? <Spinner /> :
      <>
        {!loading && <Spinner />}
        {showResult ?
          <ResultCard
            score={score}
            totalQuestions={questions.length}
            tryAgain={tryAgain}
          />
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
