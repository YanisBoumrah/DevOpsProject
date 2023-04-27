pipeline {
  agent any

  stages {
    stage('Build and Push Docker Image') {
      steps {
        script {
          // Récupérer les informations d'authentification DockerHub à partir de Jenkins Credentials
          def dockerHubCredentials = credentials('dockerhub')
          def dockerHubUsername = 'yanisboumrah'
          def dockerHubPassword = 'Zebbi25+*'

          // Définir les variables d'environnement pour Docker
          env.DOCKER_REGISTRY = 'docker'
          env.DOCKER_IMAGE_NAME = 'devops'
          env.DOCKER_IMAGE_TAG = "latest"

          // Construire l'image Docker à partir du Dockerfile et l'étiqueter avec le numéro de version de build
          sh "docker build -t yanisboumrah/${env.DOCKER_IMAGE_NAME}:${env.DOCKER_IMAGE_TAG} ."

          // Connecter Docker au registre DockerHub
          sh "docker login -u ${dockerHubUsername} -p ${dockerHubPassword}"

          // Pousser l'image Docker construite sur DockerHub
          sh "docker push yanisboumrah/${env.DOCKER_IMAGE_NAME}:${env.DOCKER_IMAGE_TAG}"
        }
      }
    }
  }
}