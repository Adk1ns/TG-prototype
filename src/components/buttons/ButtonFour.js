import styled from 'styled-components'

const ButtonStyle = styled.div`
  min-height: 2rem;
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme.bg};
  border: 1px solid ${(props) => props.theme.four};
  box-shadow: 1px 1px 1px lightgray;
  color: ${(props) => props.theme.four};
  font-weight: 700;
  padding: 0.2rem;
  display: flex;
  justify-content: center;
  cursor: pointer;
  position: relative;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  &:active {
    opacity: 0.9;
    top: 1px;
    left: 1px;
    box-shadow: none;
    border: 1px solid ${(props) => props.theme.six};
    color: ${(props) => props.theme.six};
  }
`

const ButtonFour = ({ text }) => {
  return <ButtonStyle>{text}</ButtonStyle>
}

export default ButtonFour
