<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [prismy](./prismy.md) &gt; [prismyx](./prismy.prismyx.md)

## prismyx() function

Generates a handler to be used by http.Server

<b>Signature:</b>

```typescript
export declare function prismyx<A extends any[]>(selectors: Selectors<A>, handler: (...args: A) => ResponseObject<any> | Promise<ResponseObject<any>>, middlewareList?: PrismyPureMiddleware[]): PrismyRequestListener<A>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  selectors | <code>Selectors&lt;A&gt;</code> | Tuple of Selectors to generate arguments for handler |
|  handler | <code>(...args: A) =&gt; ResponseObject&lt;any&gt; &#124; Promise&lt;ResponseObject&lt;any&gt;&gt;</code> | Business logic handling the request |
|  middlewareList | <code>PrismyPureMiddleware[]</code> | Middleware to pass request and response through |

<b>Returns:</b>

`PrismyRequestListener<A>`

## Remarks

For most cases use `prismy` Use this function if you require more than 12 selectors or need to write a custom prismy function.
