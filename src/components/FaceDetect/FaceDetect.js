import React, { useEffect } from "react";
import * as faceapi from 'face-api.js';

// let image
// let canvas
// class App extends Component {

//   componentDidMount() {
//     Promise.all([
//       faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
//       faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
//       faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
//     ]).then(start)

//     function start (){
//       console.log('hello start')
//     }
//   }

//   onImageUpload= async() => {
//     const imageUpload = document.getElementById('imageUpload')
//     if(image) image.remove();
//     if(canvas) canvas.remove();
    
//     const container = document.createElement('section')
//     container.style.position = 'relative'
//     container.style.display = 'flex'
//     container.style.alignItems = 'center'
//     container.style.justifyContent = 'center'
//     document.body.append(container)

//     image = await faceapi.bufferToImage(imageUpload.files[0])
//     container.append(image)
//     canvas = faceapi.createCanvasFromMedia(image)
//     container.append(canvas)
//     const displaySize = { width: image.width, height: image.height }
//     faceapi.matchDimensions(canvas, displaySize)
//     const detections = await faceapi.detectAllFaces(image).withFaceLandmarks().withFaceDescriptors()
//     const resizedDetections = faceapi.resizeResults(detections, displaySize)

//     resizedDetections.forEach(detection => {
//       const box = detection.detection.box
//       const drawBox = new faceapi.draw.DrawBox(box, { label: 'face detected' })
//       drawBox.draw(canvas)
//     })
//   }

//   render() {
//     return (
//       <div className='imageUpload'>
//         <input type="file" name="imageUpload" id="imageUpload"  onChange={this.onImageUpload}/>
//       </div>
//      );
//   }
// }

// export default App;


const App = () =>{
 
  let image
  let canvas

  useEffect(() => {
    Promise.all([
      faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
      faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
    ])
  }, [])

  const onImageUpload= async() => {
    const imageUpload = document.getElementById('imageUpload')
    if(image) image.remove();
    if(canvas) canvas.remove();
    
    const container = document.createElement('section')
    container.style.position = 'relative'
    container.style.display = 'flex'
    container.style.alignItems = 'center'
    container.style.justifyContent = 'center'
    document.body.append(container)

    image = await faceapi.bufferToImage(imageUpload.files[0])
    container.append(image)
    canvas = faceapi.createCanvasFromMedia(image)
    container.append(canvas)
    const displaySize = { width: image.width, height: image.height }
    faceapi.matchDimensions(canvas, displaySize)
    const detections = await faceapi.detectAllFaces(image).withFaceLandmarks().withFaceDescriptors()
    const resizedDetections = faceapi.resizeResults(detections, displaySize)

    resizedDetections.forEach(detection => {
      const box = detection.detection.box
      const drawBox = new faceapi.draw.DrawBox(box, { label: 'face detected' })
      drawBox.draw(canvas)
    })
  }

    return (
      <div className='imageUpload'>
        <input type="file" name="imageUpload" id="imageUpload"  onChange={onImageUpload}/>
      </div>
     );
  }
export default App;
