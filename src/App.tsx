import React, { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Footer from './components/Footer';
import ResultCard from './components/ResultCard';
import Spinner from './components/Spinner';
import { getQuestion } from './container';
import { difficulty, Question } from "./types/index";

const App: React.FC = () => {

  let [questions, setQuestions] = useState<Question[]>([]);
  let [questionNumber, setQuestionNumber] = useState(0);
  let [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [restart, setRestart] = useState(false);

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const data: Question[] = await getQuestion(5, difficulty.EASY);
      setQuestions(data);
      setLoading(true)
    }
    fetchData();
    setRestart(false);
    setLoading(false);
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

  // for restart quiz
  const tryAgain = () => {
    setRestart(true);
    setLoading(false);
    console.log("running");
    setQuestions([]);
    setQuestionNumber(0);
    setScore(0);
    setShowResult(false);
  }

  return (
    questions.length === 0 ? <Spinner /> :
      <div className="app">
        <h1 className="title">Quiz Application</h1>
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
            questionNumber={questionNumber}
            handleSubmit={handleSubmit}
            totalQuestions={questions.length}
            />
          }
          <Footer/>
      </div>
  );
}

export default App;
