Feature: Login

    Scenario: Login incorrect
        Given Access the website
        When click login link
            And submit email and password incorrects
        Then check the error message

    Scenario: Login corret
        Given Access the website
        When click login link
            And submit email and password
        Then check icon logged
