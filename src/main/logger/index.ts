/**
 * Author: Moki
 * Date: 2022-12-06
 * FileName: 记录日志
 **/
import logger from 'electron-log';

logger.transports.file.maxSize = 1002430;
logger.transports.file.format =
    '[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}]{scope} {text}';

const Logger = {
    info(param) {
        logger.info(param);
    },
    warn(param) {
        logger.warn(param);
    },
    error(param) {
        logger.error(param);
    },
    debug(param) {
        logger.debug(param);
    },
    verbose(param) {
        logger.verbose(param);
    },
    silly(param) {
        logger.silly(param);
    }
};

export default Logger;
