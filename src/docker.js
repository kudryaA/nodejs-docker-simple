import logger from './utils/logger';
import { exec } from 'child_process';

export class Docker {
  constructor(id) {
    this.id = id;
  }

  copyTo(from, to, fun) {
    exec(`docker cp ${from} ${this.id}:${to}`, (err, stdout, stderr) => {
      let status = true;
      if (err) {
        status = false;
        logger.error(`Error in copying file(${from}) to docker(${this.id}:${to})`, err);
      }
      logger.info(`Output copying file(${from}) to docker(${this.id}:${to})`, stdout);
      fun({ status, value: stdout.trim() });
    });
  }

  copyFrom(from, to, fun) {
    exec(`docker cp ${this.id}:${from} ${to}`, (err, stdout, stderr) => {
      let status = true;
      if (err) {
        status = false;
        logger.error(`Error in copying file(${this.id}:${from}) to docker(${to})`, err);
      }
      logger.info(`Output copying file(${this.id}:${from}) to docker(${to})`, stdout);
      fun({ status, value: stdout.trim() });
    });
  }

  exec(cmd, fun) {
    exec(`docker exec ${this.id} ${cmd}`, (err, stdout, stderr) => {
      let status = true;
      if (err) {
        status = false;
        logger.error(`Error in exec ${cmd} in docker(${this.id})`, err);
      }
      logger.info(`Output exec ${cmd} in docker(${this.id})`, stdout);
      fun({ status, value: stdout.trim() });
    });
  }

  stop(fun = (answer) => {}) {
    exec(`docker stop ${this.id}`, (err, stdout, stderr) => {
      let status = true;
      if (err) {
        status = false;
        logger.error(`Error in stoping docker ${this.id}`, err);
      }
      logger.info(`Output in stoping docker ${this.id}`, stdout);
      fun({ status, value: stdout.trim() });
    });
  }
  
}

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
    fun({ status, value: stdout.trim() });
  });
}