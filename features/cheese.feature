Feature: showing off behave

    Scenario: run a simple test
        Given we navigate to python.org
            When we check the title
            Then the title is equal to Welcome to Python.org