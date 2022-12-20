import React from 'react'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material'
import AddAPhotoTwoToneIcon from '@mui/icons-material/AddAPhotoTwoTone'

const Reminders = () => {
  return (
    <div className="d-flex justify-content-around">
      <div>
        <AccessAlarm />
        reminder
      </div>
      <div>
        <ThreeDRotation />
        reminder
      </div>
      <div>
        <AddAPhotoTwoToneIcon />
        reminder
      </div>
    </div>
  )
}

export default Reminders
