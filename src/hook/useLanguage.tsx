import { useEffect, useState } from "react";


export const useLanguage = () => {
    const [language, setLanguage ] = useState<"en" | "fr">('en')
    // detection de la langue du navigateur
    function getBrowserLanguage() {
        const lang = navigator.language;
        const navLang = lang.split('-')[0]
        console.log(navLang)
        if (navLang === "en" || navLang === "fr") {
            setLanguage(navLang) 
            return navLang
        } else {
            setLanguage("en")
            return "en"
        }
    }

    useEffect(() => {
        getBrowserLanguage()
    }, [language])
    
    useEffect(() => {
        document.addEventListener('DOMContentLoaded', function() {
            const browserLanguage = getBrowserLanguage();
            let preferredLanguage = localStorage.getItem('preferredLanguage') || browserLanguage;
            if (preferredLanguage === "en" || preferredLanguage === "fr") {
                setLanguage(preferredLanguage)
            } else {
                setLanguage(browserLanguage)
            }
          });
    }, [language])
  
    return {
        language
    }
}


