import React, { Component } from "react";
import Player from "../../components/Player";
import Header from "../../components/Header";
import AddPlayerForm from "../../components/AddPlayerForm";
import autoBind from "react-autobind";

class Scoreboard extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
    };
    autoBind(this);
  }

  onScoreChange = (index, delta) => {
    this.state.players[index].score += delta;
    this.setState(this.state);
  };

  onAddPlayer = (name) => {
    this.state.players.push({ name: name, score: 0 });
    this.setState(this.state);
  };

  onRemovePlayer = (index) => {
    this.state.players.splice(index, 1);
    this.setState(this.state);
  };

  render() {
    return (
      <div className="scoreboard">
        <Header players={this.state.players} />
        <div className="players">
          {this.state.players.map(
            function (player, index) {
              return (
                <Player
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
        <AddPlayerForm onAdd={this.onAddPlayer} />
      </div>
    );
  }
}

export default Scoreboard;
