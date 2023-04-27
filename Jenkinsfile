pipeline {
  agent any

  stages {
    stage('Build and Push Docker Image') {
      steps {
        script {
          // Récupérer les informations d'authentification DockerHub à partir de Jenkins Credentials
          def dockerHubCredentials = credentials('dockerhub')
          def dockerHubUsername = 'yanis.boumrah@gmail.com'
          def dockerHubPassword = 'Zebbi25+*'

          // Définir les variables d'environnement pour Docker
          env.DOCKER_REGISTRY = 'docker.io'
          env.DOCKER_IMAGE_NAME = 'DevOps'
          env.DOCKER_IMAGE_TAG = "latest"

          // Construire l'image Docker à partir du Dockerfile et l'étiqueter avec le numéro de version de build
          sh "docker build -t yanisboumrah/${env.DOCKER_IMAGE_NAME}:${env.DOCKER_IMAGE_TAG} ."

          // Connecter Docker au registre DockerHub
          sh "docker login ${env.DOCKER_REGISTRY} -u ${dockerHubUsername} -p ${dockerHubPassword}"

          // Pousser l'image Docker construite sur DockerHub
          sh "docker push ${env.DOCKER_REGISTRY}/${env.DOCKER_IMAGE_NAME}:${env.DOCKER_IMAGE_TAG}"
        }
      }
    }
  }
}