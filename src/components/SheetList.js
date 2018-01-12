import React, {Component} from 'react'
import {Form, FormGroup,Col, FormControl, Button, ControlLabel} from 'react-bootstrap'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getSheets, getSheet} from '../actions'

class SheetList extends React.Component {

  componentWillMount = () => {
    this.props.getSheets()
  }

  openSheet = (event) => {
    let id = event.target.key
    this.props.getSheet(id)
  }

  //
  render() {
    // console.log('this.state: ', this.state);
    // console.log('this.props: ', this.props.sheets.sheets);
    let sheets = this.props.sheets.sheets || []
    // console.log('this.props.sheets.data: ', this.props.string)
    // sheets.map(x => console.log('x is: ', x))

    return (
      <div className="resultslistcontainer container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Character Name</th>
              <th>Character Class</th>
              <th>Character Level</th>
              <th>Open</th>
            </tr>
          </thead>
          <tbody>

            { sheets.map(x =>
              <tr>
              <td>{x.char_name}</td>
              <td>{x.char_class}</td>
              <td>{x.char_level}</td>
              <td><Button key={x.id} onClick={this.openSheet}> Open </Button></td>
              </tr>
            )}

          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sheets: state.sheets
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getSheets
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SheetList);
