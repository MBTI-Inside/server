import { WinstonModule } from 'nest-winston';
import { LoggerOptions, format, transports } from 'winston';

const colorOptions = {
  levels: {
    error: 0,
    debug: 1,
    warn: 2,
    info: 3,
    data: 4,
    verbose: 5,
    silly: 6,
    custom: 7
  },
  colors: {
    error: 'red',
    debug: 'blue',
    warn: 'yellow',
    info: 'green',
    data: 'magenta',
    verbose: 'cyan',
    silly: 'grey',
    custom: 'yellow'
  }
};

const loggerOptions: LoggerOptions = {
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.json(),
    format.colorize({ all: true, colors: colorOptions.colors })
  ),
  transports: [new transports.Console()]
};

export const winstonLogger = WinstonModule.createLogger(loggerOptions);
