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
      </div>
    </div>
  )
}

export default Suggestions
