import {createContainer} from './docker';

createContainer('video_processing', (answer) => {
  if (answer.status) {
    console.log(answer.value);
  }
}, {}, 'python app.py');