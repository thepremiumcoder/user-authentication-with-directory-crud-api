import * as Joi from "@hapi/joi";
import Validation from "@/components/validation";
import { ISubcontinentdirectoryModel } from "./model";
import { ISearchParamRequest } from "@/utils/SearchHelper";
/**
 * @export
 * @class SubcontinentdirectoryValidation
 * @extends Validation
 */
class SubcontinentdirectoryValidation extends Validation {
  /**
   * Creates an instance of SubcontinentdirectoryValidation.
   * @memberof SubcontinentdirectoryValidation
   */
  constructor() {
    super();
  }

  /**
   * @param {ISubcontinentdirectoryModel} params
   * @returns {Joi.ValidationResult<ISubcontinentdirectoryModel >}
   * @memberof SubcontinentdirectoryValidation
   */
  createSubcontinentdirectory(
    params: ISubcontinentdirectoryModel
  ): Joi.ValidationResult<ISubcontinentdirectoryModel> {
    const schema: Joi.ObjectSchema = Joi.object().keys({
      sn: Joi.string(),
      subContinentName: Joi.string(),
      subContinentAlias: Joi.string(),
      subContinentCode: Joi.string(),
      continentName: Joi.string(),
      continentCode: Joi.string(),
      chq: Joi.number(),
      status: Joi.number(),
      hierachy: Joi.string(),
      hierachyCode: Joi.number(),
      address: Joi.string(),
      city: Joi.string(),
      state: Joi.string(),
      country: Joi.string(),
      postalCode: Joi.string(),
      stateCounty: Joi.string(),
      landmark: Joi.string(),
      currency: Joi.string(),
      language: Joi.string(),
      subContinentOverseer: Joi.string(),
      subContinentOverseerEmail: Joi.string(),
      subContinentOverseerPhone: Joi.string(),
      regional_pastor: Joi.string(),
      rgEmail: Joi.string(),
      rgPhone: Joi.string(),
      assistantSubContinentOverseer: Joi.string(),
      ascoEmail: Joi.string(),
      ascoPhone: Joi.string(),
      deputySubContinentOverseer: Joi.string(),
      dscoPhone: Joi.string(),
      dscoEmail: Joi.string(),
      specialAsstAsco: Joi.string(),
      specialAsstAscoEmail: Joi.string(),
      specialAsstAscoPhone: Joi.string(),
      deletedAt: Joi.string(),
    });

    return schema.validate(params);
  }

  /**
   * @param {{ id: string }} body
   * @param {ISubcontinentdirectoryModel} params
   * @returns {Joi.ValidationResult<ISubcontinentdirectoryModel >}
   * @memberof SubcontinentdirectoryValidation
   */
  updateSubcontinentdirectory(
    params: ISubcontinentdirectoryModel
  ): Joi.ValidationResult<ISubcontinentdirectoryModel> {
    const schema: Joi.ObjectSchema = Joi.object().keys({
      sn: Joi.string(),
      subContinentName: Joi.string(),
      subContinentAlias: Joi.string(),
      subContinentCode: Joi.string(),
      continentName: Joi.string(),
      continentCode: Joi.string(),
      chq: Joi.number(),
      status: Joi.number(),
      hierachy: Joi.string(),
      hierachyCode: Joi.number(),
      address: Joi.string(),
      city: Joi.string(),
      state: Joi.string(),
      country: Joi.string(),
      postalCode: Joi.string(),
      stateCounty: Joi.string(),
      landmark: Joi.string(),
      currency: Joi.string(),
      language: Joi.string(),
      subContinentOverseer: Joi.string(),
      subContinentOverseerEmail: Joi.string(),
      subContinentOverseerPhone: Joi.string(),
      regional_pastor: Joi.string(),
      rgEmail: Joi.string(),
      rgPhone: Joi.string(),
      assistantSubContinentOverseer: Joi.string(),
      ascoEmail: Joi.string(),
      ascoPhone: Joi.string(),
      deputySubContinentOverseer: Joi.string(),
      dscoPhone: Joi.string(),
      dscoEmail: Joi.string(),
      specialAsstAsco: Joi.string(),
      specialAsstAscoEmail: Joi.string(),
      specialAsstAscoPhone: Joi.string(),
      deletedAt: Joi.string(),
    });

    return schema.validate(params);
  }

  /**
   * @param {ISearchParamRequest} params
   * @returns {Joi.ValidationResult<ISearchParamRequest >}
   * @memberof SubcontinentdirectoryValidation
   */
  searchParams(
    params: ISearchParamRequest
  ): Joi.ValidationResult<ISearchParamRequest> {
    const schema: Joi.ObjectSchema = Joi.object().keys({
      orAnd: Joi.string().required(),
      params: Joi.array().required(),
    });

    return schema.validate(params);
  }

  /**
   * @param {{ id: string }} body
   * @returns {Joi.ValidationResult<{ id: string }>}
   * @memberof SubcontinentdirectoryValidation
   */
  getSubcontinentdirectory(body: { id: string }): Joi.ValidationResult<{
    id: string;
  }> {
    const schema: Joi.ObjectSchema = Joi.object().keys({
      id: this.customJoi.objectId().required(),
    });

    return schema.validate(body);
  }

  /**
   * @param {{ id: string }} body
   * @returns {Joi.ValidationResult<{ id: string }>}
   * @memberof SubcontinentdirectoryValidation
   */
  removeSubcontinentdirectory(body: { id: string }): Joi.ValidationResult<{
    id: string;
  }> {
    const schema: Joi.ObjectSchema = Joi.object().keys({
      id: this.customJoi.objectId().required(),
    });

    return schema.validate(body);
  }
}

export default new SubcontinentdirectoryValidation();
