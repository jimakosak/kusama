The task consists of creating an application for observing the kusama network https://kusama.network/ and the tooling for deploying it on a kubernetes platform. The system should monitor a list of given accounts and must sense if an account runs out of funds (under a configurable threshold), triggering alerts accordingly.
The solution should be uploaded to a github repo.

1.- Develop a simple Typescript/NodeJS application which monitors the kusama chain, or extract that functionality from an already existing project: https://github.com/w3f/polkadot-watcher-transaction#monitoring-features.

2.- Create a Helm chart for deploying it. Add as many resources as you think could be necessary for using it with the prometheus-operator, feel free to keep it simple: https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack.
IMPORTANT: Involve also the AlertManager and define meaningful alerts.

3.- Provide a handy way to deploy the whole setup in a local environment such as kind or minikube. It must work (almost) out of the box.

Useful links:

polkadotJs library (raccomended, Nodejs + typescript): https://polkadot.js.org/docs/
polkadotJs dashboard: https://polkadot.js.org/apps/#/explorer
testnet: https://polkadot.network/blog/westend-introducing-a-new-testnet-for-polkadot-and-kusama/
