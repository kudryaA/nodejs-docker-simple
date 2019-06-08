# nodejs-docker-simple
Simple library for working with docker in node js
# Documentation
For import lib should use 
``` js
import { createContainer, Docker } from './docker';
```
* create docker container
```js
const image = 'ubuntu'; //
const fun = (answer) => {console.log(answer.value)}; //calback function (answer is object {status, value}
const settings = {runtime: 'nvidia'} //settings for run container
const cmd = 'bash'; // command for execute
createContainer(image, fun, settings, cmd);
```
