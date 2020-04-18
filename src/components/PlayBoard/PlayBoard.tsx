import * as React from 'react';
import './PlayBoard.css';

import GameOver from '../GameOver/GameOver';
import BackgroundStage  from '../BackgroundStage/BackgroundStage';
import ActiveStage from '../ActiveStage/ActiveStage';

class PlayBoard extends React.Component {
  public render() {
    return (
      <div className="LeftFrame">
        <BackgroundStage />
        <ActiveStage />
        <GameOver />
      </div>
    );
  }
}

export default PlayBoard;
