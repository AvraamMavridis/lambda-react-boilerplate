var React = require('react');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    alert(42);
  }

  componentWillMount() {
    console.log('soom');
  }

  render() {
    return <div>Hello React Lambda</div>;
  }
}

module.exports = App;
