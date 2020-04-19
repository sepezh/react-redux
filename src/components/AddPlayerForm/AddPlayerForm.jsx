import React from "react";

let createReactClass = require("create-react-class");
const AddPlayerForm = createReactClass({
  propTypes: {
    onAdd: React.PropTypes.func.isRequired,
  },
  getInitialState: () => {
    return { name: "" };
  },
  onNameChange: (e) => {
    const name = e.target.value;
    this.setState({ name: name });
  },
  onSubmit: (e) => {
    if (e) e.preventDefault();
    this.props.onAdd(this.state.name);
    this.setState({ name: "" });
  },

  render: () => {
    return (
      <div className="add-player-form">
        <form onSubmit="this.onSubmit">
          <input
            type="text"
            value={this.sate.name}
            onChange={this.onNameChange}
            placeholder="Player Name"
          />
          <input type="submit" value="Add Player" />
        </form>
      </div>
    );
  },
});

export default AddPlayerForm;
