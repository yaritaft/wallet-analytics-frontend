import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Wallet } from "./Wallet";
import { Currencies, Currency } from "../CurrencySelect/CurrencySelect";
import { ExchangeRate } from "../../actions/ExchangeRate/exchangeRate";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Wallet",
  component: Wallet,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Wallet>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Wallet> = (args) => {
  const [exchangeRates, setExchangeRates] = useState<ExchangeRate>({
    ETHToUSD: 222,
    ETHToEuro: 333,
  });

  const [deletionMode, setDeletionMode] = useState(false);
  const [favoriteMode, setFavoriteMode] = useState(false);

  return (
    <Wallet
      deletionMode={deletionMode}
      favoriteMode={favoriteMode}
      setDeletionMode={setDeletionMode}
      setFavoriteMode={setFavoriteMode}
      address={"1234"}
      dolarBalance={4444}
      euroBalance={55555}
      favorite={true}
      old={true}
      exchangeRates={exchangeRates}
      setExchangeRates={setExchangeRates}
    />
  );
};

export const Primary = Template.bind({});
