import React from 'react'
import VideoRoom from '../components/meeting/VideoRoom'

//will contain video room and meeting manager

const Meeting = () => {
  return (
    <div className="col">
      <div className="row">
        <div className="col-12 col-sm-6">
          <VideoRoom />
        </div>
        <div className="col-12 col-sm-6">
          {' '}
          <p>meeting manager</p>
        </div>
      </div>
    </div>
  )
}

export default Meeting
