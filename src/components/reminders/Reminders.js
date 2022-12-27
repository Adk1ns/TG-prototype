import React from 'react'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material'
import AddAPhotoTwoToneIcon from '@mui/icons-material/AddAPhotoTwoTone'
import AcUnitIcon from '@mui/icons-material/AcUnit'

const Reminders = () => {
  return (
    <div className="d-flex justify-content-around outline px-5 m-3">
      <div className="m-2 text-center">
        <AccessAlarm fontSize="large" />
        reminder
      </div>
      <div className="m-2 text-center">
        <ThreeDRotation fontSize="large" />
        reminder
      </div>
      <div className="m-2 text-center">
        <AddAPhotoTwoToneIcon fontSize="large" color="defualt" />
        reminder
      </div>
      <div className="m-2 text-center">
        <AcUnitIcon fontSize="large" />
        reminder
      </div>
    </div>
  )
}

export default Reminders
