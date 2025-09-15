"use strict";

import 'dotenv/config';
import createApp from "./app";
import logger from "./utils/logger";

const PORT = process.env.PORT || 8080;
const app = createApp();
const server = app.listen(PORT, () => {
    logger.info(`Server listening at port ${PORT}`);
});

export default server;