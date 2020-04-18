import * as React  from 'react';
import                 './App.css';

import PlayBoard from './components/PlayBoard/PlayBoard';
import NextShape from './components/NextShape/NextShape';
import PowerButton from './components/PowerButton/PowerButton';

interface IAppProps {

}

interface IAppState {
  isPlaying: boolean;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps, state: IAppState) {
    super(props, state);
    this.state = {
      isPlaying: false,
    };
  }
  toggleStart = () => {
    var isPlaying = !this.state.isPlaying;
    this.setState({ isPlaying: isPlaying });
  }
  public render() {
    return (
      <div className="App">
        <div className="mainFrame">
          <PlayBoard />

          <div className="rightfrm">
            <div id="nextBlock">
              <NextShape />
            </div>
            <div className="plaintxt">
              Level:  <span id="speed" className="label">1</span>&nbsp;&nbsp;&nbsp;
              Scores: <span id="score" className="label">0</span>
            </div>
            
            <div>
              <span onClick={this.toggleStart}>
                <PowerButton isPlaying={this.state.isPlaying} />
              </span>
            </div>

            <div className='tab-box'>
              <div id="tab-nav" className="tab-nav">
                <span className="tab-menu   selected" id="tm1"><a href="#"  >Setup</a></span>
                <span className="tab-menu unselected" id="tm2"><a href="#"  >About</a></span>
              </div>

              <div className="tab-content  show" id="tc1"><br />
                <div id="cfgView">
                  Background   <select id="bgSelect" /> <br /> <br />
                  Block Type   &nbsp;&nbsp;<select id="iconSelect" /> <br /> <br />
                  Speed Level  <select id="speedSelect" />
                  <div id="imgBlockIcon" />
                </div>
              </div>
              <div className="tab-content  hide" id="tc2">
                <div id="aboutView">
                  <br/>
                  <span><b><br/><br/>
                  Just for FUN!!!<br/><br/>
                  Enjoy Yourself!<br/><br/>
                  <br/><br/><br/>
                  </b></span>
                </div>
              </div>
            </div>
            
            <br />
            <div className="plaintxt">
              <div>Author: <a href="mailto:syfool@hotmail.com">syfool</a></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
