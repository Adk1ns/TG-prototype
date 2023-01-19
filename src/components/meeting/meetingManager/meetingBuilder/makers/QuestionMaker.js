import React, { useState } from 'react'
import ButtonFour from '../../../../buttons/ButtonFour'
import ButtonMain from '../../../../buttons/ButtonMain'

const QuestionMaker = () => {
  const [questions, setQuestions] = useState([])
  const [question, setQuestion] = useState([])

  const AddQuestion = () => {
    setQuestions((questions) => [...questions, question])
  }

  return (
    <div className="outline p-2 p-lg-3">
      <header>
        <h5>Questionnaire</h5>
        <div className="up-one color-nine">X</div>
      </header>
      <div className="p-3 d-flex justify-content-between">
        <input placeholder="Question" />
        <ButtonMain text="Add" />
      </div>
      <div>
        <p>
          <span className="color-nine mx-3">X</span>
          What is your favorite color?{' '}
        </p>
        <p>
          <span className="color-nine mx-3">X</span>
          Where are you from?
        </p>
      </div>
    </div>
  )
}

export default QuestionMaker
