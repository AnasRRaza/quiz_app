import React, { FC, useState } from 'react'
import { questionPropTypes } from '../types';

const Cards: FC<questionPropTypes> = (props) => {

  const { questions, options, handleSubmit } = props;

  const [userAns, setUserAns] = useState("");

  const handleSubmitedAns = (e: any) => {
    setUserAns(e.target.value)
  }

  return (
    <div>
      <p>{questions}</p>
      <form onSubmit={(e: React.FormEvent<EventTarget>) => handleSubmit(e, userAns)}>
        {
          options.map((val: string, ind: number) => {
            return (
              <label key={ind}>
                <input
                  type="radio"
                  required={true}
                  value={val}
                  onChange={handleSubmitedAns}
                  checked={userAns === val}
                  name="options"
                />
                {val}
              </label>
            )
          })
        }
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Cards;
