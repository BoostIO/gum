<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [prismy](./prismy.md) &gt; [res](./prismy.res.md)

## res() function

Factory function for creating http responses

<b>Signature:</b>

```typescript
export declare function res<B = unknown>(body: B, statusCode?: number, headers?: OutgoingHttpHeaders): ResponseObject<B>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  body | <code>B</code> | Body of the response |
|  statusCode | <code>number</code> | HTTP status code of the response |
|  headers | <code>OutgoingHttpHeaders</code> | HTTP headers for the response |

<b>Returns:</b>

`ResponseObject<B>`

A response object containing necessary information
