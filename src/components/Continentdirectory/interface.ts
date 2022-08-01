import { ISearchParamRequest } from "@/utils/SearchHelper";
import { IContinentdirectoryModel } from "./model";

/**
 * @export
 * @interface IContinentdirectoryService
 */
export interface IContinentdirectoryService {
  /**
   * @returns {Promise <number>}
   * @memberof ContinentdirectoryService
   */
  countAll(): Promise<number>;

  /**
   * @returns {Promise <number>}
   * @memberof ContinentdirectoryService
   */
  countSearch(body: ISearchParamRequest): Promise<number>;

  /**
   * @returns {Promise<IContinentdirectoryModel[]>}
   * @memberof IContinentdirectoryService
   */
  findAll(
    pageNo: number,
    pageSize: number
  ): Promise<IContinentdirectoryModel[]>;

  /**
   * @param {ISearchParamRequest} param
   * @returns {Promise<IContinentdirectoryModel[]>}
   * @memberof IContinentdirectoryService
   */
  search(
    searchParam: ISearchParamRequest,
    pageNo: number,
    pageSize: number
  ): Promise<IContinentdirectoryModel[]>;

  /**
   * @param {string} code
   * @returns {Promise<IContinentdirectoryModel>}
   * @memberof IContinentdirectoryService
   */
  findOne(code: string): Promise<IContinentdirectoryModel>;

  /**
   * @param {IContinentdirectoryModel} IContinentdirectoryModel
   * @returns {Promise<IContinentdirectoryModel>}
   * @memberof IContinentdirectoryService
   */
  insert(
    IContinentdirectoryModel: IContinentdirectoryModel
  ): Promise<IContinentdirectoryModel>;

  /**
   * @param {string} id
   * @param {IContinentdirectoryModel} IContinentdirectoryModel
   * @returns {Promise<IContinentdirectoryModel>}
   * @memberof IContinentdirectoryService
   */
  update(
    id: string,
    IContinentdirectoryModel: IContinentdirectoryModel
  ): Promise<Number>;

  /**
   * @param {string} id
   * @returns {Promise<IContinentdirectoryModel>}
   * @memberof IContinentdirectoryService
   */
  remove(id: string): Promise<IContinentdirectoryModel>;
}
