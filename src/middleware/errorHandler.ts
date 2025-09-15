import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

// Tyypitetty error middleware
export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction // tarvitaan Express-compatibility, vaikka ei käytetä
): void {
  // Poistetaan ESLint varoitus käyttämättömästä nextistä
  void next;

  // Oletusvirhe
  let status = 500;
  let message = 'Internal Server Error';

  // Jos err on Error-tyyppi, käytetään sen tietoja
  if (err instanceof Error) {
    message = err.message;
    // Jos halutaan, voidaan lisätä myös custom status-property
    if ((err as any).status && typeof (err as any).status === 'number') {
      status = (err as any).status;
    }
  }

  // Logataan virhe
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
