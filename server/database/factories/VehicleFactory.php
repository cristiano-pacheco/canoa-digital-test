<?php

use Faker\Generator as Faker;

$factory->define(\App\Vehicle::class, function (Faker $faker) {
    return [
        'vehicle' => $faker->word,
        'brand' => $faker->word,
        'year' => $faker->year(),
        'description' => $faker->sentence(),
        'sold' => $faker->boolean,
    ];
});
