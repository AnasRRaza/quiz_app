import { FC } from 'react'
import { ResultPropTypes } from "../types";


const ResultCard: FC<ResultPropTypes> = (props) => {

  const { score, totalQuestions, tryAgain } = props;

  return (
    <div>
      <h1>Result</h1>
      <p>Your Score is {score} out of {totalQuestions}</p>
      <input type="button" value="Restart" onClick={tryAgain} />
    </div>
  )
}

export default ResultCard;
