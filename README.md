## Build Instructions

- `npm i`
- `cp .env.example .env` and ask a dev team member for the strings
- `npm run build`

## Directory Structure

The top level directory structure will be as follows:

- assets - global static assets such as images, svgs, company logo, etc.
- components - global shared/reusable components, such as layout (wrappers, navigation), form components, buttons
- modules - JavaScript modules (all components under specific page should go here, e.g. **modules/dashboard/component.tsx** will contain components rendered in **pages/dashboard.tsx**)
- store - Global Redux store
- utils - Utilities & helper functions and the like
- pages - NextJS page files
- graphql - Apollo/GraphQL files can be found

## Naming convensions

- `.ts` - utility functions or config files will be follow `camelCase.ts`
- `.tsx` - files that holds react components
  - `file name` - should follow `kebab-case.{tsx|ts|js}`

## Path aliasing

Added path aliasing **(@folder-name)** is used to easily determine which files were imported locally and from library, this is very helpful for better organization of imports. Library imports should come first then local.

## Graphql codegen

Running **graphql-codegen** requires you to add **.env** file with `NEXT_PUBLIC_API_URL`'s value as your graphql endpoint. After doing so, you can do `npm run generate:types` which will auto generate the typescript definitions for you.

## Setting up husky, lint-staged

- **husky** is already included under dev dependencies just `npm install` and `.husky` directory will be generated for you.
- **lint-staged** has to be manually setup in order to avoid unexpected behavior when running the script (see `.husky/pre-commit`)

## We use this tools

- [ESLint](https://eslint.org/docs/user-guide/configuring/)
- [Husky](https://typicode.github.io/husky/#/)
- [Prettier](https://prettier.io/)
- [Lint Staged](https://github.com/okonet/lint-staged)
- [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)
- [graphql-codegen](https://www.graphql-code-generator.com/)

### [Structure reference](https://www.taniarascia.com/react-architecture-directory-structure)

## DEVOPS Documentation

- CI/CD information

| Branch  | Domain                                    | Need VPN | Deployment Type | AWS server Name          | IP Type | Deployment Code Path                      | Dockerfile app type |
| ------- | ----------------------------------------- | -------- | --------------- | ------------------------ | ------- | ----------------------------------------- | ------------------- |
| staging | https://pyxelchain.com-stg.gameficap.com/ | Y        | EC2 Instance    | website-services-staging | dynamic | (home folder)/websites/pyxelchain_website | node:lts-alpine:16  |
| main    | https://pyxelchain.com/                   | N        | EC2 Instance    | pyxelchain.com-v2        | dynamic | (home folder)/websites/pyxelchain_website | node:lts-alpine:16  |

- Environment Variables

  | Name                         | DEV | STAGING | PROD            |
  | ---------------------------- | --- | ------- | --------------- |
  | NEXT_PUBLIC_BASE_URL         | TBD | TBD     | AWS PARAM STORE |
  | NEXT_PUBLIC_API_URL          | TBD | TBD     | AWS PARAM STORE |
  | NEXT_PUBLIC_ACCESS_TOKEN     | TBD | TBD     | AWS PARAM STORE |
  | NEXT_PUBLIC_BUTTONDOWN_TOKEN | TBD | TBD     | AWS PARAM STORE |

- Running the app standalone

  sudo cp /DevOps/env_latest.txt .env && node --version && npm --version && npm i --legacy-peer-deps && npm run build && npm run dev

- Running the app using docker-compose

| Docker Compose File     | Run Command                                     | Setup Description                                                                                                                          |
| ----------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| docker-compose.yml      | docker-compose up -d                            | - this will run the app using the nginx network. This will need the jwilder/nginx and jrcs/letsencrypt-nginx-proxy-companion docker images |
| docker-compose-prod.yml | docker-compose -f docker-compose-prod.yml up -d | - this will run the app using the nginx network. This will need the jwilder/nginx and jrcs/letsencrypt-nginx-proxy-companion docker images |

- Strapi Instance : https://strapi-pyxelchain.gameficap.com/admin
- Publishing contents from Strapi to Pyxelchain.com

![Strapi Content Publishing](/../main/DevOps/docs_images/strapi_publish_content.png?raw=true)

- Pyxelchain architectural blueprint

![Strapi Content Publishing](/../main/DevOps/docs_images/pyxelchain_archi_blueprint.png?raw=true)

# terraform the project

Pre-requisites

1.  Request from DEVOPS team AWS access and secret key
2.  Very important! You can't use "us-east-1" region coz that's our main region.
3.  You need to provide the terraform plan snapshot or ansi file. You can run the following
    commands to generate these files: - terraform plan -out bpp-tf-plan.plan - terraform show bpp-tf-plan.plan > tfplan.ansi
    Terraform variables
4.  On the project folder root folder, you can go to the "terraform-contract-registry" folder and define the following:
    - variable "aws_region" { default = "us-east-2" }
      - example using ohio region
    - variable "aws_subregion_a" { default = "us-east-2a" }
      - example using ohio region
    - variable "instance_ami" { default = "ami-06c7d6c0987eaa46c" }
      - can used this in case you want ubuntu OS
    - variable "aws_access_key" { default = "" }
      - need to request from DEVOPS team
    - variable "aws_secret_key" { default = "" }
      - need to request from DEVOPS team
    - variable "github_personal_access_token" { default = "" }
      - need to request from DEVOPS team
    - variable "github_project" { default = "" }
      - so the syntax to clone is like this git clone https://<personal_access_token>@github.com/Pyxelchain/<github_project>.git
    - variable "pyxelchain-domain" { default = "" }
      - we will only be using gameficap.com route 53, example pyxelchain-tf.pyxistf.com
5.  Once all variable.tf entries are defined you can run the following command:
    - terraform init
    - terraform plan -out pyxelchain-com.plan
    - terraform show pyxelchain-com.plan > tfplan.ansi
6.  Need to submit the tfplan.ansi to DevOps team for review and approval.
7.  Before performing the last step below, need item 3 approval from DevOps Team.
    - terraform apply
8.  Before inputting "yes", please review the logs and compare from step 2 that all are the same.
