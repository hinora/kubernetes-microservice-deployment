npm --prefix ./node-k8s-1 install
npm --prefix ./node-k8s-2 install
npm --prefix ./node-k8s-proxy install
docker rmi hinora/service-1
docker rmi hinora/service-2
docker rmi hinora/service-proxy
npm run build --prefix node-k8s-1
npm run build --prefix node-k8s-2
npm run build --prefix node-k8s-proxy
docker image push hinora/service-1
docker image push hinora/service-2
docker image push hinora/service-proxy