import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
    AnyAction, CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';

export interface StateSchema {
    user: UserSchema;
    loginForm?: LoginSchema,
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (_state: StateSchema, _action: AnyAction) => CombinedState<StateSchema>,
    add: (_key: StateSchemaKey, _reducer: Reducer) => void,
    remove: (_key: StateSchemaKey) => void,
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager,
}
