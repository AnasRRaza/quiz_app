import React from "react"

export type Quiz = {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: string[]
  question: string
  type: string
}

export type Question = {
  question: string
  answer: string
  options: string[]
}

export type questionPropTypes = {
  questions: string
  options: string[]
  handleSubmit: (e: React.FormEvent<EventTarget>) => void
}