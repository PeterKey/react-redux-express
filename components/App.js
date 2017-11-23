import React, { Component } from 'react'
import style from './App.css'

class App extends Component {
  render() {
    const testString = 'This is a string that might change.'
    console.log(testString)
    return (
      <div>
        <div className={style.test}>{testString}</div>
      </div>
    )
  }
}

export default App
