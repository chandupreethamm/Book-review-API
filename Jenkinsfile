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
                sh 'npm audit --json > audit-report.json || true'
                sh 'cat audit-report.json'
                archiveArtifacts artifacts: 'audit-report.json', fingerprint: true
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
        echo 'Triggering deployment to Render...'
        sh '''
            curl -X POST https://api.render.com/deploy/srv-xxxxxx?key=your-key
        '''
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
