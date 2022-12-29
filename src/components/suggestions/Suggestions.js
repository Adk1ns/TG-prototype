import { Avatar } from '@mui/material'
import React from 'react'

const Suggestions = () => {
  return (
    <div className="col">
      <h5>Suggested Networks</h5>
      <div className="px-2">
        <div className="row">
          <Avatar /> Finance Gurus
        </div>
        <div className="row">
          <Avatar />
          Dev Team
        </div>
        <div className="row pb-5">
          <Avatar />
          Book Club
        </div>
        <p>ideas on what each row should contain</p>
        <div className="d-flex justify-content-around">
          <>
            <Avatar />
            <p>Mr Bill's Math Class</p>
            <p>10:30 Wednesdays</p>
          </>
          <button>Apply</button>
        </div>
      </div>
    </div>
  )
}

export default Suggestions
