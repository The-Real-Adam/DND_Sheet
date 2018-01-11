import React, {Component} from 'react'
import {Form, FormGroup,Col, FormControl, Button, ControlLabel} from 'react-bootstrap'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getSheet} from '../actions'


class Sheet extends Component {

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   let users_id = document.getElementById('users_id').value
  //   console.log(users_id)
  //   let character = {
  //     users_id
  //   }
  //   console.log(character)
  //   this.props.getSheet(users_id);
  // }

    render() {
      return (
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Your Hero Name
            </Col>
            <Col sm={10}>
              <input
                id="users_id"
                name="users_id"
                type="number"
                placeholder='1'
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">Create</Button>
            </Col>
          </FormGroup>
        </Form>

      )
    }
  }
  const mapStateToProps = (state, { messageId }) => {

    return {

    }
  }

  const mapDispatchToProps = dispatch => bindActionCreators({
    getSheet
  }, dispatch)

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Sheet);
