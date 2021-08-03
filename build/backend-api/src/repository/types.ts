import * as repos from '@/controller/types'

export interface SenarioRepos {
  GetList: () => repos.SenarioItem[],
  SetItem: (item: repos.SenarioItem) => boolean,
}