export class Request {
  id: number;
  method: string;
  params: [any];
}

export class Response {
  result: any;
  error: string;
  id: number;
}
