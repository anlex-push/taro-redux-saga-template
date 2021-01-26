import { AnyAction } from "redux";

export interface IModule {
    reducer: (state: any, action: AnyAction) => any;
    saga: () => Generator;
    namespace: string;
}