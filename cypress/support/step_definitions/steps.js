import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import SignupForm from "../pages/Signup";

//googleSearch
Given("I access google page", () => {
    cy.visit("https://www.google.com.br/");
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})

//Login
Given("Access the website", () => {
    cy.visit("https://automationexercise.com/");
})

When("click login link", () => {
    cy.get('[class="fa fa-lock"]').click();
})

And("input email and password incorrects", () => {
    cy.get('[data-qa="login-email"]').type('sayoa1841@uorak.com')
    cy.get('[data-qa="login-password"]').type('teste123{enter}')
    //cy.get('[data-qa="login-button"]').click();
})

And("input email and password", () => {
    SignupForm.inputsignupEmailcorrets()
    SignupForm.inputsignupPasswordcorrets()
    SignupForm.clickLoginBtn()
})

Then("check the error message", () =>{
    cy.get('.login-form > form > p').should('have.text', 'Your email or password is incorrect!')
})

Then("check icon logged", () =>{
    SignupForm.checkIconLogged
})

//Signup
Given("Access the Login Page", () => {
    cy.visit("https://automationexercise.com/login");
})

When("input name and email", () => {
    SignupForm.inputSignupName()
    SignupForm.inputsignupEmail()
    SignupForm.clickLoginNewUserBtn()
})


Then("Fill the new UserForm", () =>{
    SignupForm.FillRegisterUserForm ()
})

//InspectProductDetails
Given("Access Ppd store", () => {
    cy.visit("https://automationexercise.com/product_details/1");
})

When("Inspect product_details Elements", () => {
    SignupForm.InspectProduct_details()
})
