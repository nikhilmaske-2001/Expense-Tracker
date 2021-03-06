# Expense Tracker Web App

Expense Tracker is a powerful webapp that help user to track
their Expenses and Income. This webapp is also mobile responsive,
that means user can easily access this app on any device.

This webapp is [Powered with Speechly](https://www.speechly.com/).
User can control the app using keyboard as well as voice.

Try this app: [Expense Tracker App](https://expense-tracker-made-with-speechly.netlify.app/)

# Build using
- [ReactJS](https://reactjs.org/) - JavaScript Framework
- [Context API](https://reactjs.org/docs/context.html) - For state management
- [Material UI](https://material-ui.com/) - UI library
- [Speechly](https://www.speechly.com/) - Voice Recognition API
- [uuid](https://www.npmjs.com/package/uuid) - Create unique Id library
- [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2) - Show data in chart library

# Features
- Voice Recognition and Voice to text conversion
- Fast and accurate voice interaction with app
- Show data in chart form for easy understanding
- Various error management to prevent app crashes
- Local Storage support (Don't worry about data lost, data will be stored in local storage)

# Screenshots
![image](https://user-images.githubusercontent.com/59444243/128634357-e624bec9-48c9-4238-ba7b-aacf2065b4c0.png)


# Speechly config

```
category_income = [
    Business
    Investments
    Extra income
    Deposits
    Lottery
    Gifts
    Salary
    Savings
    Rental income
]
category_expense = [
    Bills
    Car
    Clothes
    Travel
    Food
    Shopping
    House
    Entertainment
    Phone
    Pets
    Other
]
*create_transaction [Create|Finish|Save] {transaction}
*cancel_transaction [Cancel|Delete|Remove|Clear] {transaction}
*add_category [Set|Change] category {to} [$category_expense|$category_income](category)
*add_category {[i mean|i meant|i said]} {the} ![category {[is|of]} | [$category_expense|$category_income](category)]
*add_date [Set|Change|Add] date {[to|for]} $SPEECHLY.DATE(date)
*add_date {[i mean|i meant|i said]} {[{the} date is|for]} $SPEECHLY.DATE(date)
*add_amount [Set|Change] amount {to} $SPEECHLY.NUMBER(amount) {dollars}
*add_amount {[i mean|i meant|i said]} {{the} amount {[is|of]}} $SPEECHLY.NUMBER(amount) {dollars}
*add_expense {Add} {an} expense ![{[for|of]} $SPEECHLY.NUMBER(amount) {dollars} | {in} | {category} | [$category_expense|$category_income](category) | {[for|in]} $SPEECHLY.DATE(date)]
*add_expense $SPEECHLY.NUMBER(amount) {[dollar|dollars]} expense {in} ![{category} | [$category_expense|$category_income](category)] {[for|in]} $SPEECHLY.DATE(date)
*add_income {Add} {[{an} income|{a} balance]} ![{[for|of]} $SPEECHLY.NUMBER(amount) {dollars} | {in} | {category} | [$category_expense|$category_income](category) | {[for|in]} $SPEECHLY.DATE(date)]
*add_income $SPEECHLY.NUMBER(amount) {[dollar|dollars]} [income|balance] {in} ![{category} | [$category_expense|$category_income](category)] {[for|in]} $SPEECHLY.DATE(date)
```
