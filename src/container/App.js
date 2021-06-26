import React, {Component} from 'react';
import Logo from '../components/Logo/Logo';
import Particles from 'react-particles-js';
import FaceDetect from '../components/FaceDetect/FaceDetect';

let particleOptions = {
  "particles": {
      "number": {
          "value": 50
      },
      "size": {
          "value": 3
      }
  },
}

class App extends Component {

  render() {
    return(
      <main>
      <Particles className='particles' params={particleOptions} />
            <Logo/>
            <div className="center-text">
              <h1>The Face Detector</h1>
              <p>Upload your image to detect people in your picture. This app is developed with the technology "React"</p>
            </div>
        <FaceDetect/>
      </main>
    )
  }
};
export default App;
