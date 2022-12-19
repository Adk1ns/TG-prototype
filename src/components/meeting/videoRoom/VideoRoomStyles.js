import styled from 'styled-components'

const VideoRoomStyles = styled.div`
  .present-main {
    width: 100%;
    min-height: 25rem;
    background-color: white;
  }
  .present-sub {
    width: 25%;
    border: 1px solid lightgray;
    video {
      width: 100%;
    }
  }
`

export default VideoRoomStyles
