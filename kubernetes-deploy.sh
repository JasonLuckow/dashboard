docker build -t jsonluck/dashboard-frontend:latest ./frontend
docker push jsonluck/dashboard-frontend:latest

docker build -t jsonluck/event-consumer:latest ./event-consumer
docker push jsonluck/event-consumer:latest

docker build -t jsonluck/event-producer:latest ./event-producer
docker push jsonluck/event-producer:latest

kubectl apply -f ./k8s/event-consumer
kubectl apply -f ./k8s/event-producer
kubectl apply -f ./k8s/frontend
kubectl apply -f ./k8s/kafka
kubectl apply -f ./k8s/grafana
kubectl apply -f ./k8s/prometheus

kubectl rollout restart deployment dashboard-frontend
kubectl rollout restart deployment event-consumer
kubectl rollout restart deployment event-producer
