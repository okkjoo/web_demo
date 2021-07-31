import React, { Component } from 'react'
import PadBank from './components/PadBank';
import Control from './components/Control';
import { bankOne,bankTwo } from './constant';
import './css/App.min.css'
export default  class App extends Component {
  state = {
      power: true,
      display: String.fromCharCode(160),
      currentPadBank: bankOne,
      currentPadBankId: 'Heater Kit',
      sliderVal: 0.3
  }
  powerControl=()=> {
    this.setState({
      power: !this.state.power,
      display: String.fromCharCode(160)
    });
  }
  selectBank=()=> {
    if (this.state.power) {
      if (this.state.currentPadBankId === 'Heater Kit') {
        this.setState({
          currentPadBank: bankTwo,
          display: 'Smooth Piano Kit',
          currentPadBankId: 'Smooth Piano Kit'
        });
      } else {
        this.setState({
          currentPadBank: bankOne,
          display: 'Heater Kit',
          currentPadBankId: 'Heater Kit'
        });
      }
    }
  }
  displayClipName=(name)=> {
    if (this.state.power) {
      this.setState({
        display: name
      });
    }
  }
  adjustVolume=(e)=> {
    if (this.state.power) {
      this.setState({
        sliderVal: e.target.value,
        display: 'Volume: ' + Math.round(e.target.value * 100)
      });
      setTimeout(() => this.clearDisplay(), 1000);
    }
  }
  clearDisplay=()=> {
    this.setState({
      display: String.fromCharCode(160)
    });
  }
  render() {
    const powerSlider = this.state.power
      ? {
          float: 'right'
        }
      : {
          float: 'left'
        };
    const bankSlider =
      this.state.currentPadBank === bankOne
        ? {
            float: 'left'
          }
        : {
            float: 'right'
          };
      {
        const clips = [].slice.call(document.getElementsByClassName('clip'));
        clips.forEach(sound => {
          sound.volume = this.state.sliderVal;
        });
      }
    return (
      <div className='inner-container' id='drum-machine'>
        <PadBank
          clipVolume={this.state.sliderVal}
          currentPadBank={this.state.currentPadBank}
          power={this.state.power}
          updateDisplay={this.displayClipName}
        />

        <div className='logo'>
          <div className='inner-logo '>{'FCC' + String.fromCharCode(160)}</div>
          <i className='inner-logo fa fa-free-code-camp' />
        </div>
        <Control
          display={this.state.display}
          sliderVal={this.state.sliderVal}

          powerSlider={powerSlider}

          powerControl={this.powerControl}
          adjustVolume={this.adjustVolume}
          selectBank={this.selectBank}
          bankSlider={bankSlider}
        />
        
      </div>
    );
  }
}