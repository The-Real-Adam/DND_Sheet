import React, {Component} from 'react'
import {Row, Form, FormGroup, Col, FormControl, Button, ControlLabel} from 'react-bootstrap'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getSheet} from '../actions'


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
        <div className ='container'>
          <div className='Row'>

          <div>
            {sheet.char_age}
          </div>

            <div className = 'Col 6'>
            <h1><i>{sheet.current_hp}/{sheet.max_hp}</i> Hitpoints</h1>
            </div>

            <div className = 'Col 6'>
            <h1></h1>
            </div>

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
