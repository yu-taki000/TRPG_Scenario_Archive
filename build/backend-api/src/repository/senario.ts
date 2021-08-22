import * as types from '@/repository/types'
import * as dynamo from '@/util/dynamoUtil'
import * as controllertypes from '@/controller/types'

export const listRepo: types.SenarioRepos = {
  GetList: async () => {
    const client = new dynamo.dynamoClient()
    const queryResult = await client.getList();
    console.log('queryResult', JSON.stringify(queryResult));
    const ret = queryResult.filter(item => controllertypes.IsSenarioItem(item)) as controllertypes.SenarioItem[];
    console.log('ret', JSON.stringify(ret));
    return ret;
  },
  SetItem: async (item: any): Promise<boolean> => {
    const client = new dynamo.dynamoClient();
    const ret = await client.setItem(item)
    return ret;
  }
}