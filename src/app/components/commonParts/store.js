import React, { createContext, useReducer } from 'react';

// const initialState = { eye: 0 };

// ここで Globalに活躍してもらうための Storeの作成
const GraphContext = createContext();

// Providerの定義
// const { Provider } = store;
// const StateProvider = ({ children }) => {

//     return <Provider value={{ state, dispatch }}>{children}</Provider>;
// };

export { GraphContext }
