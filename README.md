# Digital Wallet Dashboard

## Objective

Build a generic platform that return analytics on an ethereum wallets.

## Requirements

The application have the following requirements:

1. Add wallet addresses and display them
2. From the set of wallets, the user should be able toselect favorites and order by them
3. We should have a way to know if a wallet is old. Awallet is considered old if the firsttransaction was performed at least one year ago.
4. The user should be able to do the following actions

- Get exchange rates from Euro and US Dollar to ETH(Ethereum), those can bestored in-memory or in any DB of your preference.
- Edit the exchange rate of Euro or US Dollar to ETH.

5.  Given a currency (Euro or US Dollar) then theuser should have the balance of the ETHin the wallet in the selected currency using the exchangerates from step 4.

## For API

- You should use NestJS
- You can store data in memory, but a DB is a must be.

### For UI

Implement for above endpoints a dashboard interface (React / VueJs) using the attached designs.
Use redux/vuex if necessary. Please note: You can add things to the design if required.

### UI Design

![](https://raw.githubusercontent.com/yaritaft/wallet-analytics-nest/master/doc/ui-design2.png)

## Run App

```
npm start
```

## Run storybook

```
npm run storybook
```
