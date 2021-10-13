import React, { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import { getQuestion } from './container';
import { Question } from "./types/index";

function App() {

  let [questions, setQuestions] = useState<Question[]>([]);
  let [questionNumber, setQuestionNumber] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data: Question[] = await getQuestion(5, "easy");
      setQuestions(data);
    }
    fetchData();
  }, []);

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (questionNumber !== questions.length - 1) {
      setQuestionNumber(++questionNumber);
    }
    else {
      alert("Quiz done")
      setQuestionNumber(0);
    }
  }

  if (questions.length === 0)
    return <h1>Loading</h1>

  return (
    <div>
      <Cards
        questions={questions[questionNumber].question}
        options={questions[questionNumber].options}
        handleSubmit={handleSubmit}
      />
    </div >
  );
}

export default App;
