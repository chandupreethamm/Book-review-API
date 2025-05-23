pipeline {
    agent any

    tools {
        nodejs 'task8'
    }

    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Tool Install') {
            steps {
                echo 'Installing Node tools...'
            }
        }

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
                echo 'Creating build artifact...'
                sh 'zip -r book-review-api.zip . -x "node_modules/*"'
                archiveArtifacts artifacts: 'book-review-api.zip', fingerprint: true
            }
        }

        stage('Release') {
            steps {
                echo 'Releasing version v1.0.0'
                sh 'echo v1.0.0 > release.txt'
                archiveArtifacts artifacts: 'release.txt', fingerprint: true
            }
        }

        stage('Deploy') {
            steps {
                echo 'Simulating deployment by copying artifact to deploy/ directory...'
                sh 'mkdir -p deploy && cp book-review-api.zip deploy/'
                archiveArtifacts artifacts: 'deploy/book-review-api.zip', fingerprint: true
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Simulating monitoring... tailing logs'
                sh 'echo "All systems operational" > system.log && tail system.log'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Please check the logs.'
        }
    }
}
