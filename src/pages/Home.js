import React from 'react'
import SimpleSnackbar from '../components/experimental/SimpleSnackbar.'
import HabitTracker from '../components/habitTracker/HabitTracker'
import Post from '../components/posts/Post'
import Reminders from '../components/reminders/Reminders'
import Suggestions from '../components/suggestions/Suggestions'

const Home = () => {
  return (
    <div className="col px-lg-3">
      <div className="row">
        <div className="col-12 col-md-6 px-lg-5 py-4">
          <Reminders />
          <HabitTracker />
          <Suggestions />
        </div>
        <div className="col-12 col-md-6 px-lg-5 py-2">
          <div className="my-3">
            <Post />
          </div>
          <div className="my-3">
            <Post />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
