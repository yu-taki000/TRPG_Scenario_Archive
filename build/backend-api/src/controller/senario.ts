import * as repoType from '@/repository/types'
import * as controllerType from '@/controller/types'

export class senarioListController {
  private senarioTable: repoType.SenarioRepos;
  constructor(repos: repoType.SenarioRepos) {
    this.senarioTable = repos;
  }

  public getList = (): controllerType.SenarioItem[] => this.senarioTable.GetList();

  public setItem(item: controllerType.SenarioItem) {
    const ret = this.senarioTable.SetItem(item);
  }

}