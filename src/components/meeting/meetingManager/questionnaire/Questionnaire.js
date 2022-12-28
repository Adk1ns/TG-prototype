import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'
import Avatar from '@mui/material/Avatar'

const Questionnaire = ({ data }) => {
  console.log(data)
  return (
    <div className="col p-3 outline">
      <header className="d-flex justify-content-between p-1">
        <h4>{data.type}</h4>
        <div className="d-flex justify-content-between">
          <p className="m-2">John</p>
          <Avatar />
        </div>
      </header>
      <div>
        {' '}
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Who will win tonight's game?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="TrailBlazers"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="TrailBlazers"
              control={
                <Radio
                  sx={{
                    color: '#355670',
                    '&.Mui-checked': {
                      color: '#355670',
                    },
                  }}
                />
              }
              label="Trailblazers"
            />
            <FormControlLabel
              value="Thunder"
              control={
                <Radio
                  sx={{
                    color: '#355670',
                    '&.Mui-checked': {
                      color: '#355670',
                    },
                  }}
                />
              }
              label="Thunder"
            />
          </RadioGroup>
          {data.details.map((question, index) => (
            <div key={index}>
              <h5>{question.question}</h5>
              <TextField
                multiline
                id="outlined-basic"
                label=""
                variant="outlined"
                rows={4}
              />
            </div>
          ))}
        </FormControl>
      </div>
    </div>
  )
}

export default Questionnaire
