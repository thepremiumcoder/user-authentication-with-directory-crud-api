import { ISearchParamRequest } from "@/utils/SearchHelper";
import { IProvincedirectoryModel } from "./model";

/**
 * @export
 * @interface IProvincedirectoryService
 */
export interface IProvincedirectoryService {
  /**
   * @returns {Promise <number>}
   * @memberof ProvincedirectoryService
   */
  countAll(): Promise<number>;

  /**
   * @returns {Promise <number>}
   * @memberof ProvincedirectoryService
   */
  countSearch(body: ISearchParamRequest): Promise<number>;

  /**
   * @returns {Promise<IProvincedirectoryModel[]>}
   * @memberof IProvincedirectoryService
   */
  findAll(pageNo: number, pageSize: number): Promise<IProvincedirectoryModel[]>;

  /**
   * @param {ISearchParamRequest} param
   * @returns {Promise<IProvincedirectoryModel[]>}
   * @memberof IProvincedirectoryService
   */
  search(
    searchParam: ISearchParamRequest,
    pageNo: number,
    pageSize: number
  ): Promise<IProvincedirectoryModel[]>;

  /**
   * @param {string} code
   * @returns {Promise<IProvincedirectoryModel>}
   * @memberof IProvincedirectoryService
   */
  findOne(code: string): Promise<IProvincedirectoryModel>;

  /**
   * @param {IProvincedirectoryModel} IProvincedirectoryModel
   * @returns {Promise<IProvincedirectoryModel>}
   * @memberof IProvincedirectoryService
   */
  insert(
    IProvincedirectoryModel: IProvincedirectoryModel
  ): Promise<IProvincedirectoryModel>;

  /**
   * @param {string} id
   * @param {IProvincedirectoryModel} IProvincedirectoryModel
   * @returns {Promise<IProvincedirectoryModel>}
   * @memberof IProvincedirectoryService
   */
  update(
    id: string,
    IProvincedirectoryModel: IProvincedirectoryModel
  ): Promise<Number>;

  /**
   * @param {string} id
   * @returns {Promise<IProvincedirectoryModel>}
   * @memberof IProvincedirectoryService
   */
  remove(id: string): Promise<IProvincedirectoryModel>;
}
