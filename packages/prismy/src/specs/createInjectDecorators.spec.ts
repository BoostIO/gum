import { prismy } from '..'
import {
  createInjectDecorators,
  getSelectors,
  Selector
} from '../createInjectDecorators'

describe('createInjectDecorators', () => {
  it('sets a selector.', () => {
    const selectUrl: Selector<string | undefined> = req => req.url
    const injectUrl = createInjectDecorators(selectUrl)
    class MyHandler {
      execute(@injectUrl url: string) {
        return {
          url
        }
      }
    }

    const selectors = getSelectors(MyHandler)
    expect(selectors).toEqual([selectUrl])
  })

  it('throws when inject decorator is applied to other methods.', () => {
    expect(() => {
      const injectUrl = createInjectDecorators(req => req.url)
      class MyHandler {
        test(@injectUrl url: string) {
          return {
            url
          }
        }
        execute() {
          return {}
        }
      }
      prismy(MyHandler)
    }).toThrowError()
  })
})