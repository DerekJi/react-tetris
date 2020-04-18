import './PowerButton.css';
import * as React from 'react';

interface IPowerButtonProps {
  isPlaying: boolean;
}

function PowerButton(props: IPowerButtonProps) {
  let btnType = props.isPlaying ? "btn-danger" : "btn-primary";
  let btnClass = `btn btn-sm ${btnType}`;
  let btnText = props.isPlaying ? "Stop" : "Start";

  return (
    <button type="button" id="startBtn" className={btnClass} >
      {btnText}
    </button>
  );
}

export default PowerButton;
