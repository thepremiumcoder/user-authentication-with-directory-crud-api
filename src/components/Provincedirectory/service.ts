import * as Joi from "@hapi/joi";
import ProvincedirectoryModel, { IProvincedirectoryModel } from "./model";
import ProvincedirectoryValidation from "./validation";
import { IProvincedirectoryService } from "./interface";
import { Types } from "mongoose";
import { GetSearchQuery, ISearchParamRequest } from "@/utils/SearchHelper";

/**
 * @export
 * @implements {IProvincedirectoryModelService}
 */
const ProvincedirectoryService: IProvincedirectoryService = {
  /**
   * @returns {Promise <number>}
   * @memberof ProvincedirectoryService
   */
  async countAll(): Promise<number> {
    try {
      return await ProvincedirectoryModel.countDocuments({});
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
      return await ProvincedirectoryModel.countDocuments(query);
    } catch (error) {
      throw new Error(error.message);
    }
  },
  /**
   * @returns {Promise < IProvincedirectoryModel[] >}
   * @memberof ProvincedirectoryService
   */
  async findAll(
    pageNo: number,
    pageSize: number
  ): Promise<IProvincedirectoryModel[]> {
    try {
      const skip = pageNo * pageSize;
      return await ProvincedirectoryModel.find({}).skip(skip).limit(pageSize);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * @param {ISearchParamRequest} searchParam
   * @returns {Promise <IProvincedirectoryModel[]>}
   * @memberof ProvincedirectoryService
   */
  async search(
    body: ISearchParamRequest,
    pageNo: number,
    pageSize: number
  ): Promise<IProvincedirectoryModel[]> {
    try {
      const validate: Joi.ValidationResult<ISearchParamRequest> =
        ProvincedirectoryValidation.searchParams(body);
      if (validate.error) {
        throw new Error(validate.error.message);
      }
      const skip = pageNo * pageSize;
      const query = GetSearchQuery(body);
      return await ProvincedirectoryModel.find(query)
        .skip(skip)
        .limit(pageSize);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * @param {string} id
   * @returns {Promise < IProvincedirectoryModel >}
   * @memberof ProvincedirectoryService
   */
  async findOne(id: string): Promise<IProvincedirectoryModel> {
    try {
      const validate: Joi.ValidationResult<{
        id: string;
      }> = ProvincedirectoryValidation.getProvincedirectory({
        id,
      });

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      return await ProvincedirectoryModel.findOne({
        _id: Types.ObjectId(id),
      });
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * @param {IProvincedirectoryModel} provinceDirectory
   * @returns {Promise < IProvincedirectoryModel >}
   * @memberof ProvincedirectoryService
   */
  async insert(
    body: IProvincedirectoryModel
  ): Promise<IProvincedirectoryModel> {
    try {
      const validate: Joi.ValidationResult<IProvincedirectoryModel> =
        ProvincedirectoryValidation.createProvincedirectory(body);

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      const provinceDirectory: IProvincedirectoryModel =
        await ProvincedirectoryModel.create(body);

      return provinceDirectory;
    } catch (error) {
      //throw new Error(error.message);
      throw new Error(error);
    }
  },

  /**
   * @param {string} id
   * @param {IProvincedirectoryModel} provinceDirectory
   * @returns {Promise < IProvincedirectoryModel >}
   * @memberof ProvincedirectoryService
   */
  async update(id: string, body: IProvincedirectoryModel): Promise<Number> {
    try {
      const validate: Joi.ValidationResult<IProvincedirectoryModel> =
        ProvincedirectoryValidation.updateProvincedirectory(body);

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      const provinceDirectory = await ProvincedirectoryModel.updateOne(
        { _id: Types.ObjectId(id) },
        { $set: body }
      );

      return provinceDirectory.nModified;
    } catch (error) {
      //throw new Error(error.message);
      throw new Error(error);
    }
  },

  /**
   * @param {string} id
   * @returns {Promise < IProvincedirectoryModel >}
   * @memberof ProvincedirectoryService
   */
  async remove(id: string): Promise<IProvincedirectoryModel> {
    try {
      const validate: Joi.ValidationResult<{
        id: string;
      }> = ProvincedirectoryValidation.removeProvincedirectory({
        id,
      });

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      const provinceDirectory: IProvincedirectoryModel =
        await ProvincedirectoryModel.findOneAndRemove({
          _id: Types.ObjectId(id),
        });

      return provinceDirectory;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default ProvincedirectoryService;
