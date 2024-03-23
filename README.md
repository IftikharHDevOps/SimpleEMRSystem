
# SimpleEMRSystem

This demo project showcases my AWS knowledge, focusing on deploying a basic Electronic Medical Records (EMR) system. The project includes setting up an AWS infrastructure using Terraform and developing a Node.js application that serves a simple user interface.

# Project Architecture

The architecture of the Simple EMR System is designed for scalability and reliability, using AWS services to ensure efficient data handling and application delivery.

# Components:
User Interface: A simple, intuitive UI for interacting with the EMR system.

- Application Load Balancer (ALB): Distributes incoming application traffic across multiple targets, such as EC2 instances, in multiple Availability Zones.
- EC2 Instances: Hosts the application logic and serves the user interface. EC2 instances are scaled horizontally to manage load efficiently.
- RDS Instance: A PostgreSQL database instance for storing patient records and other EMR data. Ensures data persistence and security.
- Internet Gateway (IG): Enables communication between instances in your VPC and the internet.

# AWS Infrastructure Setup with Terraform
This project uses Terraform for infrastructure as code to provision and manage AWS resources. The setup includes:

- VPC configuration for network isolation.
- EC2 instances for application deployment.
- An RDS instance for the database layer.
- Security Groups to control access to EC2 instances and the RDS database.

# How to Deploy:
- Clone the Repository: Clone this repo to your local machine to get started.
- Initialize Terraform: Navigate to the terraform directory and run terraform init to initialize the Terraform workspace.
- Apply Terraform Configuration: Execute terraform apply to create the AWS infrastructure as defined in the Terraform configuration files.

# Application Details
The Node.js application serves a simple web interface for interacting with the EMR system. It includes:
- A basic web page (index.html) served by Express.js.
- A server (server.js) configured to connect to the RDS instance for database operations (planned for future implementation).

# Running the Application:
- Ensure Node.js is installed on your EC2 instances.
- Navigate to the project directory and run node src/server.js to start the application.

# Future Enhancements
- Database Integration: Future development will include integrating the application with the AWS RDS instance for robust data management capabilities.
- CRUD Operations: Implementing CRUD operations for managing EMR data, allowing users to add, retrieve, update, and delete patient records.

# Architecture  Diagram
```mermaid
graph LR
    UI(User Interface) -->|Requests| ALB(Application Load Balancer)
    ALB --> EC2_1(EC2 Instance 1)
    ALB --> EC2_2(EC2 Instance 2)
    EC2_1 -->|Read/Write| RDS(RDS Instance)
    EC2_2 -->|Read/Write| RDS
    subgraph "AWS Cloud"
    ALB
    EC2_1
    EC2_2
    RDS
    end
    IG(Internet Gateway) --> ALB
    subgraph "User"
    UI
    end
    subgraph "Internet"
    IG
    end

