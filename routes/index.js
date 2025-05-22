import express from "express";
import duenoRouter from "./duenoRouter.js";
import mascotaRouter from "./mascotaRouter.js";

function routerAPI(app) {
  app.use('/api/duenos', duenoRouter);
  app.use('/api/mascotas', mascotaRouter);
}

export default routerAPI;
