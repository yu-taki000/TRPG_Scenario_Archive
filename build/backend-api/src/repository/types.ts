import * as repos from '@/controller/types'

export interface SenarioRepos {
  tableName: () => string,
  GetList: () => Promise<repos.SenarioItem[]>,
  SetItem: (item: repos.SenarioItem) => Promise<boolean>,
}