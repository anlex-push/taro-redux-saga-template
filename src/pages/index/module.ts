import { IModule } from "src/store/interface";
import { indexPageReducer } from "./reducer";
import indexPageSaga from "./saga";

export const indexModule:IModule = {
    reducer: indexPageReducer,
    saga: indexPageSaga,
    namespace: __filenamespace,
};