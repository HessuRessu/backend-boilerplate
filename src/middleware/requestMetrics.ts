import { Request, Response, NextFunction } from 'express';
import { httpRequestCounter } from '../controllers/MetricsController';

export function requestMetrics(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.on('finish', () => {
    httpRequestCounter.inc({
      method: req.method,
      route: req.route?.path || req.path,
      status: res.statusCode.toString(),
    });
  });
  next();
}
