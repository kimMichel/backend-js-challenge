import { databaseInstance } from "../database/in-memory-database.ts"

export async function handlePageView(request: Request, key: string, env: any): Promise<Response> {
  databaseInstance.increment(key)

  const item = databaseInstance.database.find(entry => entry.key === key)
  // const { result } = await env.DB.prepare(
  //   'SELECT * FROM counter WHERE key = ?'
  // ).bind(key).all()

  // let counter = result.counter + 1

  // await env.DB.prepare(
  //   'UPDATE counter SET counter = counter + 1 WHERE key = ?'
  // ).bind(key)

  if (item) {
    return new Response(`${item?.counter}`, { status: 200, headers: { 'Content-Type': 'text/plain' } })
  } else {
    return new Response(`Key '${key}' not found in the database.`, { status: 404, headers: { 'Content-Type': 'text/plain' } })
  }
}