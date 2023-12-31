import { FC } from 'react';
import { P } from '../CommonComponents/Common-сomponents-style';
import {
  PortfolioCardItem,
  PortfolioCardNumbersWrapper,
  PortfolioCardNumbersColumnLeft,
  PortfolioCardTitle,
  PortfolioCardNumbersColumnRight,
  PortfolioCardAssentTitle,
  PortfolioNoSuccedCardAssentTitle,
  SecondaryButtonForPortfolioCard,
} from './Portfolios-style';

interface IProps {
  currency: string;
  amount: number;
  number: number;
  profitability: number;
  link: string;
}

const CompletedPortfolioCardItem: FC<IProps> = ({
  currency,
  amount,
  number,
  profitability,
  link,
}) => {
  return (
    // закладка - билд
    // <PortfolioCardItem component="li">
    <PortfolioCardItem>
      <PortfolioCardNumbersWrapper>
        <PortfolioCardNumbersColumnLeft>
          <PortfolioCardTitle>
            {currency} {amount}
          </PortfolioCardTitle>
          <P variant="h2">Portfolio {number}</P>
        </PortfolioCardNumbersColumnLeft>

        <PortfolioCardNumbersColumnRight>
          {profitability > 0 ? (
            <PortfolioCardAssentTitle>
              +{profitability}%
            </PortfolioCardAssentTitle>
          ) : (
            <PortfolioNoSuccedCardAssentTitle>
              {profitability}%
            </PortfolioNoSuccedCardAssentTitle>
          )}
          <P>per 1 year</P>
        </PortfolioCardNumbersColumnRight>
      </PortfolioCardNumbersWrapper>

      <SecondaryButtonForPortfolioCard
        type="button"
        fullWidth
        size="small"
        variant="contained"
        href={link}
      >
        details
      </SecondaryButtonForPortfolioCard>
    </PortfolioCardItem>
  );
};

export default CompletedPortfolioCardItem;
