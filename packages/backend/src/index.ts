import './pre-start'; // Must be the first import
import logger from 'jet-logger';

import server from './server';


// **** Run **** //

const SERVER_START_MSG = ('Express server started on port: ');

server.listen(3000, () => logger.info(SERVER_START_MSG));
