pipeline {
    agent any

    tools {
        nodejs "NodeJS" // Make sure "NodeJS" is installed in Jenkins under Global Tool Configuration
    }

    stages {
        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Lint') {
            steps {
                echo 'Running ESLint for linting...'
                sh 'npx eslint .'
            }
        }

        stage('Test') {
            steps {
                echo 'Running Jest tests...'
                sh 'npm test'
            }
        }

        stage('Code Quality Analysis') {
            steps {
                echo 'Running ESLint as code quality check...'
                sh 'npx eslint .'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
    }
}
