# User Activity Dashboard

This project is a microservices-based application that provides a live dashboard for user activity events. It consists of three main components:

## Components

### 1. Frontend
- **Technology**: React + Vite
- **Description**: A React-based dashboard that fetches and displays live user activity events from the backend.
- **Key Features**:
  - Uses Axios for API calls.
- **Development**:
  - Run `npm install` to install dependencies.
  - Use `npm run dev` to start the development server.

### 2. Event Producer
- **Technology**: Node.js with KafkaJS
- **Description**: A service that generates random user activity events and publishes them to a Kafka topic (`user.activity`).
- **Key Features**:
  - Produces events every 10 seconds.
  - Events include user ID, activity type, and timestamp.

### 3. Event Consumer
- **Technology**: Spring Boot
- **Description**: A backend service that consumes events from the Kafka topic, stores them in memory, and exposes them via a REST API.
- **Key Features**:
  - Prometheus integration for metrics.
  - REST API endpoint `/events` to fetch user activity data.
  - CORS configuration for frontend communication.

## Deployment

### Kubernetes Deployment
  - Use the kubernetes-deploy.sh script to deploy the services to a Kubernetes cluster: 
  - bash kubernetes-deploy.sh

### Local Development
  - Use the provided `docker-compose.yml` file to run the services locally:
  - docker-compose up --build

### Monitoring
  - Prometheus: Collects metrics from the event consumer.
  - Grafana: Visualizes metrics from Prometheus.

### Architecture
  - Kafka: Acts as the message broker for event streaming.
  - Zookeeper: Manages Kafka brokers.
  - Node.js: Produces events.
  - Spring Boot: Consumes events and provides APIs.
  - React: Displays events in the dashboard.