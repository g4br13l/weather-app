/* export const ApiBase = 'http://localhost:3500' */


type HttpMethodsT = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE'



export function makeHttpReq() {

  const reqWrapper = (methodP: HttpMethodsT | undefined, bodyP?: object): RequestInit => ({
    method: methodP,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: bodyP !== undefined ? JSON.stringify(bodyP) : undefined,
  })

  const verifyError = (res: Response) => {
    if (!res.ok || res.status !== 200) {
      throw new Error(
        `Error while accessing the endpoint ${res.url}
        \n with status ${res.statusText}.
        \n Response: ${res}
        `,
      )
    }
  }

  return {

    get: async <TRes>(url: string): Promise<TRes> => {
      const res = await fetch(url, reqWrapper('GET'))
      verifyError(res)
      return await res.json()
    },

    /* post: async <TRes>(url: string, body: object): Promise<TRes> => {
      const res = await fetch(url, reqWrapper('POST', body))
      verifyError(res)
      return await res.json()
    },

    patch: async <TRes>(url: string, body: object): Promise<TRes> => {
      const res = await fetch(url, reqWrapper('PATCH', body))
      verifyError(res)
      return await res.json()
    },

    put: async <TRes>(url: string, body: object): Promise<TRes | Error> => {
      const res = await fetch(url, reqWrapper('PUT', body))
      verifyError(res)
      return await res.json()
    },

    delete: async <TRes>(url: string): Promise<TRes> => {
      const res = await fetch(url, reqWrapper('DELETE'))
      verifyError(res)
      return await res.json()
    }, */
  }
}
