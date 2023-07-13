/// <reference types="Cypress"/>
import dataLogin from "../../../fixtures/dataLogin.json"        

const elLogin = require('./elements').ELEMENTS

class SignupForm {
    inputSignupName(){
        cy.get(elLogin.signupName).type('Luana{enter}'); 
    }

    inputsignupEmail(){
        cy.get(elLogin.signupEmail).type('sayoa1841@uorak.com')
    }

    inputsignupEmailcorrets(){
        cy.get(elLogin.LogInmail).type('darien6565@uorak.com')
    }

    inputEmailAndpasswordIncorrects(){
        cy.get(elLogin.LogInmail).type(dataLogin.incorrectEmail)
        cy.get(elLogin.LogSenha).type(dataLogin.incorrectPassword)
    }

    inputEmailAndpasswordCorrets(){
        cy.get(elLogin.LogInmail).type(dataLogin.correctEmail)
        cy.get(elLogin.LogSenha).type(dataLogin.correctPassword)
    }

    inputsignupPasswordcorrets(){
        cy.get(elLogin.LogSenha).type('teste123')
    }

    clickLoginNewUserBtn(){
        cy.get(elLogin.signupButton).click()
    }

    clickLoginBtn(){
        cy.get(elLogin.LoginBtn).click()
    }

    checkIconLogged(){
    cy.should(iconLogged)
    }

    FillRegisterUserForm(){
        cy.get(elLogin.gender2).click();
        cy.get(elLogin.inputPassword).type('Teste123{enter}')
        cy.get(elLogin.dataDays).select('1')
        cy.get(elLogin.dataMonth).select('12')
        cy.get(elLogin.dataYears).select('2000')
        cy.get(elLogin.receiveNews).check()
        cy.get(elLogin.receivespecialOffers).check()
        cy.get(elLogin.dataName).type('Luana{enter}')
        cy.get(elLogin.dataLastName).type('Martins teste{enter}')
        cy.get(elLogin.dataCompany).type('StarterQA{enter}')
        cy.get(elLogin.dataAdress1).type('rua teste casa{enter}')
        cy.get(elLogin.dataAdress2).type('rua teste comercio{enter}')
        cy.get(elLogin.dataCountry).select('New Zealand')
        cy.get(elLogin.dataState).type('Texto')
        cy.get(elLogin.dataCity).type('Texto')
        cy.get(elLogin.dataZip).type('6545465465')
        cy.get(elLogin.dataMnumber).type('169999999999')  
    } 

    InspectProduct_details(){
        cy.get(elLogin.imagePdp)
        cy.get(elLogin.Quantify)
        cy.get(elLogin.BtnAddToCart)
        cy.get(elLogin.NameFormPdp)
        cy.get(elLogin.emailFormPdp)
        cy.get(elLogin.ContainerReview)
    }
}
export default new SignupForm

