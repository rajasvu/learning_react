'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      id:1,
      status: false
    };
  }

  get_style()
  {
    return {
      color: this.state.status?'green':'red'
    }
  }

  render() {
    let release_button = e(
      'button',
      { key:3, style: this.get_style(), onClick: () => this.setState({status: !this.state.status, color: 'green'})},
      'Book'
    )
    
    return e(
      'div',
      {},
      [release_button]
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
