Feature: Login

    Scenario: Login incorrect
        Given Access the website
        When click login link
            And input email and password incorrects
        Then check the error message