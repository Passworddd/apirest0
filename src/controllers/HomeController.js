
class HomeController {

  async index(req, res) {
    try {
      return res.json("Index Aqui");
    } catch (e) {
      return res.json(null);
    }
  }
}
export default new HomeController();
