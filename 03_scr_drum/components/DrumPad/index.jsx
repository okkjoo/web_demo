import React,{Component} from 'react'
import { inactiveStyle,activeStyle } from '../../constant';
export default class DrumPad extends Component {
  state = {
      padStyle: inactiveStyle
  }
  componentDidMount=()=> {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount=()=> {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  handleKeyPress=(e)=> {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }
  activatePad=()=> {
    if (this.props.power) {
      if (this.state.padStyle.backgroundColor === 'orange') {
        this.setState({
          padStyle: inactiveStyle
        });
      } else {
        this.setState({
          padStyle: activeStyle
        });
      }
    } else if (this.state.padStyle.marginTop === 13) {
      this.setState({
        padStyle: inactiveStyle
      });
    } else {
      this.setState({
        padStyle: {
          height: 77,
          marginTop: 13,
          backgroundColor: 'grey',
          boxShadow: '0 3px grey'
        }
      });
    }
  }
  playSound=()=> {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.currentTime = 0;
    sound.play();
    this.activatePad();
    setTimeout(() => this.activatePad(), 100);
    this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '));
  }
  render() {
    return (
      <div
        className='drum-pad'
        id={this.props.clipId}
        onClick={this.playSound}
        style={this.state.padStyle}
        >
        <audio
          className='clip'
          id={this.props.keyTrigger}
          src={this.props.clip}
        />
        {this.props.keyTrigger}
      </div>
    );
  }
}
