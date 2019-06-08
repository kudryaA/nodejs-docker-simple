# nodejs-docker-simple
Simple library for working with docker in node js
# Documentation
For import lib should use 
``` js
import { createContainer, Docker } from './docker';
```
* create docker container
```js
const image = 'ubuntu'; //image name
const fun = (answer) => {console.log(answer.value)}; //calback function (answer is object {status, value}
const settings = {runtime: 'nvidia'} //settings for run container
const cmd = 'bash'; // command for execute
createContainer(image, fun, settings, cmd);
```
* copy file to docker
```js
const id = 'safsassf'; //container id
const docker = new Docker(id); // docker object
const from = '/home/kudrya/Downloads/video'; //source file in computer
const to = '/home/video'; //destination file in container
const fun = (answer) => {console.log(answer.value)}; //calback function (answer is object {status, value}
docker.copyTo(from, to, fun);
```
* copy file from docker
```js
const id = 'safsassf'; //container id
const docker = new Docker(id); // docker object
const from = '/home/kudrya/Downloads/video'; //source file in container
const to = '/home/video'; //destination file in computer
const fun = (answer) => {console.log(answer.value)}; //calback function (answer is object {status, value}
docker.copyFrom(from, to, fun);
