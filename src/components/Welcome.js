import React, {Component} from 'react'
import { Button } from 'react-bootstrap'
import './welcome.css'
class Welcome extends Component {

render() {
  return (
    <div id='welcomeBackground'>
    <div  className='container '>
    <link href="https://fonts.googleapis.com/css?family=Berkshire+Swash|Press+Start+2P" rel="stylesheet"></link>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

      <div className='h1container'>
        <h3>Greetings Adventurer</h3>
      </div>
      <div className='buttonContain'>
        <Button className='btn btn-warning' href='/SheetList'>Continue On My Heroic Quest</Button> or
        <Button className='btn btn-warning' href='/CharacterCreation'>Start A New Adventure</Button>
      </div>
    </div>
  </div>
  )
}
}

export default Welcome
