import React, { Component } from 'react'

export default class Control extends Component {
  render() {
    const{bankSlider,selectBank,sliderVal,adjustVolume,display,powerSlider,powerControl}=this.props
    
    return (
      <div className='controls-container'>
          <div className='control'>
            <p>Power</p>
            <div className='select' onClick={powerControl}>
              <div className='inner' style={powerSlider} />
            </div>
          </div>
          <p id='display'>{display}</p>
          <div className='volume-slider'>
            <input
              max='1'
              min='0'
              onChange={adjustVolume}
              step='0.01'
              type='range'
              value={sliderVal}
            />
          </div>
          <div className='control'>
            <p>Bank</p>
            <div className='select' onClick={selectBank}>
              <div className='inner' style={bankSlider} />
            </div>
          </div>
        </div>
    )
  }
}
