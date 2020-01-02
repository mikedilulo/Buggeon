import mongoose from "mongoose";
import Note from "../models/Note";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Note", Note);

class NotesService {
  async getAll() {
    return await _repository.find({});
  }
  async getNotesByBugId(bug) {
    return await _repository.find({ bug });
  }
  async getNoteById(id) {
    let data = await _repository.findById(id);
    if (!data) {
      throw new ApiError("Invalid Note Id", 400);
    }
    return data;
  }
  async createNote(rawData) {
    let data = await _repository.create(rawData);
    return data;
  }
  async editNote(id, update) {
    let data = await _repository.findByIdAndUpdate({ _id: id }, update, {
      new: true
    });
    if (!data) {
      throw new ApiError("Invalid Note ID To Update", 400);
    }
    return data;
  }
  async deleteNote(_id) {
    let data = await _repository.findOneAndDelete(_id);
    if (!data) {
      throw new ApiError("Invalid Note ID to Delete", 400);
    }
  }
}

const notesService = new NotesService();
export default notesService;
