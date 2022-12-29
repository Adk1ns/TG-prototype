import React from 'react'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material'
import AddAPhotoTwoToneIcon from '@mui/icons-material/AddAPhotoTwoTone'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import RemindersStyles from './RemindersStyles'
import Badge from '@mui/material/Badge'
import MailIcon from '@mui/icons-material/Mail'
import { Tooltip } from '@mui/material'

const Reminders = () => {
  return (
    <RemindersStyles>
      <div className="d-flex justify-content-around outline">
        <div className="m-2 text-center">
          <AccessAlarm fontSize="large" />
          reminder
        </div>
        <div className="m-2 text-center">
          <ThreeDRotation fontSize="large" />
          reminder
        </div>
        <Tooltip title="burr">
          <div className="m-2 text-center">
            <AcUnitIcon fontSize="large" />
            reminder
          </div>
        </Tooltip>
        <div className="m-2 text-center">
          <Badge badgeContent={4} color="primary">
            <MailIcon fontSize="large" />
          </Badge>
        </div>
      </div>
    </RemindersStyles>
  )
}

export default Reminders
