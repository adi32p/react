export const InputBox = ({ label, amount, currencyOptions, onCurrencyChange, selectCurrency }) => {
    return (
        <div className="input-box">
            <label>{label}</label>
            <input
                type="number"
                value={amount}
                onChange={(e) => onCurrencyChange(e.target.value)}
            />
            <select value={selectCurrency} onChange={(e) => onCurrencyChange(e.target.value)}>
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency.toUpperCase()}
                    </option>
                ))}
            </select>
        </div>
    );
};
