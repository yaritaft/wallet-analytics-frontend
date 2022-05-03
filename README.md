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

# Solution

## Deployment link

### Important

Before trying to use the app you have to:

1. Click the link below.

https://dancing-eclair-807d38.netlify.app/

2. Go to site settings (in Chrome)
   ![](https://raw.githubusercontent.com/yaritaft/wallet-analytics-frontend/master/docs/iwBRO.png)
3. Allow insecure content.
   ![](https://raw.githubusercontent.com/yaritaft/wallet-analytics-frontend/master/docs/VgkNP.png)
4. Now you can use the app if you have the backend up and running locally. (doing docker-compose up)

## Design

The design is two pages.

Login page and wallets page.

From Login page you can:

- Login
- Register new account

From wallets page you can:

- Set/Unset favorite wallet
- Remove wallet
- Add new wallet
- Logout
- Change exchange rate
- Change currency balance of one wallet.

## Decisions

- Use react. Because it is the most standard technology to do frontend nowadays and it works fine without having to refresh the whole page with every change.
- Use hooks to handle state. Since no complex state had to be handled only hooks were used to work with states.
- Use storybook. It brings a lot of isolation to create reusable components. And it makes the development faster.
- Splitted the logic of the application from the visual design.
- External requests were written in actions folder to decouple the app from external apps.
- Typescript was used to improve the code quality, readeability and to avoid typing bugs.

## Assumption

- The sorting is first favorites wallets and then non favorite ones.

## Run App

```
npm install
npm start
```

## Run storybook

```
npm install
npm run storybook
```

## Improvement areas

- A request layer would be useful to decoupple requests from axios.
- It would be nice to have a mono repo to share domain models since we are using Typescript end to end.
- JSON Schema validators could have been used to improve error handling related to invalid requests. I.E using Yup.
- Unit and integration testing to be able to test the app without the UI. Using jest, react testing library and cypress.
- The styling can be improved by using more colors and more svgs.
- A loading animation would be good when we wait for updates in the wallets. Since the get wallets endpoints has to do a lot of request to gather all the information needed.
- A lot of logic can be separated from components by using custom hooks to preserve the distinction between visual ui and behavior.
- Styled components can help a lot by providing css in js and avoiding css files. It also provides conditional styling to avoid complex class name assignments.
