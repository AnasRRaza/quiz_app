import { Question, Quiz } from "../types";
import { shuffleArray } from "../common/utils";

export const getQuestion = async (questionAmount: number, difficulty: string): Promise<Question[]> => {
  const res = await fetch(`https://opentdb.com/api.php?amount=${questionAmount}&category=9&difficulty=${difficulty}&type=multiple`);  // let { results } = await res.json();
  const data = await res.json();
  const { results } = data;
  const quiz: Question[] = results.map((question: Quiz) => {
    return {
      question: question.question,
      answer: question.correct_answer,
      options: shuffleArray(question.incorrect_answers.concat(question.correct_answer))
    }
  })
  return quiz;
}
