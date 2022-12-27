import styled from 'styled-components'

const GlobalStyles = styled.div`
  background-color: ${(props) => props.theme.mainBG};

  main {
    min-height: 90vh;
  }

  .outline {
    border: 1px solid ${(props) => props.theme.five};
    border-radius: 0.25rem;
    background-color: ${(props) => props.theme.bg};
    margin-bottom: 1rem;
  }
`

export default GlobalStyles
