Feature: Conduit Register Functionality

Scenario: Registes new Account with Valid Credentials
Given User is on the sign up page
When User sign up with valid credentials
And User click on the settings button
And User click on the logout button
Then User should be routed back to login page