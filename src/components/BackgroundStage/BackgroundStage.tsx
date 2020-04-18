import * as React from 'react';
import './BackgroundStage.css';
import Shape from '../Shape/Shape';

interface IBackgroundStageProps {

}

interface IBackgroundStageState {
  isPlaying: boolean;
}
class BackgroundStage extends React.Component<IBackgroundStageProps, IBackgroundStageState> {

  constructor(props: IBackgroundStageProps, state: IBackgroundStageState) {
    super(props, state);

    this.state = {
      isPlaying: false,
    }
  }

  public getSampleShapes()
  {
    const ICONID = 0;
    let shapes = [];
    const X = [2*28, 6*28, 2*28, 6*28, 2*28, 6*28, 2*28];
    const Y = [2*28, 2*28, 7*28, 7*28, 11*28, 11*28, 14*28];
    const ANGLE = [1, 0, 1, 2, 1, 0, 0];
    const TYPE = [1, 0, 3, 2, 4, 5, 6];

    for (let i = 0; i < 7; i++)
		{
      let shape = <Shape key={`shape-${i}`} top={Y[i]} left={X[i]} 
            angle={ANGLE[i]} type={TYPE[i]} icon={ICONID}
            color={i} />;
      shapes.push(shape);
    }

    return shapes;
  }

  public render() {
      return (
        <div className="TetrisGrid" >
          {this.getSampleShapes()}
        </div>
      );
  }
}

export default BackgroundStage;
