import { IncomingMessage, ServerResponse, IncomingHttpHeaders } from 'http'

export interface Context {
  req: IncomingMessage
}

export type Selector<T> = (context: Context) => T

export type Selectors<T> = { [P in keyof T]: Selector<T[P]> }

export interface ResponseObject<B> {
  body?: B
  statusCode: number
  headers: IncomingHttpHeaders
}

export type Middleware = (
  context: Context
) => (next: () => ResponseObject<any>) => ResponseObject<any>

export interface PrismyRequestListener<A extends any[]> {
  (req: IncomingMessage, res: ServerResponse): void
  handler(...args: A): any
  selectors: Selectors<A>
}
