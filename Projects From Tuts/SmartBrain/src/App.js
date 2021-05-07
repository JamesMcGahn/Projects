import React from 'react';
import Navigation from './components/navigation/Navigation'
import Clarifai from 'clarifai'
import Logo from './components/logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';
const CLARIFAIKEY = process.env.REACT_APP_CLARIFAI_KEY;


const app = new Clarifai.App({
  apiKey: CLARIFAIKEY
})


const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input })
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function (response) {
        console.log(response.outputs[0].data)
      },
      function (err) {

      }
    )


    // app.models
    //   .predict(Clarifai.FACE_DETECT_MODEL, 'https://samples.clarifai.com/face-det.jpg')
    //   .then(response => { console.log('hi', response) })
  }


  render() {
    return (
      <div className="App" >
        <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    )
  };
}

export default App;
