import { VOLUME_CHANGE,DISPLAY_CHANGE,POWER_CHANGE,BANK_CHANGE } from "./types";


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
