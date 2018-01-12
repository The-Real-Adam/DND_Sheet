import React, {Component} from 'react'
import {Row, Form, FormGroup, Col, FormControl, Button, ControlLabel} from 'react-bootstrap'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getSheet} from '../actions'


class Sheet extends Component {


    render() {
      return (
        <div>
          <div className='Row'>

            <div className = 'Col 6'>
            <h1>Adam</h1>
            </div>

            <div className = 'Col 6'>
            <h1>Boom</h1>
            </div>

          </div>
        </div>

      )
    }
  }
  const mapStateToProps = (state) => {

    return {
      // this.state
    }
  }

  const mapDispatchToProps = dispatch => bindActionCreators({
    getSheet
  }, dispatch)

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Sheet);
