import {
  middleware,
  urlSelector,
  methodSelector,
  AsyncSelector,
  ResponseObject,
  prismy,
  res
} from '../../src'
import { UrlWithStringQuery } from 'url'
import { expectType } from '../helpers'

const asyncUrlSelector: AsyncSelector<UrlWithStringQuery> = async context =>
  urlSelector(context)

const middleware1 = middleware(
  [urlSelector, methodSelector, asyncUrlSelector],
  next => async (url, method, url2) => {
    expectType<UrlWithStringQuery>(url)
    expectType<string | undefined>(method)
    expectType<UrlWithStringQuery>(url2)
    return next()
  }
)

expectType<
  (
    next: () => Promise<ResponseObject<any>>
  ) => (
    url: UrlWithStringQuery,
    method: string | undefined,
    url2: UrlWithStringQuery
  ) => ResponseObject<any> | Promise<ResponseObject<any>>
>(middleware1.mhandler)

expectType<
  (
    next: () => Promise<ResponseObject<any>>
  ) => (
    url: UrlWithStringQuery,
    method: string | undefined,
    url2: UrlWithStringQuery
  ) => ResponseObject<any> | Promise<ResponseObject<any>>
>(middleware1.mhandler)

prismy([], () => res(''), [middleware1])
