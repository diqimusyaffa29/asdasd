import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('User is on the sign up page', function(){
    cy.visit('https://react-redux.realworld.io/')
    cy.get('a[href="#register"]').click()
})

When('User sign up with valid credentials', function(){
    cy.get('input[placeholder="Username"]').type('dmhqq') 
    cy.get('input[placeholder="Email"]').type('musyaffa@gmail.com') 
    cy.get('input[placeholder="Password"]').type('dmhqdemo')
    cy.get('button[type="submit"]').click()
})

When('User click on the settings button', function(){
    cy.get('a[href="#settings"]').click()
})

When('User click on the logout button', function(){
    cy.get('.btn.btn-outline-danger').click()
})

Then('User should be routed back to login page',function(){
    cy.title().should('eq', 'Conduit')
})