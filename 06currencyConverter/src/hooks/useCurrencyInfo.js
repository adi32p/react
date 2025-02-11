import { useState, useEffect } from "react";

export const useCurrencyInfo = (baseCurrency) => {
    const [currencyData, setCurrencyData] = useState({});

    useEffect(() => {
        const fetchCurrencyRates = async () => {
            try {
                const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
                const data = await response.json();
                setCurrencyData(data.rates);
            } catch (error) {
                console.error("Error fetching currency data:", error);
            }
        };

        fetchCurrencyRates();
    }, [baseCurrency]);

    return currencyData;
};
