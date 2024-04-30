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
                    // Combine commands using && to ensure they run sequentially
                    sh '''
                        cd /Users/eanglean/Desktop/demo-cucumber/hellocucumber &&
                        npm run test
                    '''
                }
            }
        }
    }
    // Post-build actions to handle failures gracefully
    post {
        always {
            // Mark the build as unstable if it fails but allow it to continue
            unstable()
        }
    }
}
