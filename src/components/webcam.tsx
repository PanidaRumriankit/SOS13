import React from "react";
import Webcam from "react-webcam";

class WebcamCapture extends React.Component {
    render() {
      const videoConstraints = {
        facingMode: 'user'
      };
  
      return (
        <Webcam
          videoConstraints={videoConstraints}
          mirrored={true}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1, // Ensures the webcam is behind other content
            objectFit: 'cover'
          }}
        />
      );
    }
}

export default WebcamCapture;
