import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): void {

   void next;

  let status = 500;
  let message = 'Internal Server Error';

  if (err instanceof Error) {
    message = err.message;

    if ((err as any).status && typeof (err as any).status === 'number') {
      status = (err as any).status;
    }
  }

  logger.error({
    path: req.path,
    method: req.method,
    error: message,
    stack: err instanceof Error ? err.stack : undefined,
  }, 'Unhandled error');

  res.status(status).json({
    success: false,
    message,
  });
}
