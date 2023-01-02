import styled from 'styled-components'

const ButtonStyle = styled.div`
  min-height: 2rem;
  width: 5.5rem;
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme.eight};
  box-shadow: 1px 1px 1px lightgray;
  color: black;
  font-weight: 700;
  padding: 0.2rem;
  display: flex;
  justify-content: center;
  cursor: pointer;
  position: relative;
  &:active {
    opacity: 0.9;
    top: 1px;
    left: 1px;
    box-shadow: none;
  }
`

const ButtonThree = ({ text }) => {
  return <ButtonStyle>{text}</ButtonStyle>
}

export default ButtonThree
