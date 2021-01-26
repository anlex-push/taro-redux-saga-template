import { ActionCreator } from "flux-payload-action"

export const addAction = ActionCreator(`${__filenamespace}/ADD`);
  
export const minusAction = ActionCreator(`${__filenamespace}/MINUS`);
  
export const asyncAddAction = ActionCreator<{timeout:number}>(`${__filenamespace}/ASYNC_ADD`);
  
