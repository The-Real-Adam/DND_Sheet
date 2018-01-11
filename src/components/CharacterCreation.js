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
    let char_name = document.getElementById('char_name').value
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
          <FormGroup controlId="formHorizontalName">
            <Col componentClass={ControlLabel} sm={2}>
              Name
            </Col>
            <Col sm={10}>
              <input
                id="char_name"
                name="char_name"
                type="char_name"
                placeholder="Name"
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalRace">
            <Col componentClass={ControlLabel} sm={2}>
              Race
            </Col>
            <Col sm={10}>
              <input
                id="char_race"
                name="char_race"
                type="char_race"
                placeholder="Race"
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalClass">
            <Col componentClass={ControlLabel} sm={2}>
              Class
            </Col>
            <Col sm={10}>
              <input
                id="char_class"
                name="char_class"
                type="char_class"
                placeholder="Class"
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalAlign">
            <Col componentClass={ControlLabel} sm={2}>
              Alignment
            </Col>
            <Col sm={10}>
              <input
                id="char_align"
                name="char_align"
                type="char_align"
                placeholder="Alignment"
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalGender">
            <Col componentClass={ControlLabel} sm={2}>
              Gender
            </Col>
            <Col sm={10}>
              <input
                id="char_gender"
                name="char_gender"
                type="char_gender"
                placeholder="Gender"
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalAge">
            <Col componentClass={ControlLabel} sm={2}>
              Age
            </Col>
            <Col sm={10}>
              <input
                id="char_age"
                name="char_age"
                type="number"
                placeholder="Age"
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
