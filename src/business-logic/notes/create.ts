import { Collection, getModel } from "constant-definitions";
import { Note, NoteSchemaMongo, Result } from "types";

/**
 * Create a new note in the database.
 * @param data The note data to create..
 * @returns A Promise that resolves with the created note..
 */
export const createNote = async (
  data: Note
): Promise<Note | Error> => {
  const model = getModel<Note>(Collection.NOTES, NoteSchemaMongo);
  const note = new model(data);
  
  if (!note) throw new Error("Could not create note");
  
  const noteCreated = await note.save();
  return noteCreated;
};
