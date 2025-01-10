import { useState } from "react";
import { toast } from "react-hot-toast";
import { useFormContext } from "../FormaDataContext";
import Button from "../ui/Button";
import { FundForm, FundInput, StyledLabel } from "../ui/FundFormStyles";
import HomeLogo from "../ui/HomeLogo";
import { Select } from "../ui/Select";

function NewFund() {
  const [money, setMoney] = useState("");

  const { handleSetFund, handleSetCurrency } = useFormContext();

  function handleSetMoney(e) {
    e.preventDefault();
    handleSetFund(money);
    toast.success("Your Fund and Curency aeccesfully aded !");
  }

  function onCurrencyChange(value) {
    let cur;
    if (value === "Dollar") cur = "USD";
    if (value === "Euro") cur = "EUR";
    if (value === "Turkish Lira") cur = "TRY";
    if (value === "Rial") cur = "IRR";
    handleSetCurrency(cur);
  }

  return (
    <FundForm onSubmit={(e) => handleSetMoney(e)}>
      <HomeLogo />
      <StyledLabel htmlFor="fund">How much money do you have ?</StyledLabel>
      <FundInput
        name="fund"
        type="number"
        value={money}
        onChange={(e) => setMoney(e.target.value)}
        placeholder="write your fund ..."
      ></FundInput>
      <StyledLabel htmlFor="currency">Set your Currency</StyledLabel>
      <Select
        type="currency"
        name="currency"
        onChange={(e) => {
          onCurrencyChange(e.target.value);
        }}
      >
        <option value="Dollar">Dollar ($)</option>
        <option value="Euro">Euro (€)</option>
        <option value="Turkish Lira">Turkish Lira (₺)</option>
        <option value="Rial">Rial (﷼)</option>
      </Select>
      <Button type="submit">Submit</Button>
    </FundForm>
  );
}

export default NewFund;
