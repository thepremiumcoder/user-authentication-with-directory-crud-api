import * as Joi from "@hapi/joi";
import RolesModel, { IRolesModel } from "./model";
import RolesValidation from "./validation";
import { IRolesService } from "./interface";
import { Types } from "mongoose";
import { GetSearchQuery, ISearchParamRequest } from "@/utils/SearchHelper";

/**
 * @export
 * @implements {IRolesModelService}
 */
const RolesService: IRolesService = {
  /**
   * @returns {Promise <number>}
   * @memberof RolesService
   */
  async countAll(): Promise<number> {
    try {
      return await RolesModel.countDocuments({});
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * @returns {Promise <number>}
   * @memberof ProductsService
   */
  async countSearch(body: ISearchParamRequest): Promise<number> {
    try {
      const query = GetSearchQuery(body);
      return await RolesModel.countDocuments(query);
    } catch (error) {
      throw new Error(error.message);
    }
  },
  /**
   * @returns {Promise < IRolesModel[] >}
   * @memberof RolesService
   */
  async findAll(pageNo: number, pageSize: number): Promise<IRolesModel[]> {
    try {
      const skip = pageNo * pageSize;
      return await RolesModel.find({}).skip(skip).limit(pageSize);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * @param {ISearchParamRequest} searchParam
   * @returns {Promise <IRolesModel[]>}
   * @memberof RolesService
   */
  async search(
    body: ISearchParamRequest,
    pageNo: number,
    pageSize: number
  ): Promise<IRolesModel[]> {
    try {
      const validate: Joi.ValidationResult<ISearchParamRequest> =
        RolesValidation.searchParams(body);
      if (validate.error) {
        throw new Error(validate.error.message);
      }
      const skip = pageNo * pageSize;
      const query = GetSearchQuery(body);
      return await RolesModel.find(query).skip(skip).limit(pageSize);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * @param {string} id
   * @returns {Promise < IRolesModel >}
   * @memberof RolesService
   */
  async findOne(id: string): Promise<IRolesModel> {
    try {
      const validate: Joi.ValidationResult<{
        id: string;
      }> = RolesValidation.getRoles({
        id,
      });

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      return await RolesModel.findOne({
        _id: Types.ObjectId(id),
      });
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * @param {IRolesModel} roles
   * @returns {Promise < IRolesModel >}
   * @memberof RolesService
   */
  async insert(body: IRolesModel): Promise<IRolesModel> {
    try {
      const validate: Joi.ValidationResult<IRolesModel> =
        RolesValidation.createRoles(body);

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      const roles: IRolesModel = await RolesModel.create(body);

      return roles;
    } catch (error) {
      //throw new Error(error.message);
      throw new Error(error);
    }
  },

  /**
   * @param {string} id
   * @param {IRolesModel} roles
   * @returns {Promise < IRolesModel >}
   * @memberof RolesService
   */
  async update(id: string, body: IRolesModel): Promise<Number> {
    try {
      const validate: Joi.ValidationResult<IRolesModel> =
        RolesValidation.updateRoles(body);

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      const roles = await RolesModel.updateOne(
        { _id: Types.ObjectId(id) },
        { $set: body }
      );

      return roles.nModified;
    } catch (error) {
      //throw new Error(error.message);
      throw new Error(error);
    }
  },

  /**
   * @param {string} id
   * @returns {Promise < IRolesModel >}
   * @memberof RolesService
   */
  async remove(id: string): Promise<IRolesModel> {
    try {
      const validate: Joi.ValidationResult<{
        id: string;
      }> = RolesValidation.removeRoles({
        id,
      });

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      const roles: IRolesModel = await RolesModel.findOneAndRemove({
        _id: Types.ObjectId(id),
      });

      return roles;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default RolesService;
