import { IncomingMessage, ServerResponse, OutgoingHttpHeaders } from 'http'

export interface Context {
  req: IncomingMessage
}

export type SyncSelector<T> = (context: Context) => T
export type AsyncSelector<T> = (context: Context) => Promise<T>
export type Selector<T> = SyncSelector<T> | AsyncSelector<T>

export type Selectors<T> = { [P in keyof T]: Selector<T[P]> }

export type Unpromise<T> = T extends Promise<infer U> ? U : T
export type Promisable<T> = T | Promise<T>

export interface ResponseObject<B> {
  body?: B
  statusCode: number
  headers: OutgoingHttpHeaders
}

export interface PrismyPureMiddleware {
  (context: Context): (
    next: () => Promise<ResponseObject<any>>
  ) => Promise<ResponseObject<any>>
}

export interface PrismyMiddleware<A extends any[]>
  extends PrismyPureMiddleware {
  mhandler(
    next: () => Promise<ResponseObject<any>>
  ): (...args: A) => Promise<ResponseObject<any>>
}

export type ContextHandler = (context: Context) => Promise<ResponseObject<any>>

export interface PrismyRequestListener<A extends any[]> {
  (req: IncomingMessage, res: ServerResponse): void
  handler(...args: A): Promisable<ResponseObject<any>>
  contextHandler: ContextHandler
}
