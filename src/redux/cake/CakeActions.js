import { BUY_CAKE } from "./CakeActionTypes"

export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  }
};
