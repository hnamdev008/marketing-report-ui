pipeline {
    agent any
    environment {
        BUILD_VERSION = sh(returnStdout: true, script: 'git rev-parse HEAD').trim().take(6)
        IMAGE = "eu.gcr.io/monsido-1022/snapshot-report-ui:${env.BRANCH_NAME}-${env.BUILD_VERSION}"
        LATEST_IMAGE = "eu.gcr.io/monsido-1022/snapshot-report-ui:${env.BRANCH_NAME}-latest"
        RAILS_ENV = "test"

    }
    stages {

	    stage('build docker') {
	        steps {
                sh "docker build -t ${env.IMAGE} . > /dev/null"
                sh "docker tag ${env.IMAGE} ${env.LATEST_IMAGE}"
                sh "docker push ${env.IMAGE}"
                sh "docker push ${env.LATEST_IMAGE}"
            }
        }
    }       
}