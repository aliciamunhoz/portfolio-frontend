export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/'

interface ApiEnvelope<T> {
  status?: string
  message: string
  data?: T
}

export class ApiError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.status = status
  }
}

export async function request<T>(
  path: string,
  options?: RequestInit
): Promise<ApiEnvelope<T>> {
  let response: Response

  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    })
  } catch {
    throw new ApiError('Não foi possível conectar à API. Ela está rodando?', 0)
  }

  const body = (await response.json().catch(() => ({}))) as ApiEnvelope<T>

  if (!response.ok) {
    throw new ApiError(
      body.message || 'Erro ao comunicar com a API.',
      response.status
    )
  }

  return body
}
