import { useState } from "react";
import { InputBox } from "./components/InputBox";
import { useCurrencyInfo } from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
    const [amount, setAmount] = useState(1);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo || {});

    const swap = () => {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    };

    const convert = () => {
        if (currencyInfo && currencyInfo[to]) {
            setConvertedAmount(amount * currencyInfo[to]);
        }
    };

    return (
        <div className="container">
            <div className="converter-box">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}
                >
                    <InputBox
                        label="From"
                        amount={amount}
                        currencyOptions={options}
                        onCurrencyChange={(currency) => setFrom(currency)}
                        selectCurrency={from}
                    />

                    <button type="button" className="swap-btn" onClick={swap}>
                        Swap
                    </button>

                    <InputBox
                        label="To"
                        amount={convertedAmount}
                        currencyOptions={options}
                        onCurrencyChange={(currency) => setTo(currency)}
                        selectCurrency={to}
                    />

                    <button type="submit" className="convert-btn">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default App;
