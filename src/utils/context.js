import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

// Компонент-поставщик, который будет обернут вокруг всех компонентов
export const LanguageProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState("ru");

    const changeLanguage = (language) => {
        setCurrentLanguage(language);
    };

    return (
        <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Кастомный хук для удобного доступа к данным контекста
export const useLanguage = () => {
    return useContext(LanguageContext);
};