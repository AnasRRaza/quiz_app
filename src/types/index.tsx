
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

// types for display questions in cards

export type questionPropTypes = {
  questions: string
  options: string[]
  handleSubmit: (e: React.FormEvent<EventTarget>, userAns: string) => void
}

// types for show data in result card

export type ResultPropTypes = {
  score: number;
  totalQuestions: number;
}