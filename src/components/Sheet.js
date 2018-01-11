import React, {Component} from 'react'
import {
  Form, FormGroup,Col, FormControl, Button, ControlLabel} from 'react-bootstrap'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  createSheet
} from '../actions'


class SheetList extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    let char_name = document.getElementById('char_name-input').value
    console.log(char_name)
    let character = {
      char_name
    }
    console.log(character)
    this.props.createSheet(character);
  }

    render() {
      return (
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Your Hero Name
            </Col>
            <Col sm={10}>
              <input
                id="char_name-input"
                name="char_name"
                type="char_name"
                placeholder="Your Charcter Name"
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
    createSheet
  }, dispatch)

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SheetList);
