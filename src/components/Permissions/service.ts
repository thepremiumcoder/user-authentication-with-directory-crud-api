import * as Joi from "@hapi/joi";
import PermissionsModel, { IPermissionsModel } from "./model";
import PermissionsValidation from "./validation";
import { IPermissionsService } from "./interface";
import { Types } from "mongoose";
import { GetSearchQuery, ISearchParamRequest } from "@/utils/SearchHelper";

/**
 * @export
 * @implements {IPermissionsModelService}
 */
const PermissionsService: IPermissionsService = {
  /**
   * @returns {Promise <number>}
   * @memberof PermissionsService
   */
  async countAll(): Promise<number> {
    try {
      return await PermissionsModel.countDocuments({});
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
      return await PermissionsModel.countDocuments(query);
    } catch (error) {
      throw new Error(error.message);
    }
  },
  /**
   * @returns {Promise < IPermissionsModel[] >}
   * @memberof PermissionsService
   */
  async findAll(
    pageNo: number,
    pageSize: number
  ): Promise<IPermissionsModel[]> {
    try {
      const skip = pageNo * pageSize;
      return await PermissionsModel.find({}).skip(skip).limit(pageSize);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * @param {ISearchParamRequest} searchParam
   * @returns {Promise <IPermissionsModel[]>}
   * @memberof PermissionsService
   */
  async search(
    body: ISearchParamRequest,
    pageNo: number,
    pageSize: number
  ): Promise<IPermissionsModel[]> {
    try {
      const validate: Joi.ValidationResult<ISearchParamRequest> =
        PermissionsValidation.searchParams(body);
      if (validate.error) {
        throw new Error(validate.error.message);
      }
      const skip = pageNo * pageSize;
      const query = GetSearchQuery(body);
      return await PermissionsModel.find(query).skip(skip).limit(pageSize);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * @param {string} id
   * @returns {Promise < IPermissionsModel >}
   * @memberof PermissionsService
   */
  async findOne(id: string): Promise<IPermissionsModel> {
    try {
      const validate: Joi.ValidationResult<{
        id: string;
      }> = PermissionsValidation.getPermissions({
        id,
      });

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      return await PermissionsModel.findOne({
        _id: Types.ObjectId(id),
      });
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * @param {IPermissionsModel} permissions
   * @returns {Promise < IPermissionsModel >}
   * @memberof PermissionsService
   */
  async insert(body: IPermissionsModel): Promise<IPermissionsModel> {
    try {
      const validate: Joi.ValidationResult<IPermissionsModel> =
        PermissionsValidation.createPermissions(body);

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      const permissions: IPermissionsModel = await PermissionsModel.create(
        body
      );

      return permissions;
    } catch (error) {
      //throw new Error(error.message);
      throw new Error(error);
    }
  },

  /**
   * @param {string} id
   * @param {IPermissionsModel} permissions
   * @returns {Promise < IPermissionsModel >}
   * @memberof PermissionsService
   */
  async update(id: string, body: IPermissionsModel): Promise<Number> {
    try {
      const validate: Joi.ValidationResult<IPermissionsModel> =
        PermissionsValidation.updatePermissions(body);

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      const permissions = await PermissionsModel.updateOne(
        { _id: Types.ObjectId(id) },
        { $set: body }
      );

      return permissions.nModified;
    } catch (error) {
      //throw new Error(error.message);
      throw new Error(error);
    }
  },

  /**
   * @param {string} id
   * @returns {Promise < IPermissionsModel >}
   * @memberof PermissionsService
   */
  async remove(id: string): Promise<IPermissionsModel> {
    try {
      const validate: Joi.ValidationResult<{
        id: string;
      }> = PermissionsValidation.removePermissions({
        id,
      });

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      const permissions: IPermissionsModel =
        await PermissionsModel.findOneAndRemove({
          _id: Types.ObjectId(id),
        });

      return permissions;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default PermissionsService;
