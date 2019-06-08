import { createContainer, Docker } from './docker';

createContainer('video_processing', (answer) => {
  if (answer.status) {
    const docker = new Docker(answer.value);
    docker.copyTo('/home/kudrya/Downloads/video', '/home/video', (answer) => {
      if (answer.status) {
        docker.copyFrom('/home/app.py', '/home/kudrya/app.py', (answer) => {
          if (answer.status) {
            docker.exec('python controller.py screen', (answer) => {
              console.log(answer);
            });
          }
        });
      }
    });
  }
}, {}, 'python app.py');