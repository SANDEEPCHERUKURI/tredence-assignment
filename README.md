# tredence-assignment
tredence assignment for Interview 

You can see two modules in the root project

1. Spring Boot (Tech Used)
   - OpenJdk 11
   - IntelIJ IDE
   - PostGres DB
   - Docker
 
2. Angular UI 
    - Angular CLI 11
    - Bootstrap for CSS
    - TypeScript
    - Node 12
    
#
Running Steps for the Spring - Projects
- Clone the Project
- Open Spring Boot Application
- Build the Project without test cases `mvn clean install -DskipTests=true`
- Install Docker (If it is not installed)
- Just Build the Docker File at project level `docker-compose up`
- After successful run in docker db will get installed in docker lever along the DB tables
- you can test `http://localhost:8080/api` in your local
- In SprintBoot project level you can check the same Data file for checking the format only
- For http POST & GET for Area Chart:  `http://localhost:8080/api/areaChart`
- For http POST & GET for Mobile Chart:  `http://localhost:8080/api/mobileChart`
#
Running Steps for Angular Application

- In angular Project level run : `npm install`
- After successful installation of node modules
- Run this Command :  `npm run start`

You Can see both UI & BackEnd Application will connect to each other and will make server up.
