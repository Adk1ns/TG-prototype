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

  header {
    border-bottom: 1px solid ${(props) => props.theme.five};
    padding: 0.25rem;
    display: flex;
    justify-content: space-between;
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

  .up-one {
    margin-top: -0.5rem;
  }

  .color-seven {
    color: ${(props) => props.theme.seven};
  }
  .color-nine {
    color: ${(props) => props.theme.nine};
  }
`

export default GlobalStyles
