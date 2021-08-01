import React, { Component } from 'react'
import Jokes from './Jokes'
import './css/App.min.css'
export default class App extends Component {
  state = {joke:''}
  componentDidMount(){
    this.changeJoke()
  }
  changeJoke=async()=>{
      let response =await fetch('https://icanhazdadjoke.com/',{
        
        headers:{
          accept:'application/json'
        }
      })
      const data = await response.json();
      console.log(data)
      this.setState({joke:data.joke})
    }
  
  render() {
    return (
      <div className='container'>
        <h3>Don't laugh Chanllenge</h3>
        <Jokes joke={this.state.joke}/>
        <button 
        id='jokeBtn' 
        className='btn'
        onClick={this.changeJoke}
        >Get Another Joke</button>
      </div>
    )
  }
}
