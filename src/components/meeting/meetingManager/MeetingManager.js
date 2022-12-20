import React from 'react'
import MeetingManagerStyles from './MeetingManagerStyles'
import Questionaire from './Questionaire/Questionaire'
import Quiz from './quiz/Quiz'

const MeetingManager = () => {
  return (
    <MeetingManagerStyles>
      MeetingManager
      <div className="p-1 p-md-3">
        <Questionaire />
        <Quiz />
      </div>
    </MeetingManagerStyles>
  )
}

export default MeetingManager
