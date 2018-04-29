# Fullstack Test - Canoa Digital

This repository contains the project developed according to the [specifications](htpps://github.com/cristianopacheco/canoa-digital-test/specifications.pdf) requested.

In the Backend was developed a crud of vehicles with Laravel and developed a Single Page Application with React in the frontend to consume the webservice.

## Features

1. Client side
    * [React.js](https://github.com/facebook/react) project created with [create-react-app](https://github.com/facebook/create-react-app) template
    * Route management with [React Router](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
    * [Semantic UI React](https://github.com/Semantic-Org/Semantic-UI-React) framework css
    * HTTP requests with [Axios](https://github.com/mzabriskie/axios)
    * [Standard](https://github.com/standard/standard) style guide
    
2. Server side
    * [Laravel 5.5](https://github.com/laravel/laravel/tree/v5.5.40)
    * [Laravel-Cors](https://github.com/barryvdh/laravel-cors)

## Prerequisites

Make sure you have installed **Node** and **NPM** (latest versions) as well as **PHP 7** with **Sqlite driver**.

## Installation

### Cloning

These commands will download the repository and prepare it for you.

```ssh
git clone --depth 1 -b master git@github.com:cristianopacheco/canoa-digital-test.git
```

### Setup

1. Client side - this is a React.js project
	* With Terminal `cd client && npm i && npm start`.
2. Server side - this is a Laravel 5.5 project
	* With Terminal:
        * Navigate to **server** folder and then:
        * `composer install` to install Laravel and third party packages
        * `touch database/database.sqlite` to create an empty database file
        * `cp .env.example .env` to configure installation
        * `php artisan key:generate` to generate unique key for the project
        * `php artisan migrate` to create all the tables
        * `php artisan db:seed` to fill the tables with fake data
        * `php artisan serve` to serve application on localhost:8000

## Usage

1. Client side
	* Your application will be available on **http://localhost:3000**
2. Server side
	* API endpoint is **http://localhost:8000/api**

## Testing

Navigate to **server** folder and run the composer test script

``` bash
$ composer test
```

## License

Licensed under the MIT license.