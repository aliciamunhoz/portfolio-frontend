import { Projeto } from '../types/projeto'
import { request } from './api'

export async function listarProjetos(): Promise<Projeto[]> {
  console.log('Buscando projetos na API...')
  const resposta = await request<Projeto[]>('api/projetos')
  console.log('Resposta da API:', resposta)
  return resposta.data ?? []
}
