import * as Joi from "@hapi/joi";
import SubcontinentdirectoryModel, {
  ISubcontinentdirectoryModel,
} from "./model";
import SubcontinentdirectoryValidation from "./validation";
import { ISubcontinentdirectoryService } from "./interface";
import { Types } from "mongoose";
import { GetSearchQuery, ISearchParamRequest } from "@/utils/SearchHelper";

/**
 * @export
 * @implements {ISubcontinentdirectoryModelService}
 */
const SubcontinentdirectoryService: ISubcontinentdirectoryService = {
  /**
   * @returns {Promise <number>}
   * @memberof SubcontinentdirectoryService
   */
  async countAll(): Promise<number> {
    try {
      return await SubcontinentdirectoryModel.countDocuments({});
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
      return await SubcontinentdirectoryModel.countDocuments(query);
    } catch (error) {
      throw new Error(error.message);
    }
  },
  /**
   * @returns {Promise < ISubcontinentdirectoryModel[] >}
   * @memberof SubcontinentdirectoryService
   */
  async findAll(
    pageNo: number,
    pageSize: number
  ): Promise<ISubcontinentdirectoryModel[]> {
    try {
      const skip = pageNo * pageSize;
      return await SubcontinentdirectoryModel.find({})
        .skip(skip)
        .limit(pageSize);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * @param {ISearchParamRequest} searchParam
   * @returns {Promise <ISubcontinentdirectoryModel[]>}
   * @memberof SubcontinentdirectoryService
   */
  async search(
    body: ISearchParamRequest,
    pageNo: number,
    pageSize: number
  ): Promise<ISubcontinentdirectoryModel[]> {
    try {
      const validate: Joi.ValidationResult<ISearchParamRequest> =
        SubcontinentdirectoryValidation.searchParams(body);
      if (validate.error) {
        throw new Error(validate.error.message);
      }
      const skip = pageNo * pageSize;
      const query = GetSearchQuery(body);
      return await SubcontinentdirectoryModel.find(query)
        .skip(skip)
        .limit(pageSize);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * @param {string} id
   * @returns {Promise < ISubcontinentdirectoryModel >}
   * @memberof SubcontinentdirectoryService
   */
  async findOne(id: string): Promise<ISubcontinentdirectoryModel> {
    try {
      const validate: Joi.ValidationResult<{
        id: string;
      }> = SubcontinentdirectoryValidation.getSubcontinentdirectory({
        id,
      });

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      return await SubcontinentdirectoryModel.findOne({
        _id: Types.ObjectId(id),
      });
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * @param {ISubcontinentdirectoryModel} subContinentDirectory
   * @returns {Promise < ISubcontinentdirectoryModel >}
   * @memberof SubcontinentdirectoryService
   */
  async insert(
    body: ISubcontinentdirectoryModel
  ): Promise<ISubcontinentdirectoryModel> {
    try {
      const validate: Joi.ValidationResult<ISubcontinentdirectoryModel> =
        SubcontinentdirectoryValidation.createSubcontinentdirectory(body);

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      const subContinentDirectory: ISubcontinentdirectoryModel =
        await SubcontinentdirectoryModel.create(body);

      return subContinentDirectory;
    } catch (error) {
      //throw new Error(error.message);
      throw new Error(error);
    }
  },

  /**
   * @param {string} id
   * @param {ISubcontinentdirectoryModel} subContinentDirectory
   * @returns {Promise < ISubcontinentdirectoryModel >}
   * @memberof SubcontinentdirectoryService
   */
  async update(id: string, body: ISubcontinentdirectoryModel): Promise<Number> {
    try {
      const validate: Joi.ValidationResult<ISubcontinentdirectoryModel> =
        SubcontinentdirectoryValidation.updateSubcontinentdirectory(body);

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      const subContinentDirectory = await SubcontinentdirectoryModel.updateOne(
        { _id: Types.ObjectId(id) },
        { $set: body }
      );

      return subContinentDirectory.nModified;
    } catch (error) {
      //throw new Error(error.message);
      throw new Error(error);
    }
  },

  /**
   * @param {string} id
   * @returns {Promise < ISubcontinentdirectoryModel >}
   * @memberof SubcontinentdirectoryService
   */
  async remove(id: string): Promise<ISubcontinentdirectoryModel> {
    try {
      const validate: Joi.ValidationResult<{
        id: string;
      }> = SubcontinentdirectoryValidation.removeSubcontinentdirectory({
        id,
      });

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      const subContinentDirectory: ISubcontinentdirectoryModel =
        await SubcontinentdirectoryModel.findOneAndRemove({
          _id: Types.ObjectId(id),
        });

      return subContinentDirectory;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default SubcontinentdirectoryService;
