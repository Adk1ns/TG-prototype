import styled from 'styled-components'

const GlobalStyles = styled.div`
  background-color: ${(props) => props.theme.mainBG};

  main {
    min-height: 90vh;
  }

  h1,
  h4,
  h5 {
    color: ${(props) => props.theme.four};
  }

  h2,
  p {
    color: ${(props) => props.theme.text};
  }

  .highlight {
    color: ${(props) => props.theme.six};
  }

  .outline {
    border: 1px solid ${(props) => props.theme.five};
    border-radius: 0.25rem;
    background-color: ${(props) => props.theme.bg};
    margin-bottom: 1rem;
    box-shadow: 1px 1px 3px #8888;
  }
`

export default GlobalStyles
