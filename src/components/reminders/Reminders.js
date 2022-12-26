import React from 'react'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material'
import AddAPhotoTwoToneIcon from '@mui/icons-material/AddAPhotoTwoTone'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import styled from 'styled-components'

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.h1};
  border: 2px solid ${(props) => props.theme.main};
`

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
      <Button>hi</Button>
    </div>
  )
}

export default Reminders
