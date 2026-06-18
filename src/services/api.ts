// URL base da API. Usamos "/" porque o Vite faz proxy de "/api" para o
// backend (veja vite.config.ts). Para apontar para outro servidor, defina
// VITE_API_BASE_URL, ex: 'http://localhost:4000/'.
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/'

// A API sempre responde neste formato: { status, message, data }
interface ApiEnvelope<T> {
  status?: string
  message: string
  data?: T
}

// Erro personalizado que guarda o código HTTP (ex: 404, 500).
export class ApiError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.status = status
  }
}

// Função central que faz as chamadas e trata os erros.
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
