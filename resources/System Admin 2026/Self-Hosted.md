# 1. Project description:
- This project documents the deployment of Grafana with Prometheus as a data source.
    - Prometheus is an open-source software used for monitoring system resources.  It actively scrapes metrics from targets at specified intervals.
    - Grafana is an open-source web application used to produce interactive analytics and dashboards.  In this project it is used to take the data scraped by Prometheus to produce real-time dashboards for system analysis.  

- Scope of this Document
    - Cloud Infrastructure
        - The design of a VPC, including public and private subnets, route tables and Internet Gateways.
    - Security Strategy
        - Configuration of NACLs and Security Groups to enforce segmentation.
    - Installation Instructions
        - How to install Prometheus on Ubuntu
        - How to install Grafana on Ubuntu
    - Cost Management
        - Cost analysis of running this software.
    - Backup Policy
        - 3-2-1 backup policy for this project.
    - Common Troubleshooting Tips

# 2. AWS VPC setup:
- My VPC utilizes a 10.0.0.0/23 CIDR block (512 IP addresses) to contain two subnets: a internet-facing public subnet and an internal private subnet.

![VPC Screenshot](/resources/System%20Admin%202026/image.png)

- Public Subnet:
    - The internet-facing public subnet utilizes a 10.0.0.0/25 CIDR block (123 usable IP addresses).
    - It contains my Grafana server instance.
    - Has a public route table associated with it.
    - My Internet Gateway is attached to this subnet.

![Public Subnet Screenshot](/resources/System%20Admin%202026/image-1.png)

- Private Subnet:
    - The internal private subnet utilizes a 10.0.1.0/25 CIDR block (123 usable IP addresses).
    - It contains my Prometheus server instance 
    - Has a private route table associated with it.  
    - Used a NAT gateway to install Prometheus to my server instance then deleted it to save budget.

![Private Subnet Screenshot](/resources/System%20Admin%202026/image-2.png)

- The public route table consists of:
    - 0.0.0.0 -> IGW        
        - Allows the Grafana server to access the internet.
    - 10.0.0.0/23 -> local
        - Allows communication between public and private subnets.

![Public Route Table](/resources/System%20Admin%202026/image-3.png)

- The private route table consists of:
    - 0.0.0.0/0 -> NAT (Removed)
        - Allows the Prometheus server to receive updates.
    - 10.0.0.0/23 -> local
        - Allows communication between public and private subnets.

![Private Route Table](/resources/System%20Admin%202026/image-4.png)

- The Public subnet has a NACL that enforces the following:
    - Inbound Rules:
        - SSH (22) from WSU/Home for remote administration.
        - HTTP (80) from WSU/Home for standard web traffic
        - HTTPS (443) from WSU/Home for standard web traffic.
        - Ephemeral Ports (1024 - 65535) to allow return traffic from outbound requests.
        - Grafana (3000) from WSU/Home for Grafana service.
        - Deny All Other Inbound Traffic
    - Outbound Rules: 
        - SSH (22) to Private Subnet for remote administration of internal servers.
        - HTTP (80) to All for updating repositories.
        - HTTPS (443) to All for updating repositories.
        - Ephemeral Ports (1024 - 65535) so Grafana can send data back to user's.
        - Prometheus (9090) to Private Subnet so Grafana can access Prometheus.
        - Deny All Other Outbound Traffic

![Public NACL details](/resources/System%20Admin%202026/image-5.png)

![Public NACL Inbound Rules](/resources/System%20Admin%202026/image-17.png)

![Public NACL Outbound Rules](/resources/System%20Admin%202026/image-7.png)

- The Private subnet has a NACL that enforces the following:
    - Inbound Rules:
        - SSH (22) from Public Subnet for remote administration of internal servers.
        - Ephemeral Ports (1024 - 65535) to allow return traffic from outbound requests.
        - Prometheus (9090) from Public Subnet so Grafana can access Prometheus.
        - Deny All Other Inbound Traffic.
    - Outbound Rules:
        - HTTP (80) to All for updating repositories.
        - HTTPS (443) to All for updating repositories.
        - Ephemeral Ports (1024 - 65535) so Prometheus can send data to Grafana
        - Deny All Other Outbound Traffic

![Private NACL details](/resources/System%20Admin%202026/image-8.png)

![Private NACL Inbound Rules](/resources/System%20Admin%202026/image-9.png)

![Private NACL Outbound Rules](/resources/System%20Admin%202026/image-10.png)

- The Public Subnet has a Security Group that enforces the following:
    - Inbound Rules:
        - SSH (22) from WSU/Home for remote administration.
        - HTTP (80) from WSU/Home for standard web traffic
        - HTTPS (443) from WSU/Home for standard web traffic.
        - Grafana (3000) from WSU/Home for Grafana service.
    - Outbound Rules:
        - Allow All Outbound Traffic

![Public SG details](/resources/System%20Admin%202026/image-11.png)

![Public SG Inbound Rules](/resources/System%20Admin%202026/image-12.png)

![Public SG Outbound Rules](/resources/System%20Admin%202026/image-13.png)

- The Private Subnet has a Security Group that enforces the following:
    - Inbound Rules:
        - SSH (22) from Public SG for remote administration of internal servers.
        - Prometheus (9090) from Public SG to allow Grafana to request data from Prometheus.
    - Outbound Rules:
        - Allow All Outbound Traffic

![Private SG details](/resources/System%20Admin%202026/image-14.png)

![Private SG Inbound Rules](/resources/System%20Admin%202026/image-15.png)

![Private SG Outbound Rules](/resources/System%20Admin%202026/image-16.png)

# 3. AWS instance setup:
- I have two instances.  One to host Grafana, and one to host Prometheus which Grafana pulls data from.  Both instances have the same instance type, AMI, and volume size.  
- I chose to use a t3.micro for my instance type.  This provides each instance with 2 vCPUs and 1 GiB of RAM.  This can handle all the processing needs of Grafana and Prometheus while staying withing budget.
- I chose to use Ubuntu 24.04 LTS as my AMI.  Ubuntu has extensive documention and is an OS I'm familiar with.  
- I chose to use 8 GiB of space for each of my instances.  8 GB provides enough space for the OS, Grafana, Prometheus, and several weeks of data collected by Prometheus.  

# 4. Cost estimates:
- Instance Type Cost: 2 Instances x $0.0104 per hour = $0.0208 per hour
- EIP Cost: 1 EIP x $0.005 per hour = $0.005 per hour
- AMI Cost: $0.00 (Ubuntu 24.04 LTS is free)
- Total: $0.0208 + $0.005 = $0.0258 per hour

- Projected Cost according to Dashboard:

![Screenshot of projected cost according to dashboard](/resources/System%20Admin%202026/image-18.png)

# 5. Installation instructions:
- [Installing Prometheus on Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-prometheus-on-ubuntu-16-04)
- Installing Prometheus (on Instance in the Private Subnet):
    1. Update and Download Prometheus: 
        ```
        sudo apt update
        wget https://github.com/prometheus/prometheus/releases/download/v3.1.0/prometheus-3.1.0.linux-amd64.tar.gz
        ```
    2. Extract and Move Files:
        ```
        tar xvf prometheus-3.1.0.tar.gz
        sudo mv prometheus-3.1.0.linux-amd64/prometheus /usr/local/bin/
        sudo mv prometheus-3.1.0.linux-amd64/promtool /usr/local/bin/
        ```
    3. Create a new User:
        ```
        sudo useradd --no-create-home --shell /bin/false prometheus
        sudo mkdir /etc/prometheus
        sudo mkdir /var/lib/prometheus
        sudo chown prometheus:prometheus /etc/prometheus /var/lib/prometheus
        ```
    4. Make Config file:
        - `sudo nano /etc/prometheus/prometheus.yml`
        ```
        global:
        scrape_interval: 15s

        scrape_configs:
            - job_name: 'prometheus'
                static_configs:
                - targets: ['localhost:9090']

            - job_name: 'node_exporter'
                static_configs:
                - targets: ['localhost:9100']
        ```
    5. Make systemd file to ensure that Prometheus starts automatically:
        - `sudo nano /etc/systemd/system/prometheus.service`
        ```
        [Unit]
        Description=Prometheus
        Wants=network-online.target
        After=network-online.target

        [Service]
        User=prometheus
        Group=prometheus
        Type=simple
        ExecStart=/usr/local/bin/prometheus \
            --config.file /etc/prometheus/prometheus.yml \
            --storage.tsdb.path /var/lib/prometheus/ \
            --web.console.templates=/etc/prometheus/consoles \
            --web.console.libraries=/etc/prometheus/console_libraries

        [Install]
        WantedBy=multi-user.target
        ```
    6. Start Prometheus:
        ```
        sudo systemctl daemon-reload
        sudo systemctl enable --now prometheus
        sudo systemctl status prometheus
        ```

        ![Screenshot of Prometheus Running](/resources/System%20Admin%202026/image-20.png)

    7. Download and Extract Node Exporter
        ```
        wget https://github.com/prometheus/node_exporter/releases/download/v1.8.2/node_exporter-1.8.2.linux-amd64.tar.gz
        tar xvf node_exporter-*.tar.gz
        sudo mv node_exporter-1.8.2.linux-amd64/node_exporter /usr/local/bin/
        ```
    8. Make a systemd file for Node Exporter:
        - `sudo nano /etc/systemd/system/node_exporter.service`
        ```
        [Unit]
        Description=Node Exporter
        Wants=network-online.target
        After=network-online.target

        [Service]
        User=prometheus
        Group=prometheus
        Type=simple
        ExecStart=/usr/local/bin/node_exporter

        [Install]
        WantedBy=multi-user.target
        ```
    9. Start Node Explorer:
        ```
        sudo systemctl daemon-reload
        sudo systemctl enable --now node_exporter
        sudo systemctl status node_exporter
        ```

        ![Screenshot of node_exporter status](/resources/System%20Admin%202026/image-21.png)

- [Installing Grafana on Ubuntu](https://grafana.com/docs/grafana/latest/setup-grafana/installation/debian/)
- Installing Grafana (on Instance in the Public Subnet) :
    1. Install Dependencies
        - `sudo apt-get install apt-transport-https software-properties-common wget`
    2. Verify with GPG key:
        ```
        sudo mkdir -p /etc/apt/keyrings/
        wget -q -O - https://apt.grafana.com/gpg.key | gpg --dearmor | sudo tee /etc/apt/keyrings/grafana.gpg > /dev/null
        ```
    3. Add Repository to Sources List:
        ```
        echo "deb [signed-by=/etc/apt/keyrings/grafana.gpg] https://apt.grafana.com stable main" | sudo tee -a /etc/apt/sources.list.d/grafana.list
        sudo apt-get update
        ```
    4. Install Grafana
        - `sudo apt-get install grafana`
    5. Start Grafana
        ```
        sudo systemctl daemon-reload
        sudo systemctl enable grafana-server
        sudo systemctl start grafana-server
        ```
    6. Check Status:
        - `sudo systemctl status grafana-server`

        ![Screenshot of granfana-server running](/resources/System%20Admin%202026/image-19.png)

    6. Connect Prometheus to Grafana
    - Go to `http://Grafana_Server_IP:3000` in your web browser
    - Login with:
        - default username: admin
        - default password: admin
    - Set New Password
    - In Grafana, go to Connections -> Data Sources.
    - Click Add Data Source and select Prometheus.
    - For the URL, use the Private IP of the Prometheus server

    ![Screenshot of adding a data source in Grafana](/resources/System%20Admin%202026/image-22.png)
    
# 6. Security:
- Network Level Segmentation:
    -  Access is restricted based on the role of the server within the VPC:
        - The Grafana Server (Public): It is the only instance reachable from the public internet, but only via specific authorized IP ranges (Home/WSU) on designated ports (22, 3000).
        - The Prometheus Server (Private): It has no public IP address and only accepts traffic originating from the Public Subnet.
- Remote Administration vs Using the Application
    - Both Servers can be remotely administrated via SSH protocol.
    - The Grafana application can be used via a web browser request to the Grafana Server's public IP on port 3000.
    - The Grafana application requests data from the Prometheus server on port 9090.
- Firewalls
    - Stateless Filtering (NACL): The NACLs are  configured to drop any traffic that doesn't match our management or service ports, protecting against broad scans.
    - Stateful Filtering (Security Groups): Acts as the primary firewall. The Private Security Group specifically references the Public Security Group ID as a source, ensuring that even if a user is on the WSU network, they cannot SSH into Prometheus unless they first jump through the Grafana server.
    - System-level (ufw): Beyond AWS controls, each Ubuntu instance runs ufw (Uncomplicated Firewall) to provide host-level protection.

    - SSH attempts to the Prometheus server must be through the Public subnet.

    ![Screenshot of failed and successful SSH attempts](/resources/System%20Admin%202026/image-24.png)

- Role-Based Access Control. 
    - In Grafana, users are divided into tiers to ensure that a "Viewer" cannot accidentally delete a data source or change an alert.
        - Admin: Full control over data sources, users, and dashboard configurations.
        - Editor: Can create and modify dashboards but cannot change system settings.
        - Viewer: Read-only access to existing dashboards.

    ![Screenshot of Admin access to Grafana](/resources/System%20Admin%202026/image-23.png)

# 7. Software features:
- Prometheus scrapes metric data and communicates it to Grafana across different subnets.
- Grafana's dashboard engine allows real-time view of performance metrics such as CPU utilization, disk I/O, etc.

![Screenshot of Node Exporter Dashboard](/resources/System%20Admin%202026/image-26.png)

- Grafana allows for adhoc data exploration using PromQL to troubleshoot incidents.

![Screenshot of PromQL Query](/resources/System%20Admin%202026/image-25.png)

- Grafana can monitor for "Critical" States. In a production environment, these "critical" states would send out warning notifications based on alert rules setup by admins.

![Screenshot of Alert Rule Creation](/resources/System%20Admin%202026/image-27.png)

# 8. Backup policy / disaster recovery:
- Backup should include:
    - Prometheus Data (`/var/lib/prometheus`) 
        - Contains historical metrics.  
    - Grafana Data (`/var/lib/grafana`)
        - Contains the SQLite database for users, dashboards, and data sources
    - System state (`/etc/`)
        - Ensures we don't have to reconfigure software manually after a restore

- Amount of Data to Backup
    - OS and Binaries: ~3 GB per instance
    - Prometheus Metrics: ~150 MB per week

- Backup Strategy
    - 1st copy is live on the AWS instants
    - 2nd copy is stored in AWS S3 bucket
    - 3rd copy stored locally using an automated bash script.

- Estimated Recovery Time
    - ~30 minutes
    - Since we are using AWS, if an instance fails, we just need to make a new instance from the latest snapshot.

- Estimated Time to Recovery
    - ~24 hours
    - In a worst-case scenario, we would only lose a day's worth of monitoring data, which is acceptable for a small project like this.  

# 9. Common troubleshooting:
- Firewalls
    - Ensure port 3000 (Grafana), port 9090 (Prometheus), and Ephemeral Port rules are correctly configured.  Grafana and Prometheus cannot communicate without these.  
- Prometheus Scraping
    - Ensure that the `scrape_interval` in `prometheus.yml` is set to an interval that is sustainable for the volume size you use (8 GB in this guide).  
    - If this guide is followed exactly, prometheus should scrape in very sustainable intervals (every 15s).

# Citations
 - [Deploying Grafana on an AWS EC2 Instance](https://dev.to/dhayv/deploying-grafana-on-an-aws-ec2-instance2025-3li8)
 - [AWS Docs on Grafana](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-onboard-query-standalone-grafana.html)
 - [Installing Prometheus on Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-prometheus-on-ubuntu-16-04)
 - [Installing Grafana on Ubuntu](https://grafana.com/docs/grafana/latest/setup-grafana/installation/debian/)