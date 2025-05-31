

// routes/authRoutes.js
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config(); // Para carregar as variáveis do .env

const router = express.Router();

router.get("/login", (req, res) => {
  res.render("login");  // Renderiza a tela de login (login.handlebars)
});

router.post("/login", async (req, res) => {
  const { email, senha } = req.body;
  
  // Procura o usuário pelo email
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.render("login", { error: "Usuário não encontrado." });
  }
  
  // Usa bcrypt para comparar a senha informada com o hash armazenado
  const senhaValida = await bcrypt.compare(senha, user.senha_hash);
  if (!senhaValida) {
    return res.render("login", { error: "Senha incorreta." });
  }
  
  // Gera o token JWT com o ID e email do usuário; o token expira em 1 hora
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  
  //armazenando o token em um cookie HttpOnly para segurança
  res.cookie("token", token, { httpOnly: true });
  res.redirect("/tasks"); // Redireciona para a lista de tarefas após o login
});

export default router;