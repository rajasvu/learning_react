'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      id:1,
      status: 'Idle'
    };
  }

  render() {
    let text_area = e(
      'h1',
      {key:1},
      this.state.status
    )
    let reserve_button = e(
      'button',
      { key:2, onClick: () => this.setState({status: 'Booked'})},
      'Avail'
    )
    let release_button = e(
      'button',
      { key:3, onClick: () => this.setState({status: 'Available'})},
      'Release'
    )
    
    return e(
      'div',
      {},
      [text_area, reserve_button, release_button]
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
