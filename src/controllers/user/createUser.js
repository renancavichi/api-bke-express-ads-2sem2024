import { create, validateUserToCreate } from "../../models/userModel.js"

const createUser = async (req, res, next) => {
   try{
        const user = req.body
        const userValidated = validateUserToCreate(user)

        if(userValidated?.error){
            return res.status(400).json({
                    error: "Erro ao criar usuário, verifique os dados!",
                    fieldErrors: userValidated.error.flatten().fieldErrors
            })
        }

        const result = await create(userValidated.data) 

        if(!result)
            return res.status(500).json({
                error: "Erro ao criar usuário"
            })

        return res.json({
            success: "Usuário criado com sucesso!",
            user: result
        })
    } catch(error) {
        console.log(error)
        if(error?.code === 'P2002')
            return res.status(400).json({
                error: "Erro ao criar usuário, verifique os dados!",
                fieldErrors: { email: ['Email já cadastrado']}
            })
        next(error)
    }
}

export default createUser