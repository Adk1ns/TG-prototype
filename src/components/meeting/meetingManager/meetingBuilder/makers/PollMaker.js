import React from 'react'
import ButtonMain from '../../../../buttons/ButtonMain'

const PollMaker = () => {
  return (
    <div className="outline p-2 p-lg-3">
      <header>
        <h5>Poll</h5>
        <div className="up-one color-nine">X</div>
      </header>
      <div className="p-3 d-flex justify-content-between">
        <input placeholder="Question" />
        <ButtonMain text="Add" />
      </div>
      <div className="px-5 d-flex justify-content-between">
        <input placeholder="Option" />
      </div>
      <div className="my-3">
        <p>
          <span className="color-nine mx-3">X</span>Who will win tonight's game?
        </p>
        <ul className="px-5">
          <li>Trail Blazers</li>
          <li>Warriors</li>
        </ul>
      </div>
    </div>
  )
}

export default PollMaker
