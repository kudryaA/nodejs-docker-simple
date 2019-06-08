/**
 * Module for configuration logger for docker lib
 */

import { configure, getLogger } from 'log4js';

configure({
  appenders: { 
    file: {
      type: 'file', 
      filename: 'logs/docker_simple.log',
      maxLogSize: 104857600, // 100mb
      keepFileExt: true,
      backups: 1000
    },
    console: { 
      type: 'console' 
    } 
  },
  categories: { 
    default: { 
      appenders: ['file', 'console'], 
      level: 'debug' 
    } 
  }
});

export default getLogger();