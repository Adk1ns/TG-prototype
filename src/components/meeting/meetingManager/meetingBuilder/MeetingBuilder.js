import { Button } from '@mui/material'
import ButtonMain from '../../../buttons/ButtonMain'
import ButtonPlus from '../../../buttons/ButtonPlus'
import ButtonTwo from '../../../buttons/ButtonTwo'
import StepperTG from '../../../stepper/StepperTG'

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
      <div className="outline p-2 p-lg-3">
        <header>
          <h5>Questionnaire</h5>
          <div className="up-one">x</div>
        </header>
        <div className="p-3 d-flex justify-content-between">
          <input placeholder="Question" />
          <ButtonMain text="Add" />
        </div>
      </div>
      <div className="outline p-2 p-lg-3">
        <header>
          <h5>Poll</h5>
          <div className="up-one">x</div>
        </header>
        <div className="p-3">
          <input placeholder="Question" />
        </div>
        <div className="p-3 d-flex justify-content-between">
          <input placeholder="Option" />
          <ButtonMain text="Add" />
        </div>
      </div>
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
        <Button variant="contained" color="primary" onClick={StartMeeting}>
          Schedule
        </Button>
        <Button variant="contained" color="success" onClick={StartMeeting}>
          Start
        </Button>
      </div>
    </div>
  )
}

export default MeetingBuilder
