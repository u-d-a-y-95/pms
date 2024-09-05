import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';
import { CustomResponse } from '../utils/interfaces/response';

type ExceptionResponse = {
  message: any;
  error: string;
  statusCode: number;
};

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();

    const response = ctx.getResponse<Response>();
    const exceptionResponse = exception.getResponse() as ExceptionResponse;
    const status =
      exceptionResponse.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;

    const res = new CustomResponse({
      status,
      message: exceptionResponse.error,
      error: exceptionResponse.message,
      data: null,
    });
    Logger.error(exceptionResponse);
    response.status(status).json(res);
  }
}
