import React, { useState } from 'react'
import VideoRoom from '../components/meeting/videoRoom/VideoRoom'
import { atom, useAtom } from 'jotai'
import { exampleAtom } from '../data/store/Atoms'
import MeetingManager from '../components/meeting/meetingManager/MeetingManager'
import { Button } from '@mui/material'
import MeetingBuilder from '../components/meeting/meetingManager/meetingBuilder/MeetingBuilder'
import UpcomingMeetings from '../components/meeting/meetingManager/meetingBuilder/UpcomingMeetings'
import mockMeeting from '../data/mockMeeting.json'
import MeetingLog from '../components/meeting/meetingLog/MeetingLog'

const Meeting = () => {
  const [text, setText] = useAtom(exampleAtom)
  const [meetingInProgress, setMeetingInProgress] = useState(false)
  const [meetingDetails, setMeetingDetails] = useState(mockMeeting)

  const StartMeeting = () => {
    setMeetingInProgress((prev) => !prev)
  }

  return (
    <div className="col-12 p-lg-2">
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
            {/* <p>Jotai text: {text}</p> */}
            <MeetingManager meetingDetails={meetingDetails} />
          </div>
        </div>
      )}
      {!meetingInProgress && (
        <div className="row p-2 p-lg-5 g-0 pt-lg-3">
          <UpcomingMeetings />
          <div className="col-12 col-lg-6 p-lg-2">
            <MeetingBuilder
              meetingInProgress={meetingInProgress}
              setMeetingInProgress={setMeetingInProgress}
              meetingDetails={meetingDetails}
            />
          </div>
          <div className="col-12 col-lg-6 p-lg-2">
            <MeetingLog />
          </div>
        </div>
      )}
    </div>
  )
}

export default Meeting
