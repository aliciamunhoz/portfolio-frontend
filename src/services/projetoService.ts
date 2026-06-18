import { Projeto } from '../types/projeto'
import { request } from './api'

// Busca todos os projetos na API.
export async function listarProjetos(): Promise<Projeto[]> {
  const resposta = await request<Projeto[]>('api/projetos')
  return resposta.data ?? []
}
