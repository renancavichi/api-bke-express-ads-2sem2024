import { update } from "../../models/userModel.js"

const editNameUser = async (req, res) => {
    const {id} = req.params
    const {name} = req.body
    
    const user = {id: +id,name}

    const result = await update(user)

    if(!result)
        return res.status(401).json({
            error: "Erro ao criar usuário"
        })

    return res.json({
        success: "Nome atualizado com sucesso!",
        user: result
    })
}

export default editNameUser