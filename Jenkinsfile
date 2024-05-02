pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'NodeJS 21.7.3') {
                    sh 'npm install'
                }
            }
        }
        stage('Test') { 
            steps {
                nodejs(nodeJSInstallationName: 'NodeJS 21.7.3') {
                    sh 'cd /Users/eanglean/Desktop/demo-cucumber/hellocucumber'
                }
            }
        }
    }
}