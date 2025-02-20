//require("dotenv").config();
import env from "dotenv";
//const { get } = require("env-var");
import ev from "env-var";

env.config()

export const envs = {
    PORT: ev.get("PORT").required().asPortNumber(), //poner "ev" para que funcione el get
    PUBLIC_PATH: ev.get("PUBLIC_PATH").default("public").asString()
}