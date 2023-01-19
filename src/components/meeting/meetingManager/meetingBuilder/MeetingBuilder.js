import { Button } from '@mui/material'
import ButtonFour from '../../../buttons/ButtonFour'
import ButtonMain from '../../../buttons/ButtonMain'
import ButtonPlus from '../../../buttons/ButtonPlus'
import ButtonThree from '../../../buttons/ButtonThree'
import ButtonTwo from '../../../buttons/ButtonTwo'
import StepperTG from '../../../stepper/StepperTG'
import QuestionMaker from './makers/QuestionMaker'
import PollMaker from './makers/PollMaker'
import { useState } from 'react'
import AddMakerButtons from './AddMakerButtons'

const MeetingBuilder = ({ meetingInProgress, setMeetingInProgress }) => {
  const [meetingComponents, setMeetingComponents] = useState([])

  const StartMeeting = () => {
    setMeetingInProgress((prev) => !prev)
  }

  const AddMeetingItem = (type) => {
    setMeetingComponents((meetingComponents) => [...meetingComponents, type])
  }

  console.log(meetingComponents)

  return (
    <div className="outline p-2 p-lg-3">
      <header>
        <h5>Plan a meeting</h5>
      </header>
      <div className="py-2 py-lg-3">
        <StepperTG />
      </div>
      <AddMakerButtons AddMeetingItem={AddMeetingItem} />

      <QuestionMaker />
      <PollMaker />
      <div className="outline p-2 p-lg-3">
        <header>
          <h5>Quiz</h5>
          <div className="up-one">x</div>
        </header>
        <div className="p-3">
          <input placeholder="Question" />
          <input placeholder="Answer" />
          <ButtonMain text="Add" />
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <ButtonThree text="Schedule" />
        <div onClick={StartMeeting}>
          <ButtonTwo text="Start" />
        </div>
      </div>
    </div>
  )
}

export default MeetingBuilder
