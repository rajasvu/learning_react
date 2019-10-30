'use strict';
const e = React.createElement;
import {SeatModel} from './test_function.js'

class LayoutDisplay extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      seats:[{
        id:1,
        status: false,
        displayTest: 'Book Seat1'},
        {
          id:1,
          status: false,
          displayTest: 'Book Seat2'
        }]
    };
  }

  render(){ 
    const seats = this.state.seats.map( seat => e(
      SeatModel, {...seat}, null
    ))
    return e(
      'div',
      {},
      [...seats]
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LayoutDisplay), domContainer);
