'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'the button is clicked';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'click me'
    );
  }
}

const domContainer = document.querySelector('#container');
ReactDOM.render(e(LikeButton), domContainer);