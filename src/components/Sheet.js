import React, {Component} from 'react'
import {Clearfix, Grid, Row, Form, FormGroup, Col, FormControl, Button, ControlLabel} from 'react-bootstrap'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getSheet, damageHandler, getFeats, getSpells} from '../actions'
import './sheet.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';



// 1. get your sheet id.
// 2. Make the URL to send to back end
// 3. send async Request
// 4. Modify component state without redux.

class Sheet extends Component {

  constructor(props){
    super(props)
    this.state = {
      editing:false
    }
  }

  // let sheet = this.props.sheet
  componentDidMount = () => {
    console.log('this.state:', this.state);
    console.log('this.props is: ', this.props);
    // console.log('this.props.sheet is: ', store.getState());
    // console.log('this is what gets the sheet: ', this.props.getSheet(this.props.match.params.sheetId));
    // console.log('this.props.feats <<<<--', this.props.getFeats(this.props.match.params.sheetId));
    this.props.getFeats(this.props.match.params.sheetId)
    this.props.getSpells(this.props.match.params.sheetId)
    this.props.getSheet(this.props.match.params.sheetId)
  }

  damageSubmit = (event) => {
    event.preventDefault();
    let current_hp = document.getElementById('current_hp').value
    let max_hp = document.getElementById('max_hp').value
    let id = this.props.sheet.id

    if(max_hp === ''){
      max_hp = `${this.props.sheet.max_hp}`
    }

    if(current_hp === ''){
      current_hp = `${this.props.sheet.current_hp}`
    }

    let hitpoints = {
      current_hp,
      max_hp,
    }

    console.log('hitpoints is;', hitpoints);
    this.props.damageHandler(hitpoints, id);
  }



  editCharacter = (event) =>{
    this.setState({
      editing:true
    })
    console.log('edit character toggled', this.state.editing)
  }

  submitChanges= (event) =>{
    this.setState({
      editing:false
    })
  }


    render() {
      const { sheet } = this.props
      if (sheet.users_id === undefined) {
        return <p>Loading...</p>
      }
      console.log('this.props.sheet.id>>>>>>',this.props.sheet.id)
      // let sheet = this.props.state.sheet
      console.log('this.props.sheet:  in <Sheet />å', sheet);
      console.log('this.props.feats: in <SHEET/>', this.props.feats);
      console.log('this.props.spells: in <SHEET/>', this.props.spells);

      let feats = this.props.feats ||[]
      let spells = this.props.spells||[]
      return (
        <div id='contents'>
        <br></br>
        <div className='container'>
        <Grid>
          <Row className='center'>
            <h1 className='title'><u>{sheet.char_name} level {sheet.char_level} {sheet.char_class}</u></h1>
          </Row>
            <Row className="show-grid">
                <Col sm={6} md={3}>

                  <div id='hitpointsContain'>
                    hitpoints:
                    <h1>{sheet.current_hp}/{sheet.max_hp}</h1>

                    <Form horizontal className='center' onSubmit={this.damageSubmit}>
                      <FormGroup controlId="formHorizontalName">
                        <Col sm={10} className='justifyCenter'>
                          <input
                            className='hitpoints'
                            id="current_hp"
                            name="current_hp"
                            type="number"
                            placeholder="HP"
                          />
                          /
                          <input
                            className='hitpoints'
                            id="max_hp"
                            name="max_hp"
                            type="number"
                            placeholder="Max HP"
                          />
                          <Button type='submit' className='btn btn-danger input-group-append normalText'>√</Button>
                        </Col>
                      </FormGroup>
                      <FormGroup>
                        <Col sm={10}>
                        </Col>
                      </FormGroup>
                    </Form>

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
                    <br></br>
                    <Button className='normalText'onClick={this.editCharacter}>Edit</Button>
                  </Col>
                </Row>


            </Row>
            <br></br>

            <Row>
              <Col sm={6} md={4}>
              <h3 className='center title'>Core Stats:</h3>
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
                    <tr><td>Strength:</td><td>{sheet.strength}</td><td><input className="bonus" type="number" placeholder='0'></input></td></tr>
                    <tr><td>Dexterity:</td><td>{sheet.dexterity}</td><td><input className="bonus" type="number" placeholder='0'></input></td></tr>
                    <tr><td>Constitution:</td><td>{sheet.constution}</td><td><input className="bonus" type="number" placeholder='0'></input></td></tr>
                    <tr><td>Intellect:</td><td>{sheet.intellect}</td><td><input className="bonus" type="number" placeholder='0'></input></td></tr>
                    <tr><td>Wisdom:</td><td>{sheet.wisdom}</td><td><input className="bonus" type="number" placeholder='0'></input></td></tr>
                    <tr><td>Charisma:</td><td>{sheet.charisma}</td><td><input className="bonus" type="number" placeholder='0'></input></td></tr>
                  </tbody>
                </table>
                </div>
              </Col>

              <Col sm={6} md={4}>
              <h3 className='center  title'>Offense:</h3>
              <div className='center' id='statsContain'>
              <table className="table table-hover">
                <thead className='center'>
                  <tr className='center'>
                    <th>Attack</th>
                    <th>Bonus</th>
                  </tr>
                </thead>
                <tbody className='center'>
                  <tr><td>1st Attack:</td><td>{sheet.bab_1}</td></tr>
                  <tr><td>2nd Attack:</td><td>{sheet.bab_2}</td></tr>
                  <tr><td>3rd Attack:</td><td>{sheet.bab_3}</td></tr>
                  <tr><td>4th Attack:</td><td>{sheet.bab_4}</td></tr>
                  <tr><td>Combat Maneuver Bonus:</td> <td>{sheet.cmb}</td></tr>
                </tbody>
              </table>
              <Button className='editBtn normalText'>Edit</Button>
              </div>
              </Col>
              <Col sm={6} md={4}>
              <h3 className='center title'>Defense:</h3>
              <div className='center' id='statsContain'>
              <table className="table table-hover">
                <thead className='center'>
                  <tr className='center'>
                    <th>Save</th>
                    <th>Bonus</th>
                  </tr>
                </thead>
                <tbody className='center'>
                  <tr><td>Fortitude:</td><td>{sheet.fortitude}</td></tr>
                  <tr><td>Reflex:</td><td>{sheet.reflex}</td></tr>
                  <tr><td>Will:</td><td>{sheet.will}</td></tr>
                  <tr><td>Combat Maneuver Defense:</td> <td>{sheet.cmd}</td></tr>
                </tbody>
              </table>
              <Button className='editBtn normalText'>Edit</Button>
              </div>
              </Col>
            </Row>
            <br></br>

            <Row>
              <Col sm={6} md={7}>
                <h3 className='center title'>Weapons:</h3>
                <div id='weaponsContain'>
                <table className="table table-hover">
                  <thead>
                    <tr className='center'>
                      <th>Weapon</th>
                      <th>Damage</th>
                      <th>Critical</th>
                      <th>Range</th>
                      <th>DMG Type</th>
                      <th>Special</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Whip</td><td>1d4</td><td>x2</td><td>15 feet</td><td>Slashing</td><td>Trip, Disarm</td></tr>
                    <tr><td>Long Sword</td><td>1d8</td><td>19/20 x2</td><td>--</td><td>Slashing</td><td>--</td></tr>
                    <tr><td>Warhammer</td><td>1d8</td><td>x3</td><td>--</td><td>Bludgeoning</td><td>--</td></tr>
                    <tr><td>Longspear</td><td>1d4</td><td>x2</td><td>--</td><td>Slashing</td><td>Brace, Reach</td></tr>
                    <tr><td>Quarterstaff</td><td>1d6/1d6</td><td>x2</td><td>--</td><td>Bludgeoning</td><td>Double, Monk</td></tr>
                  </tbody>
                </table>
                <Button className='editBtn normalText'>Edit</Button>
                </div>
              </Col>

              <Col sm={6} md={5}>
              <h3 className='center title'>Armor:</h3>

              <div className='center' id='armorContain'>
              <table className="table table-hover">
                <thead className='center'>
                  <tr className='center'>
                    <th>Armor</th>
                    <th>AC Bonus</th>
                    <th>Max Dex</th>
                    <th>Arcane Failure</th>
                  </tr>
                </thead>
                <tbody className='center'>
                  <tr><td>Half Plate</td><td>5</td><td>+3</td><td>25%</td></tr>
                  <tr><td>Buckler</td><td>2</td><td>--</td><td>10%</td></tr>
                  <tr><td>Half Plate</td><td>5</td><td>+3</td><td>25%</td></tr>
                  <tr><td>Half Plate</td><td>5</td><td>+3</td><td>25%</td></tr>
                </tbody>
              </table>
              <Button className='editBtn normalText'>Edit</Button>
              </div>
              </Col>
            </Row>

            <Row>
              <Col sm={6} md={12}>
                <h3 className='center title'>Spells:</h3>
                <div id='weaponsContain'>
                <table className="table table-hover">
                  <thead>
                    <tr className='center'>
                      <th>Spell Name</th>
                      <th>Level</th>
                      <th>Casting Time</th>
                      <th>Range</th>
                      <th>Targets</th>
                      <th>Saving Throw</th>
                      <th>Spell Resistance</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                  {spells.map(x =>
                  <tr key={x.id}>
                  <td>{x.name}</td>
                  <td>{x.spell_level}</td>
                  <td>{x.casting_time}</td>
                  <td>{x.range}</td>
                  <td>{x.targets}</td>
                  <td>{x.saving_throw}</td>
                  <td>{x.spell_resistance.toString()}</td>
                  <td>{x.description}</td>
                  </tr>
                  )}
                  </tbody>
                </table>
                <Button className='editBtn normalText'>Edit</Button>
                </div>
              </Col>


            </Row>
            <Row>
            <Col sm={6} md={12}>
            <h3 className='center title'>Feats:</h3>

            <div id='armorContain'>
            <table className="table table-hover">
              <thead className='center'>
                <tr className='center'>
                  <th>Feat Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
              {feats.map(x =>
              <tr key={x.id}>
              <td>{x.name}</td>
              <td>{x.description}</td>
              </tr>
              )}
              </tbody>
            </table>
            <Button className='editBtn normalText'>Edit</Button>
            </div>
            </Col>
            </Row>

        </Grid>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        </div>

      )
    }
  }
  const mapStateToProps = (state) => {

    return {
      sheet: state.sheet,
      feats: state.feats,
      spells: state.spells
    }
  }

  const mapDispatchToProps = dispatch => bindActionCreators({
    getSheet,
    damageHandler,
    getFeats,
    getSpells
  }, dispatch)

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Sheet);
