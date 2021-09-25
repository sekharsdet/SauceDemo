@smoke
Feature: Verify Login Functionality


    Scenario: As a user , while login I should able to see error messages while entering wrong username and password
        Given user is on HomePage
        When user enters "username" and "password"
        Then error message "Epic sadface: Username and password do not match any user in this service" should display
        When user closes error message bar
        Then error message should disappear