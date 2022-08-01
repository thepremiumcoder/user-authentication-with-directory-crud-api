import { ISearchParamRequest } from "@/utils/SearchHelper";
import { IParishdirectoryModel } from "./model";

/**
 * @export
 * @interface IParishdirectoryService
 */
export interface IParishdirectoryService {
  /**
   * @returns {Promise <number>}
   * @memberof ParishdirectoryService
   */
  countAll(): Promise<number>;

  /**
   * @returns {Promise <number>}
   * @memberof ParishdirectoryService
   */
  countSearch(body: ISearchParamRequest): Promise<number>;

  /**
   * @returns {Promise<IParishdirectoryModel[]>}
   * @memberof IParishdirectoryService
   */
  findAll(pageNo: number, pageSize: number): Promise<IParishdirectoryModel[]>;

  /**
   * @param {ISearchParamRequest} param
   * @returns {Promise<IParishdirectoryModel[]>}
   * @memberof IParishdirectoryService
   */
  search(
    searchParam: ISearchParamRequest,
    pageNo: number,
    pageSize: number
  ): Promise<IParishdirectoryModel[]>;

  /**
   * @param {string} code
   * @returns {Promise<IParishdirectoryModel>}
   * @memberof IParishdirectoryService
   */
  findOne(code: string): Promise<IParishdirectoryModel>;

  /**
   * @param {IParishdirectoryModel} IParishdirectoryModel
   * @returns {Promise<IParishdirectoryModel>}
   * @memberof IParishdirectoryService
   */
  insert(
    IParishdirectoryModel: IParishdirectoryModel
  ): Promise<IParishdirectoryModel>;

  /**
   * @param {string} id
   * @param {IParishdirectoryModel} IParishdirectoryModel
   * @returns {Promise<IParishdirectoryModel>}
   * @memberof IParishdirectoryService
   */
  update(
    id: string,
    IParishdirectoryModel: IParishdirectoryModel
  ): Promise<Number>;

  /**
   * @param {string} id
   * @returns {Promise<IParishdirectoryModel>}
   * @memberof IParishdirectoryService
   */
  remove(id: string): Promise<IParishdirectoryModel>;
}
