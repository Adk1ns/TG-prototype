import styled from 'styled-components'

const RemindersStyles = styled.div`
  width: 100%;

  .reminder {
    color: ${(props) => props.theme.three};
    &:hover {
      color: ${(props) => props.theme.six};
    }
  }
`

export default RemindersStyles
