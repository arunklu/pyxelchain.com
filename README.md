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

| Branch | Domain |  Need VPN | Deployment Type | AWS server Name | IP Type | Deployment Code Path | Dockerfile app type | 
| --- | --- | --- | --- | --- | --- | --- | --- |
| staging | https://pyxelchain.com-stg.gameficap.com/ | Y | EC2 Instance | website-services-staging | dynamic | (home folder)/websites/pyxelchain_website | node:lts-alpine:16 |
| main | https://pyxelchain.com/ | N | EC2 Instance | pyxelchain.com-v2 | dynamic | (home folder)/websites/pyxelchain_website | node:lts-alpine:16 |

- Strapi Instance : https://pyxiscms.gameficap.com/admin
- Publishing contents from Strapi to Pyxelchain.com


![Strapi Content Publishing](/../main/DevOps/docs_images/strapi_publish_content.png?raw=true)

- Pyxelchain architectural blueprint 

![Strapi Content Publishing](/../main/DevOps/docs_images/pyxelchain_archi_blueprint.png?raw=true)

