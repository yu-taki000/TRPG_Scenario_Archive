import type { AxiosInstance } from "axios";

interface ScenearioInfo {
  scenarioName: string
  author: string
  senarioImage: string
  description: string
}
export const postScenario = async (client: AxiosInstance, info: ScenearioInfo) => {
  const response = await client.post<{ scenarioId: string }>(`scenario`, info)
  return response.data.scenarioId
}
export const postScenarioZip = async (client: AxiosInstance, scenarioId: string, file: File) => {
  console.log('zip', file);
  return await client.post(`scenario/${scenarioId}/zip`, file, { headers: { 'content-type': 'application/zip' } })
}