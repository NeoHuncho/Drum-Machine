import { VOLUME_CHANGE } from "./types";


export const volumeChange = (vol) => dispatch => {
      dispatch({
        type: VOLUME_CHANGE,
        payload: vol
      })
    ;
};
