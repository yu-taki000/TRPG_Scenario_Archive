import * as repoType from '@/repository/types'
import * as controllerType from '@/controller/types'
import * as repository from '@/repository/senario'

export class senarioListController {
  private senarioTable: repoType.SenarioRepos;
  constructor(repos: repoType.SenarioRepos = repository.listRepo) {
    this.senarioTable = repos;
  }

  public getList = async (): Promise<controllerType.SenarioItem[]> => await this.senarioTable.GetList();

  public setItem(item: controllerType.SenarioItem) {
    const ret = this.senarioTable.SetItem(item);
  }

}

const controller = new senarioListController();
export default controller;