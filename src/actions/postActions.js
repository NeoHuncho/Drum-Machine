import { VOLUME_CHANGE,POWER_CHANGE,BANK_CHANGE,PLAY_SOUND,DISPLAY_SOUND } from "./types";


export const volumeChange = (volume) => dispatch => {
      dispatch({
        type: VOLUME_CHANGE,
        payload: volume
      })
    ;
};
export const powerChange = (power) => dispatch => {
  dispatch({
    
    type: POWER_CHANGE,
    payload: power
  })
;
};
export const bankChange = (bank) => dispatch => {
  dispatch({
    
    type: BANK_CHANGE,
    payload: bank
  })
;
};
export const playSound = () => dispatch => {
  dispatch({
    type:PLAY_SOUND
  })
;
};
export const displaySound = (keyCode) => dispatch => {
  dispatch({
    type:DISPLAY_SOUND,
    payload:keyCode
  })
;
};