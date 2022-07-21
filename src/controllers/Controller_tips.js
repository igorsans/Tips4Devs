import tips from "../database/db.js";
import Tipsgen from "../database/tips.js";
import Model_tips from "../models/Models_tips.js";


class Controller_tips {
  static connect = (app) => {
    app.post("/create", (req, res) => {
        const dica = new Model_tips(req.body.tips)
        console.log(dica)
        tips.push(dica)
        res.status(201).json(tips)
    });
    app.post("/create/generate", (req, res)=>{
        res.status(201).json(Tipsgen.generate(tips))
    })
    app.get("/tips", (req, res) => {
        let random = Math.floor(Math.random() * tips.length)
        res.status(200).json(tips[random])
    })
  };
}
export default Controller_tips;
