pipeline{
    agent any
    tools{nodejs "node"}
    stages{
        stage('Cypress Parallel Tesyt Suite'){
            parallel{
                stage('Slave Node1'){
                    agent{
                        label "remote_node1"
                    }
                    steps{
                        git url: 'https://github.com/bharati-yedave/webdriverUniversity.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triggerAllTest-dashboard-Automationteststore'
                    }
                }
                stage('Slave Node1'){
                    agent{
                        label "remote_node2"
                    }
                    steps{
                        git url: 'https://github.com/bharati-yedave/webdriverUniversity.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triggerAllTest-dashboard-Automationteststore'
                    }
                }
            }
        }
    }
}