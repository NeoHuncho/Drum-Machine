import { VOLUME_CHANGE } from "./types";


export const volumeChange = () => dispatch => {
      dispatch({
        type: VOLUME_CHANGE,
        payload: posts
      })
    ;
};

export const createPost = postData => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  }).then(res => res.json()).then(post => dispatch({
    type: NEW_POST,
    payload: post
  }));


};