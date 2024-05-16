import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props);

    this.state = {
      count: 0,
      statevar2: 0,
    };
  }
  render() {
    const { count, statevar2 } = this.state;
    return (
      <div>
        <h2>Author Name : {this.props.name}</h2>
        <h2>Company Location</h2>
        <h3>Contact: 9999999999</h3>
        <h4>count : {count}</h4>
        <h4>count : {statevar2}</h4>
        <button
          onClick={() => {
            this.setState({
              statevar2: this.state.statevar2 + 1,
              count: this.state.count + 1,
            });
          }}
        >
          ClickMe
        </button>
      </div>
    );
  }
}
export default UserClass;
