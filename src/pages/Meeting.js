import React from 'react'
import VideoRoom from '../components/meeting/videoRoom/VideoRoom'
import { atom, useAtom } from 'jotai'
import { exampleAtom } from '../components/store/Atoms'
import MeetingManager from '../components/meeting/meetingManager/MeetingManager'

//will contain video room and meeting manager

const Meeting = () => {
  const [text, setText] = useAtom(exampleAtom)

  return (
    <div className="col">
      <div className="row g-0">
        <div className="col-12 col-sm-6 p-3">
          <h5>Video Room</h5>
          <VideoRoom />
        </div>
        <div className="col-12 col-sm-6 p-3">
          {' '}
          {/* <p>Jotai text: {text}</p> */}
          <MeetingManager />
        </div>
      </div>
    </div>
  )
}

export default Meeting
