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
                echo 'Installing required tools...'
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

        stage('Security') {
            steps {
                echo 'Running security audit with npm...'
                sh 'npm audit --audit-level=moderate || true'
            }
        }

        stage('Build Artefact') {
            steps {
                echo 'Creating ZIP artefact...'
                sh 'zip -r book-review-api.zip .'
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
                echo 'Simulating deployment to staging environment...'
                sh 'echo "Deploying to staging server..."'
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Simulating monitoring checks...'
                sh 'echo "Monitoring app status..."'
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed.'
        }
    }
}
