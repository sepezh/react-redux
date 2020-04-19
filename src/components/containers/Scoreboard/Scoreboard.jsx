import React from "react";

const INITIAL_STATE = {
  players: [
    {
      name: "Jim Hoskins",
      score: 31,
    },
    {
      name: "Andrew Chalkley",
      score: 20,
    },
    {
      name: "Alena Holligan",
      score: 50,
    },
  ],
};

const Scoreboard = React.createClass({
  getInitializeState: function () {
    return INITIAL_STATE;
  },
  onScoreChange: function (index, delta) {
    this.state.players[index].score += delta;
    this.setState(this.state);
  },
  onAddPlayer: function (name) {
    this.state.players.push({ name: name, score: 0 });
    this.setState(this.state);
  },
  onRemovePlayer: function (index) {
    this.state.players.splice(index, 1);
    this.setState(this.state);
  },

  render: function () {
    return (
      <div className="scoreboard">
        <header players={this.state.players} />
        <div className="players">
          {this.state.players.map(
            function (player, index) {
              return (
                <player
                  name={player.name}
                  score={player.score}
                  key={player.name}
                  onScoreChange={(delta) => this.onScoreChange(index, delta)}
                  onRemovePlayer={() => this.onRemovePlayer(index)}
                />
              );
            }.bind(this)
          )}
        </div>
        {/* <AddPlayerForm onAdd={this.onAddPlayer} /> */}
      </div>
    );
  },
});

export default Scoreboard;
