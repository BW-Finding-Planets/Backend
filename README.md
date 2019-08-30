# Finding Planets Backend API

## Description

Nasa recently launched a new planet hunting telescope. I would like to create an app that lets users participate in searching for planets around other stars using their own computer.

- The most important feature is going to be the light curves for each star.
- Star name/index, distance, brightness, spectrum, metallicity, and variability are going to be important as well.
- A list of planets for each star will be needed for training and validation.

## Set Up

- Clone repository
- cd into root folder
- npm i to install dependencies

## Testing

- Use jest to test endpoints

---

# Endpoints

## Base URL/Deployed App

> https://finding-planets.herokuapp.com

---

## Users:

> **GET** a list of users `/users/`

> **GET** a user by id `/users/:id`

> **POST** register `/auth/register`

> **POST** login `/auth/login`

> **PUT** update user by id `/users/:id`

> **DELETE** delete user by id `/users/:id`

---

## Stars:

> **GET** a list of stars `/stars/`

> **GET** a star by starId `/stars/:id`

---

## Planet Likelyhood Voting:

> **GET** the voting results for each star `/candidate/`

> **PUT** a voting value to a planet being "veryLikely" at a star ID : `/candidate/:id/veryLikely`

> **PUT** a voting value to a planet being "someWhatLikely" at a star ID : `/candidate/:id/someWhatLikely`

> **PUT** a voting value to a planet being "neutralLikely" at a star ID : `/candidate/:id/neutralLikely`

> **PUT** a voting value to a planet being "someWhatUnLikely" at a star ID : `/candidate/:id/someWhatUnLikely`

> **PUT** a voting value to a planet being "veryUnLikely" at a star ID : `/candidate/:id/veryUnLikely`
