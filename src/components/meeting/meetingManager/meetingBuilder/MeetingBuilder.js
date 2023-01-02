import { Button } from '@mui/material'
import ButtonFour from '../../../buttons/ButtonFour'
import ButtonMain from '../../../buttons/ButtonMain'
import ButtonPlus from '../../../buttons/ButtonPlus'
import ButtonThree from '../../../buttons/ButtonThree'
import ButtonTwo from '../../../buttons/ButtonTwo'
import StepperTG from '../../../stepper/StepperTG'
import QuestionMaker from './makers/QuestionMaker'
import PollMaker from './makers/PollMaker'

const MeetingBuilder = ({ meetingInProgress, setMeetingInProgress }) => {
  console.log(meetingInProgress)

  const StartMeeting = () => {
    setMeetingInProgress((prev) => !prev)
  }

  return (
    <div className="outline p-2 p-lg-3">
      <header>
        <h5>Plan a meeting</h5>
      </header>
      <div className="py-2 py-lg-3">
        <StepperTG />
      </div>
      <div className="d-flex justify-content-around my-3">
        <ButtonFour text="Intro" />
        <ButtonFour text="Questionnaire" />
        <ButtonFour text="Poll" />
        <ButtonFour text="Quiz" />
        <ButtonFour text="Graph" />
        <ButtonFour text="Roster" />
        <ButtonFour text="Chat" />
      </div>
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
        {/* <Button variant="contained" color="primary" onClick={StartMeeting}>
          Schedule
        </Button> */}
        {/* <Button variant="contained" color="success" onClick={StartMeeting}>
          Start
        </Button> */}
        <ButtonThree text="Schedule" />
        <div onClick={StartMeeting}>
          <ButtonTwo text="Start" />
        </div>
      </div>
    </div>
  )
}

export default MeetingBuilder
