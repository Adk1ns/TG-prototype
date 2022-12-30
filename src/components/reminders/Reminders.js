import React from 'react'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material'
import AddAPhotoTwoToneIcon from '@mui/icons-material/AddAPhotoTwoTone'
import GroupsIcon from '@mui/icons-material/Groups'
import SportsScoreIcon from '@mui/icons-material/SportsScore'
import RemindersStyles from './RemindersStyles'
import Badge from '@mui/material/Badge'
import MailIcon from '@mui/icons-material/Mail'
import { Tooltip } from '@mui/material'

const Reminders = () => {
  return (
    <RemindersStyles className="outline">
      <p className="mx-2">Reminders</p>
      <div className="d-flex justify-content-around">
        <div className="mx-1 text-center reminder">
          <AccessAlarm fontSize="large" />
          <p>Appointment</p>
        </div>
        <div className="mx-1 text-center reminder">
          <SportsScoreIcon fontSize="large" />
          <p>Goal</p>
        </div>
        <Tooltip title="10:30 AM 2/12/23">
          <div className="mx-1 text-center reminder">
            <GroupsIcon fontSize="large" />
            <p>Meeting</p>
          </div>
        </Tooltip>
        <Tooltip title="10:30 AM 2/12/23">
          <div className="mx-1 text-center reminder">
            <GroupsIcon fontSize="large" />
            <p>Meeting</p>
          </div>
        </Tooltip>
        <div className="mx-1 text-center reminder">
          <Badge badgeContent={4} color="primary">
            <MailIcon fontSize="large" />
          </Badge>
          <p>Messages</p>
        </div>
      </div>
    </RemindersStyles>
  )
}

export default Reminders
