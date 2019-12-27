import mongoose from "mongoose";
// TODO Need to make a jobs model that I can import into this service
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Job", Job);

class JobsService {
  async getAll() {
    return await _repository.find({});
  }
  async getJobById(id) {
    let data = await _repository.findById(id);
    if (!data) {
      throw new ApiError("Invalid Job Id", 400);
    }
    return data;
  }
  async createJob(rawData) {
    let data = await _repository.create(rawData);
    return data;
  }
  async editJob(id, update) {
    let data = await _repository.findByIdAndUpdate({ _id: id }, update, {
      new: true
    });
    if (!data) {
      throw new ApiError("Invalid Job ID To Update", 400);
    }
    return data;
  }
  async deleteJob(id) {
    let data = await _repository.findByIdAndDelete({ _id: id });
    if (!data) {
      throw new ApiError("Invalid Job ID to Delete", 400);
    }
  }
}

const jobsService = new JobsService();
export default jobsService;
