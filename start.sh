kubectl apply -f ./kubernetes/deployments/service-1.yaml
kubectl apply -f ./kubernetes/deployments/service-2.yaml
kubectl apply -f ./kubernetes/deployments/service-proxy.yaml
kubectl apply -f ./kubernetes/services/service-proxy.yaml
kubectl apply -f ./kubernetes/services/service-1.yaml
kubectl apply -f ./kubernetes/services/service-2.yaml
