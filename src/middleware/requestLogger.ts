import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

export function requestLogger(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const { method, path, query, body } = req;

  logger.info(
    {
      method,
      path,
      query,
      body,
    },
    'Incoming request'
  );

  next();
}
