import logger from './utils/logger';
import { exec } from 'child_process';


export function createContainer(image, fun, settings = {}, cmd = 'bash') {
  let line = '';
  Object.keys(settings).forEach(key => {
    line += `--${key}=${settings[key]} `;
  });
  exec(`docker run ${line} -itd ${image} ${cmd}`, (err, stdout, stderr) => {
    let status = true;
    if (err) {
      status = false;
      logger.error('Error in creating docker', err);
    }
    logger.info('Output docker creating', stdout);
    fun({ status, value: stdout})
  });
}