import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

Given("I access google page", () => {
    cy.visit("https://www.google.com.br/");
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})

Given("Access the website", () => {
    cy.visit("https://automationexercise.com/");
})

When("click login link", () => {
    cy.get('[class="fa fa-lock"]').click();
})

And("input email and password incorrects", () => {
    cy.get('[data-qa="login-email"]').type('sayoa1841@uorak.com{enter}')
    cy.get('[data-qa="login-password"]').type('teste123{enter}')
    cy.get('[data-qa="login-button"]').click();
})

Then("check the error message", () =>{
    cy.get('.login-form > form > p').should('have.text', 'Your email or password is incorrect!')
})