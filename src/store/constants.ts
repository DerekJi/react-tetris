// For number
export const INCREMENT = "INCREMENT";
export type INCREMENT_TYPE = typeof INCREMENT;

export const DECREMENT = "DECREMENT";
export type DECREMENT_TYPE = typeof DECREMENT;

export const RESET = "RESET";
export type RESET_TYPE = typeof RESET;



// commands
export const START = "START";
export type START_TYPE = typeof START;
export const PAUSE = "PAUSE";
export type PAUSE_TYPE = typeof PAUSE;
export const RESUME = "RESUME";
export type RESUME_TYPE = typeof RESUME;
export const STOP = "STOP";
export type STOP_TYPE = typeof STOP;

export const MUTE = "MUTE";
export type MUTE_TYPE = typeof MUTE;
export const UNMUTE = "UNMUTE";
export type UNMUTE_TYPE = typeof UNMUTE;

export const MOVELEFT = "MOVELEFT";
export type MOVELEFT_TYPE = typeof MOVELEFT;
export const MOVERIGHT = "MOVERIGHT";
export type MOVERIGHT_TYPE = typeof MOVERIGHT;
export const MOVEDOWN = "MOVEDOWN";
export type MOVEDOWN_TYPE = typeof MOVEDOWN;
export const ROTATE = "ROTATE";
export type ROTATE_TYPE = typeof ROTATE;

// status
export const RUNNING = "RUNNIG";
export type RUNNING_TYPE = typeof RUNNING;
export const PAUSED = "PAUSED";
export type PAUSED_TYPE = typeof PAUSED;
export const STOPPED = "STOPPED";
export type STOPPED_TYPE = typeof STOPPED;
export const COMPLETE = "COMPLETE";
export type COMPLETE_TYPE = typeof COMPLETE;

export type GAMESTATUS = RUNNING_TYPE | PAUSED_TYPE | STOPPED_TYPE | COMPLETE_TYPE;
