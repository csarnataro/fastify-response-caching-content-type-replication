# reproduce-fastify-response-caching-content-type

Repo to reproduce this issue in `fastify-response-caching`:

https://github.com/codeaholicguy/fastify-response-caching/issues/9


## Steps to reproduce:
1. git clone https://github.com/csarnataro/reproduce-fastify-response-caching-content-type.git

2. npm run start

3. open you browser to http://localhost:3000/

4. in the network inspector, check that the first uncached response has:
  `content-type` -> `application/json; charset=utf-8`

5. refresh the page at http://localhost:3000/

6. check that the second cached response has:
  `content-type` ->	`text/plain; charset=utf-8`

## Expected result:
The content type of the cached response should honour the content type of the initial, non-cached response