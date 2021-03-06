"use strict";Object.defineProperty(exports, "__esModule", {value: true});
class HomeController {

  async index(req, res) {
    try {
      return res.json("Index Aqui");
    } catch (e) {
      return res.json(null);
    }
  }
}
exports. default = new HomeController();
