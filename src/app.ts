"use strict";

import express from "express";
import cors from "cors";
import helmet from "helmet";

import { RegisterRoutes } from "./routes/routes";

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger/swagger.json';

import { handleError } from "./middleware/errorHandler";
import { requestLogger } from "./middleware/requestLogger";
import { requestMetrics } from './middleware/requestMetrics';


/**
 * Creates and configuress Express application.
 *
 * @remarks
 * This function initializes middlewares, routes and Swagger UI.
 *
 * @returns Express-application, which can be used to execute HTTP server.
 */

export default function createApp(): express.Express {
    const app = express();
    const appVersion = process.env.APP_VERSION || "v0";
    const router = express.Router();
    const basePath = `/api/${appVersion}`;

    app.use(express.json());
    app.use(cors());
    app.use(helmet());
    app.use(requestLogger);
    app.use(handleError);
    app.use(requestMetrics)

    app.use(`${basePath}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    RegisterRoutes(router);
    app.use(basePath, router);

    return app;
}