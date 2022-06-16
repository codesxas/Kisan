import { Request, Response, NextFunction } from "express";

/* global error handler */
export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);

  return res.status(statusCode).json({ message: err.message });
};
