// Referred From https://zukucode.com/2022/09/typescript-fetch.html

// APIのレスポンスの型
export type ApiResult<T> = ApiSuccessResult<T> | ApiErrorResult

// 正常時の型
export type ApiSuccessResult<T> = {
  data: T
  ok: true
}

// 異常時の型（エラーコードとエラーメッセージがレスポンスされることを想定）
export type ApiErrorResult = {
  data: { code?: string; message: string }
  ok: false
}

const handleResponse = async (response: Response): Promise<ApiResult<unknown>> => {
  const isJson = response.headers.get('content-type')?.includes('application/json')
  // JSON形式でデータを取得する
  const data = isJson ? await response.json() : null
  if (!response.ok) {
    // 異常時（ステータスコードが400～,500～）

    // レスポンスデータのmessageが存在しない場合はステータスのテキストを設定する
    const error = (data && data.message) || response.statusText
    return {
      ok: false,
      data: {
        message: error,
        code: data?.code,
      },
    }
  }
  // 正常終了
  return { ok: true, data }
}

const http = async (url: string, init?: RequestInit): Promise<Response> => {
  const response = await fetch(url, init)
  return response
}

// getリクエスト
export const get = async (url: string): Promise<ApiResult<unknown>> => {
  const data = await http(url, {
    method: 'GET',
  })
  return await handleResponse(data)
}

// postリクエスト
export const post = async (url: string, body: Record<string, unknown> | Record<string, unknown>[]): Promise<ApiResult<unknown>> => {
  const data = await http(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  return await handleResponse(data)
}

// multipart形式のリクエスト
// JSON形式のパラメータをFormDataに変換してリクエストする
export const postMultiPart = async (url: string, body: Record<string, string | Blob | string[] | Blob[]>): Promise<ApiResult<unknown>> => {
  const data = await http(url, {
    method: 'POST',
    body: Object.entries(body).reduce((formData, [key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => formData.append(key, v))
      } else {
        formData.append(key, value)
      }
      return formData
    }, new FormData()),
  })
  return await handleResponse(data)
}
