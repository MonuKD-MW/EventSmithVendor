import dotenv from "dotenv";
dotenv.config();

export const development = {
  BASE_END_POINT: process.env.REACT_APP_BASE_END_POINT,
};
