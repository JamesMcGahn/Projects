import React, { createContext, useState } from 'react'

export const LanguageContext = createContext()

export function LanguageProvider(props) {
    const [language, setLanguage] = useState('english')

    const changeLanguage = (e) => {
        const changeLanguage = e.target.value
        setLanguage(changeLanguage)

    }
    return (
        <LanguageContext.Provider value={{ language, changeLanguage: changeLanguage }}>
            {props.children}
        </LanguageContext.Provider >
    )

}

