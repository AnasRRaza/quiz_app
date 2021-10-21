
// types for get data from API

export type Quiz = {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: string[]
  question: string
  type: string
}

// types for required data for quiz questions

export type Question = {
  question: string
  answer: string
  options: string[]
}

// Cards propTypes 

export type questionPropTypes = {
  questions: string
  options: string[]
  handleSubmit: (e: React.FormEvent<EventTarget>, userAns: string) => void
  questionNumber: number
  totalQuestions: number
}

// Result Cards propTypes

export type ResultPropTypes = {
  score: number;
  totalQuestions: number;
  tryAgain: any
}

// types for select difficulty level

export enum difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}