import express from "express";
import valueService from "../services/ValueService";

export default class BugsController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
      .get("/:id", this.getBugById)
      .get("/:id/notes", this.getNotesByBugId)
      .post("", this.createBug)
      .put("/:id", this.editBug)
      .delete("/:id", this.deleteBug);
  }

  async getAll(req, res, next) {
    try {
      let data = await bugsService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getBugById(req, res, next) {
    try {
      let data = await bugsService.getBugById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getNotesByBugId(req, res, next) {
    try {
      // NOTE req.params.id is what will be passed through when dealing with specific data, i.e. bugs, notes, etc.
      let data = await notesService.getNotesByBugId(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async createBug(req, res, next) {
    try {
      // NOTE req.body is used when creating a new object, such as a bug
      let data = await bugsService.createBug(req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async editBug(req, res, next) {
    try {
      // NOTE When editing a specific object, you will want to pass it the id and the body in the controller
      let data = await bugsService.editBug(req.params.id, req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async deleteBug(req, res, next) {
    try {
      // NOTE Not calling for data here, can just await the service sending it the id
      await bugsService.deleteBug(req.params.id);
      return res.send("Successfully Deleted The Bug");
    } catch (error) {
      next(error);
    }
  }
}
