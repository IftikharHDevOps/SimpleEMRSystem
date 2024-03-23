
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

## How to Deploy

This project leverages AWS resources provisioned through Terraform. To successfully deploy this project, specific AWS configurations and permissions are required. Below are the steps and prerequisites for deployment.

### Prerequisites:

1. **AWS Account:** You must have an AWS account. If you don't have one, you can sign up at https://aws.amazon.com/.
2. **IAM User with Necessary Permissions:** An IAM user with permissions to manage VPC, EC2, RDS, and Secrets Manager is required. Ensure the IAM user has the `AmazonRDSFullAccess`, `AmazonEC2FullAccess`, `AmazonVPCFullAccess`, and `SecretsManagerReadWrite` policies attached. More granular permissions can be set based on security best practices.
3. **Access Keys for the IAM User:** Generate access keys (access key ID and secret access key) for the IAM user. These keys will be used by Terraform to provision AWS resources.
4. **AWS CLI:** Install and configure the AWS CLI with your IAM user credentials. Follow the installation guide here: https://aws.amazon.com/cli/.
5. **Terraform Installed:** Ensure Terraform is installed on your machine. You can download it from https://www.terraform.io/downloads.html.
6. 

### Deployment Steps:

### Prerequisites:

1. **AWS Account:** You must have an AWS account. If you don't have one, you can sign up at https://aws.amazon.com/.
2. **IAM User with Necessary Permissions:** An IAM user with permissions to manage VPC, EC2, RDS, and Secrets Manager is required. Ensure the IAM user has the `AmazonRDSFullAccess`, `AmazonEC2FullAccess`, `AmazonVPCFullAccess`, and `SecretsManagerReadWrite` policies attached. More granular permissions can be set based on security best practices.
3. **Access Keys for the IAM User:** Generate access keys (access key ID and secret access key) for the IAM user. These keys will be used by Terraform to provision AWS resources.
4. **AWS CLI:** Install and configure the AWS CLI with your IAM user credentials. Follow the installation guide here: https://aws.amazon.com/cli/.
5. **Terraform Installed:** Ensure Terraform is installed on your machine. You can download it from https://www.terraform.io/downloads.html.

### Deployment Steps:

1. **Clone the Repository:**
   Clone this repository to your local machine to get started. Use the command:
   git clone <repository-url>
2. **Configure AWS CLI:**
    If you haven't already configured the AWS CLI with your IAM user credentials, do so by running:
    aws configure
    Enter your AWS Access Key ID, Secret Access Key, and default region when prompted.
3. **Navigate to the Terraform Directory:**
    Change to the directory containing the Terraform configuration files within the cloned repository:
    cd path/to/terraform
4. **Initialize Terraform Workspace:**
    Initialize the Terraform workspace, which will download the necessary providers and initialize the backend. Run:
    terraform init
5. **Review Terraform Plan:**
    (Optional) To see what resources Terraform will create, execute the command:
    terraform plan
    This step requires certain predefined secrets and configurations, as mentioned in the prerequisites.
6. **Apply Terraform Configuration:**
    Apply the Terraform configuration to provision the AWS infrastructure. This step will create resources based on the Terraform files and requires manual confirmation:
    terraform apply
Type `yes` when prompted to proceed with the creation of resources.

### Important Considerations:

- The `terraform apply` command may fail if the prerequisites, especially the IAM user's permissions and the AWS CLI configuration, are not correctly set up.
- Ensure you have a strategy for managing Terraform state, especially when working in a team or deploying to production environments.
- Regularly review your AWS resources and Terraform configurations for security and cost optimization.

By following these steps and ensuring the prerequisites are met, you can deploy the Simple EMR System project in your AWS environment.

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

