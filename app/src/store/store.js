import { compose, createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import { rootReducer } from './rootReducer'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: "root",
    storage,
    whiteList: ['cart'],
}
const middlewares = [process.env.NODE_ENV !== 'production' && logger, thunk,].filter(Boolean)

const composeEnhancer =
    (process.env.NODE_ENV !== 'production' &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares))
const persistingReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistingReducer, undefined, composedEnhancers)
export const persistingStore = persistStore(store)