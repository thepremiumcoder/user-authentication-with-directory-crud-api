import { ISearchParamRequest } from "@/utils/SearchHelper";
import { ISubcontinentdirectoryModel } from "./model";

/**
 * @export
 * @interface ISubcontinentdirectoryService
 */
export interface ISubcontinentdirectoryService {
  /**
   * @returns {Promise <number>}
   * @memberof SubcontinentdirectoryService
   */
  countAll(): Promise<number>;

  /**
   * @returns {Promise <number>}
   * @memberof SubcontinentdirectoryService
   */
  countSearch(body: ISearchParamRequest): Promise<number>;

  /**
   * @returns {Promise<ISubcontinentdirectoryModel[]>}
   * @memberof ISubcontinentdirectoryService
   */
  findAll(
    pageNo: number,
    pageSize: number
  ): Promise<ISubcontinentdirectoryModel[]>;

  /**
   * @param {ISearchParamRequest} param
   * @returns {Promise<ISubcontinentdirectoryModel[]>}
   * @memberof ISubcontinentdirectoryService
   */
  search(
    searchParam: ISearchParamRequest,
    pageNo: number,
    pageSize: number
  ): Promise<ISubcontinentdirectoryModel[]>;

  /**
   * @param {string} code
   * @returns {Promise<ISubcontinentdirectoryModel>}
   * @memberof ISubcontinentdirectoryService
   */
  findOne(code: string): Promise<ISubcontinentdirectoryModel>;

  /**
   * @param {ISubcontinentdirectoryModel} ISubcontinentdirectoryModel
   * @returns {Promise<ISubcontinentdirectoryModel>}
   * @memberof ISubcontinentdirectoryService
   */
  insert(
    ISubcontinentdirectoryModel: ISubcontinentdirectoryModel
  ): Promise<ISubcontinentdirectoryModel>;

  /**
   * @param {string} id
   * @param {ISubcontinentdirectoryModel} ISubcontinentdirectoryModel
   * @returns {Promise<ISubcontinentdirectoryModel>}
   * @memberof ISubcontinentdirectoryService
   */
  update(
    id: string,
    ISubcontinentdirectoryModel: ISubcontinentdirectoryModel
  ): Promise<Number>;

  /**
   * @param {string} id
   * @returns {Promise<ISubcontinentdirectoryModel>}
   * @memberof ISubcontinentdirectoryService
   */
  remove(id: string): Promise<ISubcontinentdirectoryModel>;
}
