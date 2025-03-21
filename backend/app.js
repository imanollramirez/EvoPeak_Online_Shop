import express from "express";
import promotionsRoutes from "./src/routes/promotions.js";
import salesRoutes from "./src/routes/sales.js";
import wishListRoutes from "./src/routes/wishList.js";

const app = express();

app.use(express.json());

// Definir las rutas de las funciones que tendrá la página web
app.use("/api/promotions", promotionsRoutes);
app.use("/api/sales", salesRoutes);
app.use("/api/wishList", wishListRoutes);

export default app;
