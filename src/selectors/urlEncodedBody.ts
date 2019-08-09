import { text, createError } from 'micro'
import { ParsedUrlQuery, parse } from 'querystring'
import { AsyncSelector } from '../types'

export interface UrlEncodedBodySelectorOptions {
  limit?: string | number
  encoding?: string
}

export function createUrlEncodedBodySelector(
  options?: UrlEncodedBodySelectorOptions
): AsyncSelector<ParsedUrlQuery> {
  return async ({ req }) => {
    const textBody = await text(req, options)
    try {
      return parse(textBody)
    } catch (error) {
      /* istanbul ignore next */
      throw createError(400, 'Invalid url-encoded body', error)
    }
  }
}
