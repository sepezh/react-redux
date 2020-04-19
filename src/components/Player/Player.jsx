import React, { PropTypes } from "react";
import Counter from "../Counter";

const Player = (props) => {
  return (
    <div className="player">
      <div className="player-name">
        <a href className="remove-player" onClick={props.onRemove}>
          x
        </a>
        {props.name}
      </div>
      <div className="player-score">
        <Counter onChange={props.onScoreChange} score={props.score} />
      </div>
    </div>
  );
};

Player.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  onRemove: PropTypes.func,
  onScoreChange: PropTypes.func,
};

export default Player;
