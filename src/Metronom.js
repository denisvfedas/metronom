import React, { Component } from 'react';
import './Metronom.css';
import click1 from './click1.wav';
import click2 from './click2.wav';

class Metronom extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      playing: false,
      count: 0,
      bmp: 120,
      beatsPerMeasure: 10
    };
    
    // Create Audio objects with the files Webpack loaded
    this.click1 = new Audio(click1);
    this.click2 = new Audio(click2);
  }
  
  handleBmpChange = event => {
    const bmp = event.target.value;
    if(this.state.playing) {
      clearInterval(this.timer);
      setInterval(this.playClick, (60 / this.state.bmp) * 1000);
      this.setState({
        count: 0,
        bmp
      });
    } else {
      this.setState({bmp});
    }
  }
  
  startStop = () => {
    if(this.state.playing) {
       clearInterval(this.timer);
       this.setState({
         playing: false
       });
    } else {
      this.timer = setInterval(this.playClick, (60 / this.state.bmp) * 1000);
      this.setState({
        playing: true,
        count: 0
      }, this.playClick);
    }
  }
  
  playClick = () => {
    const {count, beatsPerMeasure} = this.state;
    if(count % beatsPerMeasure === 0) {
      this.click2.play();
    } else {
      this.click1.play();
    }
    this.setState(state => ({
      count: (this.state.count + 1) % this.state.beatsPerMeasure
    }));
  }
  
  render() {
    const {playing, bmp} = this.state;
    return (
      <div className="metronom">
        <div className="bmp-slider">
        <div>{bmp} BMP</div>
          <input
            type="range"
            min="0"
            max="100"
            value={bmp} 
            onChange={this.handleBmpChange}
          />
          <button onClick={this.startStop}>
            {playing ? "Stop" : "Start"}
          </button>
        </div>
      </div>
    );
  }
}

export default Metronom;
