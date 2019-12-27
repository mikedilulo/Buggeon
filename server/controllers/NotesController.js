import express from "express";
import valueService from "../services/ValueService";

export default class NotesController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
      .get("/:id", this.getNoteById)
      .post("", this.createNote)
      .put("/:id", this.editNote)
      .delete("/:id", this.deleteNote);
  }

  async getAll(req, res, next) {
    try {
      let data = await notesService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getNoteById(req, res, next) {
    try {
      let data = await notesService.getNoteById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async createNote(req, res, next) {
    try {
      // NOTE req.body is used when creating a new object, such as a bug
      let data = await notesService.createNote(req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async editNote(req, res, next) {
    try {
      // NOTE When editing a specific object, you will want to pass it the id and the body in the controller
      let data = await notesService.editNote(req.params.id, req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async deleteNote(req, res, next) {
    try {
      // NOTE Not calling for data here, can just await the service sending it the id
      await notesService.deleteNote(req.params.id);
      return res.send("Successfully Deleted The Note From The Bug");
    } catch (error) {
      next(error);
    }
  }
}
