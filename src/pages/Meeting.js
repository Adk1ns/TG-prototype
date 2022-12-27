import React, { useState } from 'react'
import VideoRoom from '../components/meeting/videoRoom/VideoRoom'
import { atom, useAtom } from 'jotai'
import { exampleAtom } from '../components/store/Atoms'
import MeetingManager from '../components/meeting/meetingManager/MeetingManager'
import { Button } from '@mui/material'
import MeetingBuilder from '../components/meeting/meetingManager/meetingBuilder/MeetingBuilder'

//will contain video room and meeting manager

const Meeting = () => {
  const [text, setText] = useAtom(exampleAtom)
  const [meetingInProgress, setMeetingInProgress] = useState(false)

  const StartMeeting = () => {
    setMeetingInProgress((prev) => !prev)
  }

  return (
    <div className="col">
      {meetingInProgress && (
        <div className="row g-0">
          <div className="col-12 col-sm-6 p-3">
            <h5>Video Room</h5>
            <VideoRoom />
            <Button variant="contained" color="error" onClick={StartMeeting}>
              End
            </Button>
          </div>
          <div className="col-12 col-sm-6 p-3">
            {' '}
            {/* <p>Jotai text: {text}</p> */}
            <MeetingManager />
          </div>
        </div>
      )}
      {!meetingInProgress && (
        <div className="p-5">
          <p>build a meeting</p>
          <MeetingBuilder
            meetingInProgress={meetingInProgress}
            setMeetingInProgress={setMeetingInProgress}
          />
        </div>
      )}
    </div>
  )
}

export default Meeting
