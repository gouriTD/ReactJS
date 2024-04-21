// This file is used to create theme context.
import React, { createContext, useContext } from "react";

// Here we can also specify the default data to expect.
export const ThemeContext = createContext({
    themeMode: "light",
    lightTheme: ()=>{},
    darkTheme: ()=>{},
});

export const ThemeProvider = ThemeContext.Provider;

export const useTheme = ()=>{
    return useContext(ThemeContext)
}