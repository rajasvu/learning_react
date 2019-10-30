const e = React.createElement;

export class SeatModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      id:1,
      status: false,
      displayTest: 'Book Seat'
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
      { key:3, 
        style: this.get_style(), 
        onClick: () => this.setState({status: !this.state.status, color: 'green'}),
        variant: 'success'},
      this.props.displayTest
    )
    
    return e(
      'div',
      {},
      [release_button]
    );
  }
}