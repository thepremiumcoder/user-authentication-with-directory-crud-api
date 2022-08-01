import { ISearchParamRequest } from "@/utils/SearchHelper";
import { IPermissionsModel } from "./model";

/**
 * @export
 * @interface IPermissionsService
 */
export interface IPermissionsService {
  /**
   * @returns {Promise <number>}
   * @memberof PermissionsService
   */
  countAll(): Promise<number>;

  /**
   * @returns {Promise <number>}
   * @memberof PermissionsService
   */
  countSearch(body: ISearchParamRequest): Promise<number>;

  /**
   * @returns {Promise<IPermissionsModel[]>}
   * @memberof IPermissionsService
   */
  findAll(pageNo: number, pageSize: number): Promise<IPermissionsModel[]>;

  /**
   * @param {ISearchParamRequest} param
   * @returns {Promise<IPermissionsModel[]>}
   * @memberof IPermissionsService
   */
  search(
    searchParam: ISearchParamRequest,
    pageNo: number,
    pageSize: number
  ): Promise<IPermissionsModel[]>;

  /**
   * @param {string} code
   * @returns {Promise<IPermissionsModel>}
   * @memberof IPermissionsService
   */
  findOne(code: string): Promise<IPermissionsModel>;

  /**
   * @param {IPermissionsModel} IPermissionsModel
   * @returns {Promise<IPermissionsModel>}
   * @memberof IPermissionsService
   */
  insert(IPermissionsModel: IPermissionsModel): Promise<IPermissionsModel>;

  /**
   * @param {string} id
   * @param {IPermissionsModel} IPermissionsModel
   * @returns {Promise<IPermissionsModel>}
   * @memberof IPermissionsService
   */
  update(id: string, IPermissionsModel: IPermissionsModel): Promise<Number>;

  /**
   * @param {string} id
   * @returns {Promise<IPermissionsModel>}
   * @memberof IPermissionsService
   */
  remove(id: string): Promise<IPermissionsModel>;
}
