import React, { useState } from 'react'
import MeetingComponents from './MeetingComponents'
import MeetingManagerStyles from './MeetingManagerStyles'

const MeetingManager = ({ meetingDetails }) => {
  const [page, setPage] = useState(1)

  const nextPage = () => {
    if (page < meetingDetails.meetingComponents.length) {
      setPage(page + 1)
    }
  }

  const backPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  return (
    <MeetingManagerStyles>
      <h5>Meeting Manager</h5>
      <div className="">
        {meetingDetails.meetingComponents
          .slice(page - 1, page)
          .map((components, index) => (
            <div key={index}>
              <MeetingComponents components={components} />
            </div>
          ))}
        <div>
          {}
          <button onClick={backPage}>Back</button>
          <button onClick={nextPage}>Next</button>
        </div>
      </div>
    </MeetingManagerStyles>
  )
}

export default MeetingManager
