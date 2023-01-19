import ButtonFour from '../../../buttons/ButtonFour'

const AddMakerButtons = ({ AddMeetingItem }) => {
  return (
    <div className="d-flex justify-content-around my-3">
      <div
        onClick={() => {
          AddMeetingItem('Intro')
        }}
      >
        <ButtonFour text="Intro" />
      </div>
      <div
        onClick={() => {
          AddMeetingItem('Questionnaire')
        }}
      >
        <ButtonFour text="Questionnaire" />
      </div>
      <div
        onClick={() => {
          AddMeetingItem('Poll')
        }}
      >
        <ButtonFour text="Poll" />
      </div>
      <div
        onClick={() => {
          AddMeetingItem('Quiz')
        }}
      >
        <ButtonFour text="Quiz" />
      </div>
      <div
        onClick={() => {
          AddMeetingItem('Roster')
        }}
      >
        <ButtonFour text="Roster" />
      </div>
      <div
        onClick={() => {
          AddMeetingItem('Chat')
        }}
      >
        <ButtonFour text="Chat" />
      </div>
    </div>
  )
}

export default AddMakerButtons
