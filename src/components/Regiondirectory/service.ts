import * as Joi from "@hapi/joi";
import RegiondirectoryModel, { IRegiondirectoryModel } from "./model";
import RegiondirectoryValidation from "./validation";
import { IRegiondirectoryService } from "./interface";
import { Types } from "mongoose";
import { GetSearchQuery, ISearchParamRequest } from "@/utils/SearchHelper";

/**
 * @export
 * @implements {IRegiondirectoryModelService}
 */
const RegiondirectoryService: IRegiondirectoryService = {
  /**
   * @returns {Promise <number>}
   * @memberof RegiondirectoryService
   */
  async countAll(): Promise<number> {
    try {
      return await RegiondirectoryModel.countDocuments({});
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
      return await RegiondirectoryModel.countDocuments(query);
    } catch (error) {
      throw new Error(error.message);
    }
  },
  /**
   * @returns {Promise < IRegiondirectoryModel[] >}
   * @memberof RegiondirectoryService
   */
  async findAll(
    pageNo: number,
    pageSize: number
  ): Promise<IRegiondirectoryModel[]> {
    try {
      const skip = pageNo * pageSize;
      return await RegiondirectoryModel.find({}).skip(skip).limit(pageSize);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * @param {ISearchParamRequest} searchParam
   * @returns {Promise <IRegiondirectoryModel[]>}
   * @memberof RegiondirectoryService
   */
  async search(
    body: ISearchParamRequest,
    pageNo: number,
    pageSize: number
  ): Promise<IRegiondirectoryModel[]> {
    try {
      const validate: Joi.ValidationResult<ISearchParamRequest> =
        RegiondirectoryValidation.searchParams(body);
      if (validate.error) {
        throw new Error(validate.error.message);
      }
      const skip = pageNo * pageSize;
      const query = GetSearchQuery(body);
      return await RegiondirectoryModel.find(query).skip(skip).limit(pageSize);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * @param {string} id
   * @returns {Promise < IRegiondirectoryModel >}
   * @memberof RegiondirectoryService
   */
  async findOne(id: string): Promise<IRegiondirectoryModel> {
    try {
      const validate: Joi.ValidationResult<{
        id: string;
      }> = RegiondirectoryValidation.getRegiondirectory({
        id,
      });

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      return await RegiondirectoryModel.findOne({
        _id: Types.ObjectId(id),
      });
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * @param {IRegiondirectoryModel} regionDirectory
   * @returns {Promise < IRegiondirectoryModel >}
   * @memberof RegiondirectoryService
   */
  async insert(body: IRegiondirectoryModel): Promise<IRegiondirectoryModel> {
    try {
      const validate: Joi.ValidationResult<IRegiondirectoryModel> =
        RegiondirectoryValidation.createRegiondirectory(body);

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      const regionDirectory: IRegiondirectoryModel =
        await RegiondirectoryModel.create(body);

      return regionDirectory;
    } catch (error) {
      //throw new Error(error.message);
      throw new Error(error);
    }
  },

  /**
   * @param {string} id
   * @param {IRegiondirectoryModel} regionDirectory
   * @returns {Promise < IRegiondirectoryModel >}
   * @memberof RegiondirectoryService
   */
  async update(id: string, body: IRegiondirectoryModel): Promise<Number> {
    try {
      const validate: Joi.ValidationResult<IRegiondirectoryModel> =
        RegiondirectoryValidation.updateRegiondirectory(body);

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      const regionDirectory = await RegiondirectoryModel.updateOne(
        { _id: Types.ObjectId(id) },
        { $set: body }
      );

      return regionDirectory.nModified;
    } catch (error) {
      //throw new Error(error.message);
      throw new Error(error);
    }
  },

  /**
   * @param {string} id
   * @returns {Promise < IRegiondirectoryModel >}
   * @memberof RegiondirectoryService
   */
  async remove(id: string): Promise<IRegiondirectoryModel> {
    try {
      const validate: Joi.ValidationResult<{
        id: string;
      }> = RegiondirectoryValidation.removeRegiondirectory({
        id,
      });

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      const regionDirectory: IRegiondirectoryModel =
        await RegiondirectoryModel.findOneAndRemove({
          _id: Types.ObjectId(id),
        });

      return regionDirectory;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default RegiondirectoryService;
