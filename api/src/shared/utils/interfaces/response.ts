interface ResponseArgs {
  status: number;
  message: string;
  data: unknown;
  error: unknown;
}

export class CustomResponse {
  private status: number;
  private message: string;
  private data: unknown;
  private error: unknown;
  private timestamp: string;
  constructor(res: ResponseArgs) {
    this.status = res.status;
    this.message = res.message;
    this.data = res.data;
    this.error = res.error;
    this.timestamp = new Date().toISOString();
  }
}
