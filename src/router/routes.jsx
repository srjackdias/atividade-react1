// src/router/routes.jsx
import { createBrowserRouter } from "react-router-dom";
import Senhas from "../Pages/Senhas";

import Fofoca from "../Pages/Fofoca"; // Verifique o caminho
import Conteudo from "../Conteudo";

import Header from "../Components/Header";
const router = createBrowserRouter([
    { path: "/", element: <Conteudo /> },
    { path: "/header", element: <Header /> }, // Ajuste de rota para Header

    { path: "/senhas", element: <Senhas /> },
    { path: "/fofoca", element: <Fofoca /> }, // Cuidado com letras maiúsculas
]);

export default router;
