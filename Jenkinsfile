pipeline {
    agent any

    tools {
        nodejs "NodeJS" // Make sure you set this up in Jenkins under Global Tools
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing project dependencies...'
                sh 'npm install'
            }
        }

        stage('Build Artefact') {
            steps {
                echo 'Building Docker image as build artefact...'
                sh 'docker build -t book-review-api:latest .'
            }
        }

        stage('Lint') {
            steps {
                echo 'Running ESLint for code quality...'
                sh 'npx eslint .'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests using Jest...'
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Simulating deployment step...'
                sh 'echo "App deployed locally (simulated)"'
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution complete.'
        }
    }
}
