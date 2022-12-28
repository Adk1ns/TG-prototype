import { Alert } from '@mui/material'
import React from 'react'
import SimpleSnackbar from '../components/experimental/SimpleSnackbar.'
import HabitTracker from '../components/habitTracker/HabitTracker'
import MusicPost from '../components/posts/MusicPost'
import Post from '../components/posts/Post'
import Reminders from '../components/reminders/Reminders'

const Home = () => {
  return (
    <div className="col px-lg-3">
      <div className="row">
        <div className="col-12 col-md-6 px-lg-5 py-2">
          <Reminders />
          <div className="px-lg-5">
            <div className="my-2">
              <Post />
            </div>
            <div className="my-2">
              <Post />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 px-5 py-2">
          <HabitTracker />
          <div>
            <p>suggested groups / people</p>
          </div>
          <SimpleSnackbar />
          <Alert severity="error">This is an error alert — check it out!</Alert>
        </div>
      </div>
    </div>
  )
}

export default Home
