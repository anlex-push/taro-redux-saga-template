import { createSelector } from "reselect";
import { indexPageSelector } from "./reducer";


export const getNumSelector = createSelector(
    indexPageSelector,
    (seletor)=>{
        return seletor;
    }
);