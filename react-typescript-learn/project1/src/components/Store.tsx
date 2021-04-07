import { createContext } from "react"

const initialState = {
    first:"jack",
    last:"herringtan"
};

export type UserState = typeof initialState;

const context = createContext<typeof initialState>(initialState);

export default context