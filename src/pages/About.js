import styled from 'styled-components'
import landing1 from '../images/mock/landing1.png'
import landing2 from '../images/mock/landing2.png'
import landing3 from '../images/mock/landing3.png'
import landing4 from '../images/mock/landing4.png'
import landing5 from '../images/mock/landing5.png'
import landing6 from '../images/mock/landing6.png'

const LandingStyle = styled.div`
  img {
    width: 100%;
  }
`

const About = () => {
  return (
    <LandingStyle className="col">
      <img src={landing1} />
      <img src={landing2} />
      <img src={landing3} />
      <img src={landing4} />
      <img src={landing5} />
      <img src={landing6} />
    </LandingStyle>
  )
}

export default About
