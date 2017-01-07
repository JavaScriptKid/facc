import React, { Component } from 'react'
import ScrollPos2 from './facc/ScrollPos2'
import ScrollPos3 from './facc/ScrollPos3'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="spacer">
        </div>
        <div className="displayit">
          <ScrollPos2>
            {
              position => <h1>event.srcElement.body.scrollTop: {position}</h1>
            }
          </ScrollPos2>
        </div>
        <div className="spinit">
          <ScrollPos2>
            {
              position => <h1 style={{transform: `rotateY(${position}deg)`}}>Spin It!</h1>
            }
          </ScrollPos2>
        </div>
        <div className="fadeit">
          <ScrollPos3>
            {
              ratio => <h1 style={{opacity: ratio}}>Fade It!</h1>
            }
          </ScrollPos3>
        </div>
      </div>
    );
  }
}

export default App;
