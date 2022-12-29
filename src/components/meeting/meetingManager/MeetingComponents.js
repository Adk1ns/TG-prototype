import React from 'react'
import Questionnaire from './questionnaire/Questionnaire'
import Quiz from './quiz/Quiz'

const MeetingComponents = ({ components }) => {
  console.log(components)
  return (
    <div>
      {components.type === 'Questionnaire' && (
        <Questionnaire data={components} />
      )}
      {components.type === 'Quiz' && <Quiz data={components} />}
    </div>
  )
}

export default MeetingComponents
