import mongoose from "mongoose";
import Value from "../models/Value";

const _repository = mongoose.model("Value", Value);

class NotesService {
  async getAll() {
    return await _repository.find({});
  }
}

const notesService = new NotesService();
export default notesService;
