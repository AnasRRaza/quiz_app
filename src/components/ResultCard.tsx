import { FC } from 'react'
import { ResultPropTypes } from "../types";


const ResultCard: FC<ResultPropTypes> = (props) => {

  const { score, totalQuestions, tryAgain } = props;

  return (
    <div className="result-card">
      <h1 className="result">Result</h1>
      <div className="result-items">
        <h2>Total Questions:</h2>
        <h2>{totalQuestions}</h2>
      </div>
      <div className="result-items">
        <h2>Correct Answers:</h2>
        <h2>{score}</h2>
      </div>
      <div className="result-items">
        <h2>Percentage:</h2>
        <h2>{(score / 5) * 100}</h2>
      </div>
      <input type="button" value="Restart" onClick={tryAgain} className="restart-btn" />
    </div>
  )
}

export default ResultCard;
