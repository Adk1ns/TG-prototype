import React from 'react'
import Reminders from '../components/reminders/Reminders'

const Home = () => {
  return (
    <div className="col d-flex justify-content-around">
      <div className="row">
        <div className="col-12 col-sm-6">
          <Reminders />
        </div>
        <div className="col-12 col-sm-6">suggestions</div>
      </div>
    </div>
  )
}

export default Home
