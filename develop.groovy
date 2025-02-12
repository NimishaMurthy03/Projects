pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                script {
                    def targetDir = "C:\Users\Monisha\jenkins"
                    sh "rm -rf ${targetDir} && mkdir -p ${targetDir}"
                    sh "git clone --branch develop https://github.com/NimishaMurthy03/Projects ${targetDir}"
                }
            }
        }
    }
}
