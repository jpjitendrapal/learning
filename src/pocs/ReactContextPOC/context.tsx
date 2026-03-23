import { createContext } from "react";

const intialPageContext = {
    stateInFile1: "",
    stateInFile2: "",
    stateInFile3: "",
}
const pageContext = createContext(intialPageContext);
const PageContextProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <pageContext.Provider value={intialPageContext}>
            {children}
        </pageContext.Provider>
    );
};

export { pageContext, PageContextProvider };
