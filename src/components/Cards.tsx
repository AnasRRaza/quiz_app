import React, { FC } from 'react'
import { questionPropTypes } from '../types';

const Cards: FC<questionPropTypes> = (props) => {

  const { questions, options, handleSubmit } = props;

  return (
    <div>
      <p>{questions}</p>
      <form onSubmit={handleSubmit}>
        {
          options.map((val: string, ind: number) => {
            return (
              <label key={ind}>
                <input
                  type="radio"
                  value={val}
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
