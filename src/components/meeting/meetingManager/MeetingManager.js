import React from 'react'
import MeetingManagerStyles from './MeetingManagerStyles'
import Questionaire from './Questionaire/Questionaire'

const MeetingManager = () => {
  return (
    <MeetingManagerStyles>
      MeetingManager
      <div>
        <Questionaire />
      </div>
    </MeetingManagerStyles>
  )
}

export default MeetingManager
