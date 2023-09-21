export async function executionTimeMiddleware(request: Request, next: () => Promise<Response>) {
  const startTime = Date.now()

  const response = await next()

  const endTime = Date.now()
  const elapsedMilliseconds = endTime - startTime

  response.headers.set('X-Runtime', `${elapsedMilliseconds}`)
  return response
}