pipeline {
    agent any

    tools {
        nodejs 'task8' // Use the NodeJS name you configured in Jenkins Global Tools
    }

    stages {
        stage('Declarative: Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Declarative: Tool Install') {
            steps {
                echo 'Installing NodeJS tools...'
                sh 'node -v'
                sh 'npm install'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing project dependencies...'
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }

        stage('Lint') {
            steps {
                echo 'Running ESLint...'
                sh 'npx eslint .'
            }
        }

        stage('Build Artefact') {
            steps {
                echo 'Zipping source code as build artefact...'
                sh 'zip -r book-review-api.zip .'
                archiveArtifacts artifacts: 'book-review-api.zip', fingerprint: true
            }
        }
    }
}
