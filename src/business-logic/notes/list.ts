import { Collection, getModel } from "constant-definitions";
import { Note, NoteSchemaMongo, Result } from "types";
import { StatusType } from '../../types/common/constants';

/**
 * Return an list paginated of computers.
 * @param page Consult the page number by default (1).
 * @param limit Number of elements per page by defualt (14).
 * @returns A promise that resolve with a object `Result<Computer>` that container paginated element list.
 */
export const getAllNotes = async (
  page: number,
  limit: number
): Promise<Result<Note>> => {
  const model = getModel<Note>(Collection.NOTES, NoteSchemaMongo);

  const actualPage = page || 1;
  const pageSize = limit || 14;
  const skip = (actualPage - 1) * pageSize;
  const total = await model.countDocuments();

  const pages = Math.ceil(total / pageSize);

  const notes = await model
    .find({ $and: [{ status: StatusType.ACTIVE }] })
    .skip(skip)
    .limit(pageSize);

  const hasPreviousPage = page > 1;
  const previousPage = hasPreviousPage ? page - 1 : page;
  const hasNextPage = page < pageSize;
  const nextPage = hasNextPage ? page + 1 : page;

  return {
    count: notes.length,
    items: notes,
    pageInfo: {
      page: actualPage,
      pages,
      hasPreviousPage,
      hasNextPage,
      nextPage,
      previousPage,
    },
  };
};
