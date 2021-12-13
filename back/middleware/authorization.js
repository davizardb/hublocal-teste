const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) =>{
    try {
        
        const token = req.header("token");

        if(!token){
            return res.status(403).json("Não autorizado.")
        }

        const payload = jwt.verify(token, process.env.jwtPass);

        req.user = payload.user;
        next();

    } catch (err) {
        console.error(err.message);
        return res.status(403).json("Usuário Não Autorizado");
    }
}