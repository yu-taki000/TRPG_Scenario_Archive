import * as repos from '@/controller/types'

export interface SenarioRepos {
  GetList: () => Promise<repos.SenarioItem[]>,
  SetItem: (item: repos.SenarioItem) => boolean,
}