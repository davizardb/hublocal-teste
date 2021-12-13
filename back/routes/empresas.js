const router = require("express").Router();
const pool = require("../ds");

router.post("/empresa" ,async (req,res) =>{
    try {
        const {user, nome, cnpj, descricao} = req.body;

        await pool.query(
            "INSERT INTO empresas (user_id, nome, cnpj, descricao) VALUES ($1, $2, $3, $4) RETURNING *",
            [user, nome, cnpj, descricao]
        );

        res.json('Empresa Adicionada');

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})

router.delete("/empresa" ,async (req,res) =>{
    try {
        const {id} = req.body;

        await pool.query(
            `DELETE FROM empresas WHERE id = ${id}`
        );

        res.json('Empresa Excluida');

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})

router.post("/responsavel" ,async (req,res) =>{
    try {
        const {empresa, nome, telefone, endereco} = req.body;
        
        await pool.query(
            "INSERT INTO responsaveis (empresa_id, nome, telefone, endereco) VALUES ($1, $2, $3, $4) RETURNING *",
            [empresa, nome, telefone, endereco]
            );
            
            res.json('Responsável Adicionado');
            
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server Error");
        }
    })

router.delete("/responsavel" ,async (req,res) =>{
    try {
        const {id} = req.body;

        await pool.query(
            `DELETE FROM responsaveis WHERE id = ${id}`
        );

        res.json('Responsável Excluido');

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})
    
router.post("/local" ,async (req,res) =>{
    try {
    const {empresa, responsavel, nome, endereco} = req.body;

    await pool.query(
        "INSERT INTO locais (empresa_id, responsavel_id, nome, endereco) VALUES ($1, $2, $3, $4) RETURNING *",
        [empresa, responsavel, nome, endereco]
    );

    res.json('Local Adicionado');

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})

router.delete("/local" ,async (req,res) =>{
    try {
        const {id} = req.body;

        await pool.query(
            `DELETE FROM locais WHERE id = ${id}`
        );

        res.json('Local Excluido');

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})

module.exports = router;
