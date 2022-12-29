import { useEffect, useRef, useState } from 'react'
import { atom, useAtom } from 'jotai'
import { exampleAtom } from '../../../data/store/Atoms'
import Peer from 'peerjs'
import VideoRoomStyles from './VideoRoomStyles'
import user from '../../../images/user.png'

const VideoRoom = () => {
  const [peerId, setPeerId] = useState('')
  const [remotePeerIdValue, setRemotePeerIdValue] = useState('')
  const remoteVideoRef = useRef(null)
  const currentUserVideoRef = useRef(null)
  const peerInstance = useRef(null)
  const [text, setText] = useAtom(exampleAtom)

  useEffect(() => {
    const peer = new Peer()

    peer.on('open', (id) => {
      setPeerId(id)
    })

    peer.on('call', (call) => {
      var getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia

      getUserMedia({ video: true, audio: true }, (mediaStream) => {
        currentUserVideoRef.current.srcObject = mediaStream
        currentUserVideoRef.current.play()
        call.answer(mediaStream)
        call.on('stream', function (remoteStream) {
          remoteVideoRef.current.srcObject = remoteStream
          remoteVideoRef.current.play()
        })
      })
    })

    peerInstance.current = peer
  }, [])

  const call = (remotePeerId) => {
    var getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia

    getUserMedia({ video: true, audio: true }, (mediaStream) => {
      currentUserVideoRef.current.srcObject = mediaStream
      currentUserVideoRef.current.play()

      const call = peerInstance.current.call(remotePeerId, mediaStream)

      call.on('stream', (remoteStream) => {
        remoteVideoRef.current.srcObject = remoteStream
        remoteVideoRef.current.play()
      })
    })
  }

  return (
    <VideoRoomStyles>
      <div className="outline">
        <div className="present-main">
          <video ref={currentUserVideoRef} />
        </div>
        <div className="row g-0">
          <div className="present-sub">
            {!remotePeerIdValue && <img src={user} />}
            {remotePeerIdValue && <video ref={remoteVideoRef} />}
          </div>
          <div className="present-sub">
            {!remotePeerIdValue && <img src={user} />}
            {remotePeerIdValue && <video ref={remoteVideoRef} />}
          </div>
          <div className="present-sub">
            {!remotePeerIdValue && <img src={user} />}
            {remotePeerIdValue && <video ref={remoteVideoRef} />}
          </div>
          <div className="present-sub">
            {!remotePeerIdValue && <img src={user} />}
            {remotePeerIdValue && <video ref={remoteVideoRef} />}
          </div>
        </div>
        {/* <h5>Jotai Text: {text}</h5>
      <button onClick={() => setText('test')}>click</button> */}
        <h5>Current user id is {peerId}</h5>
        <input
          type="text"
          value={remotePeerIdValue}
          onChange={(e) => setRemotePeerIdValue(e.target.value)}
        />
        <button onClick={() => call(remotePeerIdValue)}>Call</button>
      </div>
    </VideoRoomStyles>
  )
}

export default VideoRoom
