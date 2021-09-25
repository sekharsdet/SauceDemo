@smoke
Feature: Verify Login Functionality


    Scenario: As a user , while login I should able to see error message by clcking on login by entering only username
        Given user is on HomePage
        When user enters username as "username"
        And user clicks on login
        Then error message "Epic sadface: Password is required" should display
        When user closes error message bar
        Then error message should disappear

    Scenario: As a user , while login I should able to see error message by clcking on login by entering only password
        Given user is on HomePage
        When user enters password as "password"
        And user clicks on login
        Then error message "Epic sadface: Username is required" should display
        When user closes error message bar
        Then error message should disappear

    Scenario: As a user , while login I should able to see error messages while entering wrong username and password
        Given user is on HomePage
        When user enters "username" and "password"
        Then error message "Epic sadface: Username and password do not match any user in this service" should display
        When user closes error message bar
        Then error message should disappear