import mongoose from "mongoose";
import Value from "../models/Value";

const _repository = mongoose.model("Value", Value);

class JobsService {
  async getAll() {
    return await _repository.find({});
  }
}

const jobsService = new JobsService();
export default jobsService;
