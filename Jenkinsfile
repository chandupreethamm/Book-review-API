pipeline {
    agent any

    tools {
        nodejs 'task8' // this must match the exact name configured in Jenkins
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Lint') {
            steps {
                sh 'npx eslint .'
            }
        }

        stage('Build Artefact') {
            steps {
                echo 'Building Docker image as artefact...'
                sh 'docker build -t book-review-api:latest .'
            }
        }
    }
}
