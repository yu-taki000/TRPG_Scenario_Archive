import * as types from '@/repository/types'

const listRepo: types.SenarioRepos = {
  GetList: () => { return [] },
  SetItem: (item: any) => { return false }
}