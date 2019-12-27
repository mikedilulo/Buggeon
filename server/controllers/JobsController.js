import express from "express";
import valueService from "../services/ValueService";

export default class JobsController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
      .get("/:id", this.getJobById)
      .post("", this.createJob)
      .put("/:id", this.editJob)
      .delete("/:id", this.deleteJob);
  }

  async getAll(req, res, next) {
    try {
      let data = await jobsService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getJobById(req, res, next) {
    try {
      let data = await jobsService.getJobById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async createJob(req, res, next) {
    try {
      // NOTE req.body is used when creating a new object, such as a bug
      let data = await jobsService.createJob(req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async editJob(req, res, next) {
    try {
      // NOTE When editing a specific object, you will want to pass it the id and the body in the controller
      let data = await jobsService.editJob(req.params.id, req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async deleteJob(req, res, next) {
    try {
      // NOTE Not calling for data here, can just await the service sending it the id
      await jobsService.deleteJob(req.params.id);
      return res.send("Successfully Deleted The Job Posting");
    } catch (error) {
      next(error);
    }
  }
}
