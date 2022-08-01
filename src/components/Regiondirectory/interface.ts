import { ISearchParamRequest } from "@/utils/SearchHelper";
import { IRegiondirectoryModel } from "./model";

/**
 * @export
 * @interface IRegiondirectoryService
 */
export interface IRegiondirectoryService {
  /**
   * @returns {Promise <number>}
   * @memberof RegiondirectoryService
   */
  countAll(): Promise<number>;

  /**
   * @returns {Promise <number>}
   * @memberof RegiondirectoryService
   */
  countSearch(body: ISearchParamRequest): Promise<number>;

  /**
   * @returns {Promise<IRegiondirectoryModel[]>}
   * @memberof IRegiondirectoryService
   */
  findAll(pageNo: number, pageSize: number): Promise<IRegiondirectoryModel[]>;

  /**
   * @param {ISearchParamRequest} param
   * @returns {Promise<IRegiondirectoryModel[]>}
   * @memberof IRegiondirectoryService
   */
  search(
    searchParam: ISearchParamRequest,
    pageNo: number,
    pageSize: number
  ): Promise<IRegiondirectoryModel[]>;

  /**
   * @param {string} code
   * @returns {Promise<IRegiondirectoryModel>}
   * @memberof IRegiondirectoryService
   */
  findOne(code: string): Promise<IRegiondirectoryModel>;

  /**
   * @param {IRegiondirectoryModel} IRegiondirectoryModel
   * @returns {Promise<IRegiondirectoryModel>}
   * @memberof IRegiondirectoryService
   */
  insert(
    IRegiondirectoryModel: IRegiondirectoryModel
  ): Promise<IRegiondirectoryModel>;

  /**
   * @param {string} id
   * @param {IRegiondirectoryModel} IRegiondirectoryModel
   * @returns {Promise<IRegiondirectoryModel>}
   * @memberof IRegiondirectoryService
   */
  update(
    id: string,
    IRegiondirectoryModel: IRegiondirectoryModel
  ): Promise<Number>;

  /**
   * @param {string} id
   * @returns {Promise<IRegiondirectoryModel>}
   * @memberof IRegiondirectoryService
   */
  remove(id: string): Promise<IRegiondirectoryModel>;
}
