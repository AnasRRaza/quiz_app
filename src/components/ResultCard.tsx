import { FC } from 'react'
import { ResultPropTypes } from "../types";


const ResultCard: FC<ResultPropTypes> = (props) => {

  const { score, totalQuestions } = props;

  return (
    <div>
      <h1>Result</h1>
      <p>Your Score is {score} out of {totalQuestions}</p>
    </div>
  )
}

export default ResultCard;
