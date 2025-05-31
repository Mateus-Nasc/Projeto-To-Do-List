 
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authenticateToken = (req, res, next) => {
  // Pega o token do cookie, ou alternadamente do header Authorization
  const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(" ")[1]);
  
  if (!token) {
    return res.redirect("/login");
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).render("login", { error: "Token inválido ou expirado." });
  }
};

// Esse middleware garante que somente usuários autenticados consigam acessar as rotas protegidas.