# DevOps Deployment for Kubernetes on DigitalOcean

[![GitHub issues](https://img.shields.io/github/issues/nilamadhab47/devops-files-frontend-kubernetes)](https://github.com/nilamadhab47/devops-files-frontend-kubernetes/issues)
[![GitHub license](https://img.shields.io/github/license/nilamadhab47/devops-files-frontend-kubernetes)](https://github.com/nilamadhab47/devops-files-frontend-kubernetes/blob/main/LICENSE)

Streamline your Kubernetes deployment process with this custom npm package designed for use with DigitalOcean. This comprehensive package includes deployment configurations, ingress settings, issuers setup, service definitions, and Dockerfile templates. All files are fully customizable to meet your specific requirements. By leveraging this package, you can effortlessly deploy and manage applications on your Kubernetes cluster hosted on DigitalOcean. Additionally, the package seamlessly integrates SSL/TLS certificate insertion, ensuring a secure environment for your applications.

## Installation

Before proceeding with the installation steps, ensure that you have Chocolatey installed. If not, you can refer to this link for installation instructions: [Install Chocolatey](https://chocolatey.org/install)

### 1. Install doctl - DigitalOcean CLI

To interact with your DigitalOcean resources from the command line, you'll need to install `doctl`.

Follow the instructions here: [Install doctl](https://docs.digitalocean.com/reference/doctl/how-to/install/)

You'll need a DigitalOcean API token to authenticate with the platform. Obtain the token from your DigitalOcean account and use it to log in to `doctl`. Additionally, add the same token as a secret in your repository's settings (Secrets and Variables > Actions).

### 2. Install kubectl - Kubernetes CLI

Install the Kubernetes CLI (`kubectl`) using Chocolatey:

```bash
choco install kubernetes-cli
```

Verify that the installed version is up-to-date: 

```bash
kubectl version --client
```
This step provides you with access to your Kubernetes cluster, allowing you to manage pods, replicas, services, ingresses, and more, for efficient troubleshooting and administration.

### 3. Install the DevOps Files Frontend Kubernetes Package
Install the npm package using:

```bash
npm i devops-files-frontend-kubernetes
```
After a successful installation, execute the following command:

```bash
node .\node_modules\devops-files-frontend-kubernetes\index.js
```

Upon completion, you will find four folders and a Dockerfile in your directory.

Now, navigate to each file and follow the provided instructions to make the necessary adjustments based on your application's requirements.

### Important Reminders
Whenever you make changes to your configuration files, apply them using the following command:

```bash
kubectl apply -f <location_of_your_file>
```

This concise guide outlines the installation and setup process for deploying applications to a Kubernetes cluster on DigitalOcean. By following these steps and customizing the provided files, you can ensure a smooth and efficient DevOps workflow for your projects. Should you have any questions or encounter issues, don't hesitate to refer to the provided GitHub repository or reach out to the community for assistance.

Your feedback and contributions are greatly appreciated, and together, we can continue to enhance and optimize this DevOps workflow for Kubernetes deployments on DigitalOcean.