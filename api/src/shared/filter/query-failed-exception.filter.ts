import { ArgumentsHost, Catch, ExceptionFilter, Logger } from '@nestjs/common';
import { Response } from 'express';
import { QueryFailedError } from 'typeorm';
import { CustomResponse } from '../utils/interfaces/response';

interface QueryFailedException extends QueryFailedError {
  code: string;
  detail: string;
}

@Catch(QueryFailedError)
export class QueryFailedExceptionFilter implements ExceptionFilter {
  catch(exception: QueryFailedException, host: ArgumentsHost) {
    Logger.error(`[${exception.code} - ${exception.detail}] `, exception);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (exception.code === '23505') {
      const message = exception.detail
        .split('=')[1]
        .replace(/\(|\)/g, '')
        .trim();
      return response.status(409).json(
        new CustomResponse({
          status: 409,
          message,
          data: null,
          error: exception.detail,
        }),
      );
    }

    response.status(500).json(
      new CustomResponse({
        status: 500,
        message: 'Internal server',
        data: null,
        error: null,
      }),
    );
  }
}
