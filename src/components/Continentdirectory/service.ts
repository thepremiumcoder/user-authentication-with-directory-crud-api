import * as Joi from "@hapi/joi";
import ContinentdirectoryModel, { IContinentdirectoryModel } from "./model";
import ContinentdirectoryValidation from "./validation";
import { IContinentdirectoryService } from "./interface";
import { Types } from "mongoose";
import { GetSearchQuery, ISearchParamRequest } from "@/utils/SearchHelper";

/**
 * @export
 * @implements {IContinentdirectoryModelService}
 */
const ContinentdirectoryService: IContinentdirectoryService = {
  /**
   * @returns {Promise <number>}
   * @memberof ContinentdirectoryService
   */
  async countAll(): Promise<number> {
    try {
      return await ContinentdirectoryModel.countDocuments({});
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
      return await ContinentdirectoryModel.countDocuments(query);
    } catch (error) {
      throw new Error(error.message);
    }
  },
  /**
   * @returns {Promise < IContinentdirectoryModel[] >}
   * @memberof ContinentdirectoryService
   */
  async findAll(
    pageNo: number,
    pageSize: number
  ): Promise<IContinentdirectoryModel[]> {
    try {
      const skip = pageNo * pageSize;
      return await ContinentdirectoryModel.find({}).skip(skip).limit(pageSize);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * @param {ISearchParamRequest} searchParam
   * @returns {Promise <IContinentdirectoryModel[]>}
   * @memberof ContinentdirectoryService
   */
  async search(
    body: ISearchParamRequest,
    pageNo: number,
    pageSize: number
  ): Promise<IContinentdirectoryModel[]> {
    try {
      const validate: Joi.ValidationResult<ISearchParamRequest> =
        ContinentdirectoryValidation.searchParams(body);
      if (validate.error) {
        throw new Error(validate.error.message);
      }
      const skip = pageNo * pageSize;
      const query = GetSearchQuery(body);
      return await ContinentdirectoryModel.find(query)
        .skip(skip)
        .limit(pageSize);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * @param {string} id
   * @returns {Promise < IContinentdirectoryModel >}
   * @memberof ContinentdirectoryService
   */
  async findOne(id: string): Promise<IContinentdirectoryModel> {
    try {
      const validate: Joi.ValidationResult<{
        id: string;
      }> = ContinentdirectoryValidation.getContinentdirectory({
        id,
      });

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      return await ContinentdirectoryModel.findOne({
        _id: Types.ObjectId(id),
      });
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * @param {IContinentdirectoryModel} continentDirectory
   * @returns {Promise < IContinentdirectoryModel >}
   * @memberof ContinentdirectoryService
   */
  async insert(
    body: IContinentdirectoryModel
  ): Promise<IContinentdirectoryModel> {
    try {
      const validate: Joi.ValidationResult<IContinentdirectoryModel> =
        ContinentdirectoryValidation.createContinentdirectory(body);

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      const continentDirectory: IContinentdirectoryModel =
        await ContinentdirectoryModel.create(body);

      return continentDirectory;
    } catch (error) {
      //throw new Error(error.message);
      throw new Error(error);
    }
  },

  /**
   * @param {string} id
   * @param {IContinentdirectoryModel} continentDirectory
   * @returns {Promise < IContinentdirectoryModel >}
   * @memberof ContinentdirectoryService
   */
  async update(id: string, body: IContinentdirectoryModel): Promise<Number> {
    try {
      const validate: Joi.ValidationResult<IContinentdirectoryModel> =
        ContinentdirectoryValidation.updateContinentdirectory(body);

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      const continentDirectory = await ContinentdirectoryModel.updateOne(
        { _id: Types.ObjectId(id) },
        { $set: body }
      );

      return continentDirectory.nModified;
    } catch (error) {
      //throw new Error(error.message);
      throw new Error(error);
    }
  },

  /**
   * @param {string} id
   * @returns {Promise < IContinentdirectoryModel >}
   * @memberof ContinentdirectoryService
   */
  async remove(id: string): Promise<IContinentdirectoryModel> {
    try {
      const validate: Joi.ValidationResult<{
        id: string;
      }> = ContinentdirectoryValidation.removeContinentdirectory({
        id,
      });

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      const continentDirectory: IContinentdirectoryModel =
        await ContinentdirectoryModel.findOneAndRemove({
          _id: Types.ObjectId(id),
        });

      return continentDirectory;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default ContinentdirectoryService;
