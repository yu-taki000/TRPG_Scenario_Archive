import type { AxiosInstance } from "axios";

interface ScenearioInfo {
  scenarioName: string
  author: string
  senarioImage: string
  description: string
}
export const postScenario = async (client: AxiosInstance, info: ScenearioInfo) => {
  return await client.post(`scenario`, info)
}
export const postScenarioZip = async (client: AxiosInstance, scenarioId: string, file: File) => {
  return await client.post(`scenario/${scenarioId}/zip`, file, { headers: { 'content-type': 'application/zip' } })
}