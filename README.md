<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Individual Project - Henry Dogs

<p align="left">
  <img height="200" src="./dog.png" />
</p>

## Link 
<p>
<a href="https://app-dogs-henry.vercel.app/" target="_blank"> https://app-dogs-henry.vercel.app/ </a>
</p>    

## Project Objectives

- Build an App using React, Redux, Node, Express, PostgreSQL and Sequelize.
- Affirm and connect the concepts learned in the course.
- Learn best practices.
- Learn and practice GIT workflow.

## Description

The general idea is to create an application in which you can see different dog breeds along with relevant information about them using the external api [the dog api](https://thedogapi.com/) and from it to be able to, among other things:

  - Search for dogs
  - Filter and Sort them
  - Add new dogs

IMPORTANT: For the filtering and sorting functionalities, it was NOT used the external API endpoints that already return filtered or sorted results, instead it was done from scratch.

### Unique Endpoints/Flags that were used

  - GET https://api.thedogapi.com/v1/breeds
  - GET https://api.thedogapi.com/v1/breeds/search?q={raza_perro}
  - 

### Required Technologies:
- [ ] React
- [ ] Redux
- [ ] Node
- [ ] Express
- [ ] Sequelize - PostgreSQL

#### Frontend

An application was developed with React/Redux containing the following screens/routes:


__Landing Page__: contains
- [ ]  Background image representative of the project
- [ ]  Button to enter the home page (`Main Route`)
- [ ]  Side bar with options to enter the home page, the about page or the creation form


__Home Page__: contains
- [ ] Search input to find dog breeds by name
- [ ] Area where you can see the list of dog breeds. Show their:
  - Image
  - Name
  - Temperament
  - Weight
- [ ] Options to filter by:
    - Temperament
    - Existing breed (means the ones coming from the API) or added by us (created via form)
- [ ] Options to sort both ascending and descending dog breeds by:
    - Alphabetical Order
    - Weight
- [ ] Paginated to search and display the following breeds, showing 8 breeds per page.


__Dog breed detail page__: contains
- [ ] The fields shown in the home page for each breed (image, name and temperament)
- [ ] Height
- [ ] Weight
- [ ] Life Span

__Dog breed creation page__: contains
- [ ] __A javascript controlled__ form with the following fields:
  - Name
  - Minimum and Maximum Height 
  - Minimum and Maximum Weight
  - Life Span
- [ ] Possibility to select/add one or more temperaments
- [ ] Button to create a new dog breed

 
#### Database

The database model contains the following entities :

- [ ] Dogs with the following properties:
  - ID 
  - Name 
  - Height
  - Weight
  - Life Span
- [ ] Temperaments with the following properties:
  - ID
  - Name

The relationship between the two entities is many-to-many since one breed of dog can have several "temperaments" simultaneously and, in turn, one "temperament" can correspond to multiple distinct dog breeds.


#### Backend

A Node/Express server was developed with the following routes:

- [ ] __GET /dogs__:
  - Gets a list of dog breeds
  - It return only the data needed for the home page
- [ ] __GET /dogs?name="..."__:
  - Obtains a list of dog breeds that contain the word entered as query parameter
  - If no dog breed exists, an appropriate message is displayed
- [ ] __GET /dogs/{idBreed}__:
  - Obtains the detail of a particular breed of dog.
  - Bring only the data requested in the dog breed detail page
  - Includes associated temperaments
- [ ] __GET /temperament__:
  - Gets all possible temperaments
  - In a first instance they are obtained from the external API and then saved in the database to be used from there
- [ ] __POST /dog__:
  - Receives the data collected from the controlled form of the dog breed creation page by body
  - A breed of dog is created in the database
