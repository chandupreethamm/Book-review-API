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
        echo 'Tagging release version...'
        script {
            def releaseVersion = "v1.0.${BUILD_NUMBER}"
            sh "git config --global user.email 'chandu.preethamnaidu@gmail.com'"
            sh "git config --global user.name 'Chandu Preetham'"

            sh "git tag -a ${releaseVersion} -m 'Release ${releaseVersion}'"

            // Securely push tag using token
            withCredentials([string(credentialsId: 'github_pat', variable: 'GIT_TOKEN')]) {
                sh "git push https://${GIT_TOKEN}@github.com/chandupreethamm/Book-review-API.git ${releaseVersion}"
            }

            writeFile file: 'release.txt', text: "${releaseVersion} - Released via Jenkins"
        }
        archiveArtifacts artifacts: 'release.txt', fingerprint: true
    }
}



        stage('Deploy') {
            steps {
        echo 'Pipeline updated!'
        echo 'Triggering deployment to Render...'
        sh '''
            curl -X POST https://api.render.com/deploy/srv-d0skbnili9vc73d2uo10?key=TNzt0Awz_c4
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
