import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

class ErrorHandler extends Error {
    statusCode: number;
    message: string;

    constructor(statusCode: number, message: string) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

const handleError = (err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
    const { statusCode, message } = err;
    void next;
    logger.error({
        path: req.path,
        method: req.method,
        error: message,
        stack: err instanceof Error ? err.stack : undefined,
    }, 'Unhandled error');

    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message,
    });
};

export { ErrorHandler, handleError };