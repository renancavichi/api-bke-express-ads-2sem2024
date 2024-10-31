import { validateUserToLogin, getByEmail } from "../../models/userModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { SECRET_KEY } from "../../config.js"

const login = async (req, res, next) => {
   try{
        const login = req.body
        const loginValidated = validateUserToLogin(login)

        if(loginValidated?.error){
            return res.status(400).json({
                    error: "Erro ao logar, verifique os dados!",
                    fieldErrors: loginValidated.error.flatten().fieldErrors
            })
        }

        //buscar o user pelo email
        const user = await getByEmail(loginValidated.data.email)
        if(!user){
            return res.status(400).json({
                    error: "Email ou senha inválida! (email não encontrado)"
            })
        }

        //comparar a senha enviada com o hash armazenado
        const passIsValid = bcrypt.compareSync(loginValidated.data.pass, user.pass)

        if(!passIsValid){
            return res.status(400).json({
                    error: "Email ou senha inválida! (senha não confere)"
            })
        }

        const token = jwt.sign({name: user.name, publicId: user.public_id}, SECRET_KEY, { expiresIn: 60 * 5})

        console.log(token)
        return res.json({token})


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

export default login