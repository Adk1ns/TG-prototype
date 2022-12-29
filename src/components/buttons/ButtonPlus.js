import styled from 'styled-components'

const ButtonPlusStyle = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
  background-color: ${(props) => props.theme.four};
  color: ${(props) => props.theme.bg};
  font-weight: 700;
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  &:active {
    opacity: 0.9;
    top: 1px;
    left: 1px;
  }
`

const ButtonPlus = () => {
  return <ButtonPlusStyle>+</ButtonPlusStyle>
}

export default ButtonPlus
