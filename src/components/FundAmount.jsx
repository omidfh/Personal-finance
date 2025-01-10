import {
  StyledFundDiv,
  StyledLabelFund,
  StyledMainStatus,
} from "../ui/StyledFundShow";

import { formatCurrency } from "../utils/formatCurrency";

function FundAmount({ setting, allSpends }) {
  return (
    <>
      <StyledMainStatus>
        <StyledFundDiv type="fund">
          <StyledLabelFund>
            Your Fund 💰
            <p>{formatCurrency(setting.initialFund, setting.currency)}</p>
          </StyledLabelFund>
        </StyledFundDiv>
        <StyledFundDiv type="expense">
          <StyledLabelFund>
            All Expenses 💰
            <p>{formatCurrency(allSpends, setting.currency)}</p>
          </StyledLabelFund>
        </StyledFundDiv>
        <StyledFundDiv type="remaining">
          <StyledLabelFund>
            Remaining 💰
            <p>
              {formatCurrency(
                setting.initialFund - allSpends,
                setting.currency
              )}
            </p>
          </StyledLabelFund>
        </StyledFundDiv>
      </StyledMainStatus>
    </>
  );
}

export default FundAmount;
