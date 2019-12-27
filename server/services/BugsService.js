import mongoose from "mongoose";
import Bug from "../models/Bug";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Bug", Bug);

class BugsService {
  async getAll() {
    return await _repository.find({});
  }
  async getBugById(id) {
    let data = await _repository.findById(id);
    if (!data) {
      throw new ApiError("Invalid Bug Id", 400);
    }
    return data;
  }
  async createBug(rawData) {
    let data = await _repository.create(rawData);
    return data;
  }
  async editBug(id, update) {
    let data = await _repository.findOneAndUpdate(
      { _id: id, closed: false },
      update,
      {
        new: true
      }
    );
    if (!data) {
      throw new ApiError("Invalid ID", 404);
    }
    return data;
  }
  async deleteBug(id) {
    let data = await _repository.findOneAndUpdate(
      { _id: id },
      { closed: true }
    );
    if (!data) {
      throw new ApiError("Invalid Bug ID to Delete", 400);
    }
  }
}

const bugsService = new BugsService();
export default bugsService;
