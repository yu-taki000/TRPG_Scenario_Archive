import * as repoType from '@/repository/types';
import * as controllerType from '@/controller/types';
import * as repository from '@/repository/senario';
import * as sequence from '@/repository/sequence';


export class senarioListController {
  private senarioTable: repoType.SenarioRepos;

  constructor(repos: repoType.SenarioRepos = repository.listRepo) {
    this.senarioTable = repos;
  }

  public getList = async (): Promise<controllerType.SenarioItem[]> => await this.senarioTable.GetList();

  public setItem = async (item: controllerType.SenarioItem): Promise<boolean> => {
    // SenarioIDの発行
    item.senarioId = await sequence.client.addIncremental(this.senarioTable.tableName());
    if (!controllerType.IsSenarioItem(item)) { throw new Error(`this item is not supported:\r\n ${JSON.stringify(item)}`) }
    const ret = this.senarioTable.SetItem(item);
    return ret;
  }
}

const controller = new senarioListController();
export default controller;