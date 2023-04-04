import { createContext, useContext, useState } from "react";

// Created a context.
const TestModeContext = createContext();

// Created a provider.
export const TestModeContextProvider = ({children})=>{

    const [testTime, setTestTime] = useState(15);

    const values = {
        testTime,
        setTestTime,
    }

    return (<TestModeContext.Provider value={values}>{children}</TestModeContext.Provider>);
}

// Self-Made Hook (use) 
export const useTestMode = () => useContext(TestModeContext);