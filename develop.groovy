pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                script {
                    def targetDir = "/your/target/folder"
                    sh "rm -rf ${targetDir} && mkdir -p ${targetDir}"
                    sh "git clone --branch develop https://github.com/your-username/your-repo.git ${targetDir}"
                }
            }
        }
    }
}
