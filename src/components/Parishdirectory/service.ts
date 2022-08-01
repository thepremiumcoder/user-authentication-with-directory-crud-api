import * as Joi from "@hapi/joi";
import ParishdirectoryModel, { IParishdirectoryModel } from "./model";
import ParishdirectoryValidation from "./validation";
import { IParishdirectoryService } from "./interface";
import { Types } from "mongoose";
import { GetSearchQuery, ISearchParamRequest } from "@/utils/SearchHelper";

/**
 * @export
 * @implements {IParishdirectoryModelService}
 */
const ParishdirectoryService: IParishdirectoryService = {
  /**
   * @returns {Promise <number>}
   * @memberof ParishdirectoryService
   */
  async countAll(): Promise<number> {
    try {
      return await ParishdirectoryModel.countDocuments({});
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
      return await ParishdirectoryModel.countDocuments(query);
    } catch (error) {
      throw new Error(error.message);
    }
  },
  /**
   * @returns {Promise < IParishdirectoryModel[] >}
   * @memberof ParishdirectoryService
   */
  async findAll(
    pageNo: number,
    pageSize: number
  ): Promise<IParishdirectoryModel[]> {
    try {
      const skip = pageNo * pageSize;
      return await ParishdirectoryModel.find({}).skip(skip).limit(pageSize);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * @param {ISearchParamRequest} searchParam
   * @returns {Promise <IParishdirectoryModel[]>}
   * @memberof ParishdirectoryService
   */
  async search(
    body: ISearchParamRequest,
    pageNo: number,
    pageSize: number
  ): Promise<IParishdirectoryModel[]> {
    try {
      const validate: Joi.ValidationResult<ISearchParamRequest> =
        ParishdirectoryValidation.searchParams(body);
      if (validate.error) {
        throw new Error(validate.error.message);
      }
      const skip = pageNo * pageSize;
      const query = GetSearchQuery(body);
      return await ParishdirectoryModel.find(query).skip(skip).limit(pageSize);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * @param {string} id
   * @returns {Promise < IParishdirectoryModel >}
   * @memberof ParishdirectoryService
   */
  async findOne(id: string): Promise<IParishdirectoryModel> {
    try {
      const validate: Joi.ValidationResult<{
        id: string;
      }> = ParishdirectoryValidation.getParishdirectory({
        id,
      });

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      return await ParishdirectoryModel.findOne({
        _id: Types.ObjectId(id),
      });
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * @param {IParishdirectoryModel} parishDirectory
   * @returns {Promise < IParishdirectoryModel >}
   * @memberof ParishdirectoryService
   */
  async insert(body: IParishdirectoryModel): Promise<IParishdirectoryModel> {
    try {
      const validate: Joi.ValidationResult<IParishdirectoryModel> =
        ParishdirectoryValidation.createParishdirectory(body);

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      const parishDirectory: IParishdirectoryModel =
        await ParishdirectoryModel.create(body);

      return parishDirectory;
    } catch (error) {
      //throw new Error(error.message);
      throw new Error(error);
    }
  },

  /**
   * @param {string} id
   * @param {IParishdirectoryModel} parishDirectory
   * @returns {Promise < IParishdirectoryModel >}
   * @memberof ParishdirectoryService
   */
  async update(id: string, body: IParishdirectoryModel): Promise<Number> {
    try {
      const validate: Joi.ValidationResult<IParishdirectoryModel> =
        ParishdirectoryValidation.updateParishdirectory(body);

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      const parishDirectory = await ParishdirectoryModel.updateOne(
        { _id: Types.ObjectId(id) },
        { $set: body }
      );

      return parishDirectory.nModified;
    } catch (error) {
      //throw new Error(error.message);
      throw new Error(error);
    }
  },

  /**
   * @param {string} id
   * @returns {Promise < IParishdirectoryModel >}
   * @memberof ParishdirectoryService
   */
  async remove(id: string): Promise<IParishdirectoryModel> {
    try {
      const validate: Joi.ValidationResult<{
        id: string;
      }> = ParishdirectoryValidation.removeParishdirectory({
        id,
      });

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      const parishDirectory: IParishdirectoryModel =
        await ParishdirectoryModel.findOneAndRemove({
          _id: Types.ObjectId(id),
        });

      return parishDirectory;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default ParishdirectoryService;
