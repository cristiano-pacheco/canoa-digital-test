<?php

use Faker\Generator as Faker;

$factory->define(\App\Vehicle::class, function (Faker $faker) {
    return [
        'vehicle' => $faker->text($maxChars = 255),
        'brand' => $faker->text($maxChars = 60),
        'year' => $faker->year(),
        'description' => $faker->sentence(),
        'sold' => $faker->boolean,
    ];
});
