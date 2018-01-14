import React, {Component} from 'react'
import {Clearfix, Grid, Row, Form, FormGroup, Col, FormControl, Button, ControlLabel} from 'react-bootstrap'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getSheet} from '../actions'
import './sheet.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';



// 1. get your sheet id.
// 2. Make the URL to send to back end
// 3. send async Request
// 4. Modify component state without redux.

class Sheet extends Component {

  // let sheet = this.props.sheet
  componentDidMount = () => {
    console.log('this.state:', this.state);
    console.log('this.props is: ', this.props);
    // console.log('this.props.sheet is: ', store.getState());

    this.props.getSheet(this.props.match.params.sheetId)
  }
  // componentWillMount = () => {
  //   this.props.getSheet()
  // }

    render() {
      const { sheet } = this.props
      if (sheet.users_id === undefined) {
        return <p>Loading...</p>
      }
      // let sheet = this.props.state.sheet
      console.log('this.props.sheet:  in <Sheet />å', sheet);
      return (
        <div id='contents'>
        <br></br>
        <div className='container'>
        <Grid>
            <Row className="show-grid">
                <Col sm={6} md={3}>

                  <div id='hitpointsContain'>
                    hitpoints:
                    <h1>{sheet.current_hp}/{sheet.max_hp}</h1>
                    <button>I Took Damage</button>
                  </div>
                </Col>

                <Row className='largeText'>
                  <Col sm={6} md={3}>
                      <strong>Name:</strong> {sheet.char_name}
                      <br></br>
                      <strong>Alignment:</strong> {sheet.char_align}
                      <br></br>
                      <strong>Height:</strong> {sheet.char_height}

                  </Col>
                  <Col sm={6} md={2}>
                      <strong>Class:</strong> {sheet.char_class}
                      <br></br>
                      <strong>Gender:</strong> {sheet.char_gender}
                      <br></br>
                      <strong>Weight:</strong> {sheet.char_weight}

                  </Col>
                  <Col sm={6} md={2}>
                      <strong>Race:</strong> {sheet.char_race}
                      <br></br>
                      <strong>Size:</strong> {sheet.char_size}
                      <br></br>
                      <strong>Age:</strong> {sheet.char_age}
                  </Col>
                  <Col sm={6} md={6}>
                    <strong>Languages:</strong> {sheet.char_languages}
                  </Col>
                </Row>


            </Row>
            <br></br>

            <Row>
              <Col sm={6} md={3}>
                <div id='statsContain'>
                <table className="table table-hover">
                  <thead>
                    <tr className='center'>
                      <th>Stat</th>
                      <th>Rank</th>
                      <th>Bonus</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Strength:</td> <td>{sheet.strength}</td><td><input className="bonus" type="number" placeholder='0'></input></td></tr>
                    <tr><td>Dexterity:</td> <td>{sheet.dexterity}</td><td><input className="bonus" type="number" placeholder='0'></input></td></tr>
                    <tr><td>Constitution:</td> <td>{sheet.constution}</td><td><input className="bonus" type="number" placeholder='0'></input></td></tr>
                    <tr><td>Intellect:</td> <td>{sheet.intellect}</td><td><input className="bonus" type="number" placeholder='0'></input></td></tr>
                    <tr><td>Wisdom:</td> <td>{sheet.wisdom}</td><td><input className="bonus" type="number" placeholder='0'></input></td></tr>
                    <tr><td>Charisma:</td> <td>{sheet.charisma}</td><td><input className="bonus" type="number" placeholder='0'></input></td></tr>
                  </tbody>
                </table>
                </div>
              </Col>
              <Col sm={6} md={3}>

              </Col>
            </Row>
        </Grid>
        </div>
        </div>

      )
    }
  }
  const mapStateToProps = (state) => {

    return {
      sheet: state.sheet
    }
  }

  const mapDispatchToProps = dispatch => bindActionCreators({
    getSheet
  }, dispatch)

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Sheet);
