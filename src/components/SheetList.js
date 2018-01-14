import React, {Component} from 'react'
import {Form, FormGroup,Col, FormControl, Button, ControlLabel} from 'react-bootstrap'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getSheets, getSheet} from '../actions'
import './SheetList.css'
class SheetList extends React.Component {

  componentWillMount = () => {
    this.props.getSheets()
  }

  openSheet = (event) => {
    // event.preventDefault()
    // // let char_name = document.getElementById('char_name').value
    // console.log('event target ID is: ', event.target.id)
    // let id = event.target.id
    // this.props.getSheet(id)

    this.props.history.push('/sheet/' + event.target.id)
  }

  //
  render() {
    // console.log('this.state: ', this.state);
    // console.log('this.props: ', this.props.sheets.sheets);
    let sheets = this.props.sheets.sheets || []
    // console.log('this.props.sheets.data: ', this.props.string)
    // sheets.map(x => console.log('x is: ', x))

    return (
      <div id='sheetListBackground' className="resultslistcontainer container">
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
              <tr key={x.id}>
              <td>{x.char_name}</td>
              <td>{x.char_class}</td>
              <td>{x.char_level}</td>
              <td><Button className='btn btn-dark' id={x.id} onClick={this.openSheet}> Open </Button></td>
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
    sheets: state.sheets,
    sheet: state.sheet
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getSheets, getSheet
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SheetList);
