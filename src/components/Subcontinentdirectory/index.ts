import SubcontinentdirectoryService from "./service";
import { HttpError } from "@/config/error";
import { ISubcontinentdirectoryModel } from "./model";
import { NextFunction, Response } from "express";
import { RequestWithUser } from "@/config/server";

/**
 * @export
 * @param {RequestWithUser} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise <void>}
 */
export async function findAll(
  req: RequestWithUser,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const pageNo = req.query.pageNo
      ? parseInt(req.query.pageNo.toString()) - 1
      : 0;
    const pageSize = req.query.pageSize
      ? parseInt(req.query.pageSize.toString())
      : 20;
    const subContinentDirectory: ISubcontinentdirectoryModel[] =
      await SubcontinentdirectoryService.findAll(pageNo, pageSize);
    const totalCount = await SubcontinentdirectoryService.countAll();
    res.status(200).json({
      totalCount: totalCount,
      records: subContinentDirectory,
      pageNo: pageNo + 1,
      pageSize: pageSize,
    });
  } catch (error) {
    next(new HttpError(error.message.status, error.message));
  }
}

/**
 * @export
 * @param {RequestWithUser} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise <void>}
 */
export async function search(
  req: RequestWithUser,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const pageNo = req.query.pageNo
      ? parseInt(req.query.pageNo.toString()) - 1
      : 0;
    const pageSize = req.query.pageSize
      ? parseInt(req.query.pageSize.toString())
      : 20;
    const subContinentDirectory: ISubcontinentdirectoryModel[] =
      await SubcontinentdirectoryService.search(req.body, pageNo, pageSize);
    const totalCount = await SubcontinentdirectoryService.countSearch(req.body);
    res.status(201).json({
      totalCount: totalCount,
      records: subContinentDirectory,
      pageNo: pageNo,
      pageSize: pageSize,
    });
  } catch (error) {
    next(new HttpError(error.message.status, error.message));
  }
}
/**
 * @export
 * @param {RequestWithUser} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise <void>}
 */
export async function findOne(
  req: RequestWithUser,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const subContinentDirectory: ISubcontinentdirectoryModel =
      await SubcontinentdirectoryService.findOne(req.params.id);

    res.status(200).json(subContinentDirectory);
  } catch (error) {
    next(new HttpError(error.message.status, error.message));
  }
}

/**
 * @export
 * @param {RequestWithUser} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise <void>}
 */
export async function create(
  req: RequestWithUser,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const subContinentDirectory: ISubcontinentdirectoryModel =
      await SubcontinentdirectoryService.insert(req.body);

    res.status(201).json(subContinentDirectory);
  } catch (error) {
    next(new HttpError(error.message.status, error.message));
  }
}

/**
 * @export
 * @param {RequestWithUser} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise <void>}
 */
export async function update(
  req: RequestWithUser,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const subContinentDirectory = await SubcontinentdirectoryService.update(
      req.params.id,
      req.body
    );
    if (subContinentDirectory > 0) {
      res.status(200).json("Updated successfully");
    } else {
      res.status(400).json("Failed to update");
    }
  } catch (error) {
    next(new HttpError(error.message.status, error.message));
  }
}

/**
 * @export
 * @param {RequestWithUser} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise <void>}
 */
export async function remove(
  req: RequestWithUser,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const subContinentDirectory: ISubcontinentdirectoryModel =
      await SubcontinentdirectoryService.remove(req.params.id);

    res.status(200).json(subContinentDirectory);
  } catch (error) {
    next(new HttpError(error.message.status, error.message));
  }
}
