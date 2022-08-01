import { ISearchParamRequest } from "@/utils/SearchHelper";
import { IRolesModel } from "./model";

/**
 * @export
 * @interface IRolesService
 */
export interface IRolesService {
  /**
   * @returns {Promise <number>}
   * @memberof RolesService
   */
  countAll(): Promise<number>;

  /**
   * @returns {Promise <number>}
   * @memberof RolesService
   */
  countSearch(body: ISearchParamRequest): Promise<number>;

  /**
   * @returns {Promise<IRolesModel[]>}
   * @memberof IRolesService
   */
  findAll(pageNo: number, pageSize: number): Promise<IRolesModel[]>;

  /**
   * @param {ISearchParamRequest} param
   * @returns {Promise<IRolesModel[]>}
   * @memberof IRolesService
   */
  search(
    searchParam: ISearchParamRequest,
    pageNo: number,
    pageSize: number
  ): Promise<IRolesModel[]>;

  /**
   * @param {string} code
   * @returns {Promise<IRolesModel>}
   * @memberof IRolesService
   */
  findOne(code: string): Promise<IRolesModel>;

  /**
   * @param {IRolesModel} IRolesModel
   * @returns {Promise<IRolesModel>}
   * @memberof IRolesService
   */
  insert(IRolesModel: IRolesModel): Promise<IRolesModel>;

  /**
   * @param {string} id
   * @param {IRolesModel} IRolesModel
   * @returns {Promise<IRolesModel>}
   * @memberof IRolesService
   */
  update(id: string, IRolesModel: IRolesModel): Promise<Number>;

  /**
   * @param {string} id
   * @returns {Promise<IRolesModel>}
   * @memberof IRolesService
   */
  remove(id: string): Promise<IRolesModel>;
}
