import * as Joi from "@hapi/joi";
import Validation from "@/components/validation";
import { IPermissionsModel } from "./model";
import { ISearchParamRequest } from "@/utils/SearchHelper";
/**
 * @export
 * @class PermissionsValidation
 * @extends Validation
 */
class PermissionsValidation extends Validation {
  /**
   * Creates an instance of PermissionsValidation.
   * @memberof PermissionsValidation
   */
  constructor() {
    super();
  }

  /**
   * @param {IPermissionsModel} params
   * @returns {Joi.ValidationResult<IPermissionsModel >}
   * @memberof PermissionsValidation
   */
  createPermissions(
    params: IPermissionsModel
  ): Joi.ValidationResult<IPermissionsModel> {
    const schema: Joi.ObjectSchema = Joi.object().keys({
      sn: Joi.string(),
      name: Joi.string(),
      slug: Joi.string(),
      guard_name: Joi.string(),
      role: Joi.string(),
      removable: Joi.number(),
      deletedAt: Joi.string(),
    });

    return schema.validate(params);
  }

  /**
   * @param {{ id: string }} body
   * @param {IPermissionsModel} params
   * @returns {Joi.ValidationResult<IPermissionsModel >}
   * @memberof PermissionsValidation
   */
  updatePermissions(
    params: IPermissionsModel
  ): Joi.ValidationResult<IPermissionsModel> {
    const schema: Joi.ObjectSchema = Joi.object().keys({
      sn: Joi.string(),
      name: Joi.string(),
      slug: Joi.string(),
      guard_name: Joi.string(),
      role: Joi.string(),
      removable: Joi.number(),
      deletedAt: Joi.string(),
    });

    return schema.validate(params);
  }

  /**
   * @param {ISearchParamRequest} params
   * @returns {Joi.ValidationResult<ISearchParamRequest >}
   * @memberof PermissionsValidation
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
   * @memberof PermissionsValidation
   */
  getPermissions(body: { id: string }): Joi.ValidationResult<{
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
   * @memberof PermissionsValidation
   */
  removePermissions(body: { id: string }): Joi.ValidationResult<{
    id: string;
  }> {
    const schema: Joi.ObjectSchema = Joi.object().keys({
      id: this.customJoi.objectId().required(),
    });

    return schema.validate(body);
  }
}

export default new PermissionsValidation();
