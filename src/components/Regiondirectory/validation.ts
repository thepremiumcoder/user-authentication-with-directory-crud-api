import * as Joi from "@hapi/joi";
import Validation from "@/components/validation";
import { IRegiondirectoryModel } from "./model";
import { ISearchParamRequest } from "@/utils/SearchHelper";
/**
 * @export
 * @class RegiondirectoryValidation
 * @extends Validation
 */
class RegiondirectoryValidation extends Validation {
  /**
   * Creates an instance of RegiondirectoryValidation.
   * @memberof RegiondirectoryValidation
   */
  constructor() {
    super();
  }

  /**
   * @param {IRegiondirectoryModel} params
   * @returns {Joi.ValidationResult<IRegiondirectoryModel >}
   * @memberof RegiondirectoryValidation
   */
  createRegiondirectory(
    params: IRegiondirectoryModel
  ): Joi.ValidationResult<IRegiondirectoryModel> {
    const schema: Joi.ObjectSchema = Joi.object().keys({
      sn: Joi.string(),
      regionName: Joi.string(),
      regionAlias: Joi.string(),
      regionCode: Joi.string(),
      subContinentName: Joi.string(),
      subContinentCode: Joi.string(),
      continentName: Joi.string(),
      continentCode: Joi.string(),
      hierachy: Joi.string(),
      hierachyCode: Joi.number(),
      schq: Joi.number(),
      chq: Joi.number(),
      status: Joi.number(),
      address: Joi.string(),
      city: Joi.string(),
      state: Joi.string(),
      country: Joi.string(),
      postalCode: Joi.string(),
      stateCounty: Joi.string(),
      landmark: Joi.string(),
      regionPhoneNumner: Joi.string(),
      regionEmail: Joi.string(),
      currency: Joi.string(),
      language: Joi.string(),
      isYouthRegion: Joi.number(),
      picRegionName: Joi.string(),
      picRegionPhone: Joi.string(),
      picRegionEmail: Joi.string(),
      apicrAdminName: Joi.string(),
      apicrAdminPhone: Joi.string(),
      apicrAdminEmail: Joi.string(),
      apicrCsrName: Joi.string(),
      apicrCsrPhone: Joi.string(),
      apicrCsrEmail: Joi.string(),
      regionAdminOfficerName: Joi.string(),
      regionAdminOfficerPhone: Joi.string(),
      regionAdminOfficerEmail: Joi.string(),
      regionAssistantAdminOfficerName: Joi.string(),
      regionAssistantAdminOfficerPhone: Joi.string(),
      regionAssistantAdminOfficerEmail: Joi.string(),
      regionAccountantName: Joi.string(),
      regionAccountantPhone: Joi.string(),
      regionAccountantEmail: Joi.string(),
      regionAssistantAccountantName: Joi.string(),
      regionAssistantAccountantPhone: Joi.string(),
      regionAssistantAccountantEmail: Joi.string(),
      regionBankName: Joi.string(),
      regionAccountNo: Joi.number(),
      regionAccountName: Joi.string(),
      deletedAt: Joi.string(),
    });

    return schema.validate(params);
  }

  /**
   * @param {{ id: string }} body
   * @param {IRegiondirectoryModel} params
   * @returns {Joi.ValidationResult<IRegiondirectoryModel >}
   * @memberof RegiondirectoryValidation
   */
  updateRegiondirectory(
    params: IRegiondirectoryModel
  ): Joi.ValidationResult<IRegiondirectoryModel> {
    const schema: Joi.ObjectSchema = Joi.object().keys({
      sn: Joi.string(),
      regionName: Joi.string(),
      regionAlias: Joi.string(),
      regionCode: Joi.string(),
      subContinentName: Joi.string(),
      subContinentCode: Joi.string(),
      continentName: Joi.string(),
      continentCode: Joi.string(),
      hierachy: Joi.string(),
      hierachyCode: Joi.number(),
      schq: Joi.number(),
      chq: Joi.number(),
      status: Joi.number(),
      address: Joi.string(),
      city: Joi.string(),
      state: Joi.string(),
      country: Joi.string(),
      postalCode: Joi.string(),
      stateCounty: Joi.string(),
      landmark: Joi.string(),
      regionPhoneNumner: Joi.string(),
      regionEmail: Joi.string(),
      currency: Joi.string(),
      language: Joi.string(),
      isYouthRegion: Joi.number(),
      picRegionName: Joi.string(),
      picRegionPhone: Joi.string(),
      picRegionEmail: Joi.string(),
      apicrAdminName: Joi.string(),
      apicrAdminPhone: Joi.string(),
      apicrAdminEmail: Joi.string(),
      apicrCsrName: Joi.string(),
      apicrCsrPhone: Joi.string(),
      apicrCsrEmail: Joi.string(),
      regionAdminOfficerName: Joi.string(),
      regionAdminOfficerPhone: Joi.string(),
      regionAdminOfficerEmail: Joi.string(),
      regionAssistantAdminOfficerName: Joi.string(),
      regionAssistantAdminOfficerPhone: Joi.string(),
      regionAssistantAdminOfficerEmail: Joi.string(),
      regionAccountantName: Joi.string(),
      regionAccountantPhone: Joi.string(),
      regionAccountantEmail: Joi.string(),
      regionAssistantAccountantName: Joi.string(),
      regionAssistantAccountantPhone: Joi.string(),
      regionAssistantAccountantEmail: Joi.string(),
      regionBankName: Joi.string(),
      regionAccountNo: Joi.number(),
      regionAccountName: Joi.string(),
      deletedAt: Joi.string(),
    });

    return schema.validate(params);
  }

  /**
   * @param {ISearchParamRequest} params
   * @returns {Joi.ValidationResult<ISearchParamRequest >}
   * @memberof RegiondirectoryValidation
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
   * @memberof RegiondirectoryValidation
   */
  getRegiondirectory(body: { id: string }): Joi.ValidationResult<{
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
   * @memberof RegiondirectoryValidation
   */
  removeRegiondirectory(body: { id: string }): Joi.ValidationResult<{
    id: string;
  }> {
    const schema: Joi.ObjectSchema = Joi.object().keys({
      id: this.customJoi.objectId().required(),
    });

    return schema.validate(body);
  }
}

export default new RegiondirectoryValidation();
