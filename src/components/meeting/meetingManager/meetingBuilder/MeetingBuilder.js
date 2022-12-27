import { Button } from '@mui/material'
import StepperTG from '../../../stepper/StepperTG'

const MeetingBuilder = ({ meetingInProgress, setMeetingInProgress }) => {
  console.log(meetingInProgress)

  const StartMeeting = () => {
    setMeetingInProgress((prev) => !prev)
  }

  return (
    <div className="outline p-2 p-lg-3">
      <h5>Select meeting components</h5>
      <div className="py-2 py-lg-3">
        <StepperTG />
      </div>
      <div className="outline p-2 p-lg-3">
        <h5>Questionnaire</h5>
        <input placeholder="Question" />
        <button>+</button>
      </div>
      <div className="outline p-2 p-lg-3">
        <h5>Poll</h5>
        <input placeholder="Option" />
        <button>+</button>
      </div>
      <div className="outline p-2 p-lg-3">
        <h5>Quiz</h5>
        <input placeholder="Question" />
        <input placeholder="Answer" />
        <button>+</button>
      </div>
      <Button variant="contained" color="primary" onClick={StartMeeting}>
        Schedule
      </Button>
      <Button variant="contained" color="success" onClick={StartMeeting}>
        Start
      </Button>
    </div>
  )
}

export default MeetingBuilder
