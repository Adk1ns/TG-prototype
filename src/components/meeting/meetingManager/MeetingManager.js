import React from 'react'
import MeetingManagerStyles from './MeetingManagerStyles'
import Questionnaire from './questionnaire/Questionnaire'
import Quiz from './quiz/Quiz'

const MeetingManager = () => {
  return (
    <MeetingManagerStyles>
      <h5>Meeting Manager</h5>
      <div className="">
        <Questionnaire />
        <Quiz />
      </div>
    </MeetingManagerStyles>
  )
}

export default MeetingManager
