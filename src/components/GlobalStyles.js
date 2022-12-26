import styled from 'styled-components'

const GlobalStyles = styled.div`
  background-color: #e9ecef;

  main {
    min-height: 90vh;
  }

  .outline {
    border: 1px solid #888888;
    border-radius: 0.25rem;
    background-color: ${(props) => props.theme.white};
    margin-bottom: 1rem;
  }
`

export default GlobalStyles
