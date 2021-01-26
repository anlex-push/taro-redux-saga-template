import _ from "lodash";
import { indexModule } from "../pages/index/module";
import { IModule } from "./interface";

export const allModules:IModule[] = [
    indexModule
];


export const allReducer = _.reduce(allModules,(total,v)=>{
    if(!_.isNil(v)){
        total[v.namespace] = v.reducer
    }
    return total;
},{} as {[key:string]:IModule['reducer']});