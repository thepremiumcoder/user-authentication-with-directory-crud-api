import * as Joi from "@hapi/joi";
import Validation from "@/components/validation";
import { IContinentdirectoryModel } from "./model";
import { ISearchParamRequest } from "@/utils/SearchHelper";
/**
 * @export
 * @class ContinentdirectoryValidation
 * @extends Validation
 */
class ContinentdirectoryValidation extends Validation {
  /**
   * Creates an instance of ContinentdirectoryValidation.
   * @memberof ContinentdirectoryValidation
   */
  constructor() {
    super();
  }

  /**
   * @param {IContinentdirectoryModel} params
   * @returns {Joi.ValidationResult<IContinentdirectoryModel >}
   * @memberof ContinentdirectoryValidation
   */
  createContinentdirectory(
    params: IContinentdirectoryModel
  ): Joi.ValidationResult<IContinentdirectoryModel> {
    const schema: Joi.ObjectSchema = Joi.object().keys({
      sn: Joi.string(),
      continentName: Joi.string(),
      continentAlias: Joi.string(),
      continentCode: Joi.string(),
      status: Joi.number(),
      hierachy: Joi.string(),
      hierachyCode: Joi.number(),
      address: Joi.string(),
      city: Joi.string(),
      state: Joi.string(),
      country: Joi.string(),
      postalCode: Joi.string(),
      stateCounty: Joi.string(),
      currency: Joi.string(),
      language: Joi.string(),
      continentOverseer: Joi.string(),
      continentOverseerEmail: Joi.string(),
      continentOverseerPhone: Joi.string(),
      regional_pastor: Joi.string(),
      rgEmail: Joi.string(),
      rgPhone: Joi.string(),
      assistantContinentOverseer: Joi.string(),
      acoEmail: Joi.string(),
      acoPhone: Joi.string(),
      deputyContinentOverseer: Joi.string(),
      dcoPhone: Joi.string(),
      dcoEmail: Joi.string(),
      specialAsstAco: Joi.string(),
      specialAsstAcoEmail: Joi.string(),
      specialAsstAcoPhone: Joi.string(),
      deletedAt: Joi.string(),
    });

    return schema.validate(params);
  }

  /**
   * @param {{ id: string }} body
   * @param {IContinentdirectoryModel} params
   * @returns {Joi.ValidationResult<IContinentdirectoryModel >}
   * @memberof ContinentdirectoryValidation
   */
  updateContinentdirectory(
    params: IContinentdirectoryModel
  ): Joi.ValidationResult<IContinentdirectoryModel> {
    const schema: Joi.ObjectSchema = Joi.object().keys({
      sn: Joi.string(),
      continentName: Joi.string(),
      continentAlias: Joi.string(),
      continentCode: Joi.string(),
      status: Joi.number(),
      hierachy: Joi.string(),
      hierachyCode: Joi.number(),
      address: Joi.string(),
      city: Joi.string(),
      state: Joi.string(),
      country: Joi.string(),
      postalCode: Joi.string(),
      stateCounty: Joi.string(),
      currency: Joi.string(),
      language: Joi.string(),
      continentOverseer: Joi.string(),
      continentOverseerEmail: Joi.string(),
      continentOverseerPhone: Joi.string(),
      regional_pastor: Joi.string(),
      rgEmail: Joi.string(),
      rgPhone: Joi.string(),
      assistantContinentOverseer: Joi.string(),
      acoEmail: Joi.string(),
      acoPhone: Joi.string(),
      deputyContinentOverseer: Joi.string(),
      dcoPhone: Joi.string(),
      dcoEmail: Joi.string(),
      specialAsstAco: Joi.string(),
      specialAsstAcoEmail: Joi.string(),
      specialAsstAcoPhone: Joi.string(),
      deletedAt: Joi.string(),
    });

    return schema.validate(params);
  }

  /**
   * @param {ISearchParamRequest} params
   * @returns {Joi.ValidationResult<ISearchParamRequest >}
   * @memberof ContinentdirectoryValidation
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
   * @memberof ContinentdirectoryValidation
   */
  getContinentdirectory(body: { id: string }): Joi.ValidationResult<{
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
   * @memberof ContinentdirectoryValidation
   */
  removeContinentdirectory(body: { id: string }): Joi.ValidationResult<{
    id: string;
  }> {
    const schema: Joi.ObjectSchema = Joi.object().keys({
      id: this.customJoi.objectId().required(),
    });

    return schema.validate(body);
  }
}

export default new ContinentdirectoryValidation();
