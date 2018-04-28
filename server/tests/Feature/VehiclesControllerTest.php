<?php

namespace Tests\Feature;

use App\Vehicle;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class VehiclesControllerTest extends TestCase
{
    use DatabaseMigrations;

    public function test_can_list_vehicles()
    {
        factory(Vehicle::class)->times(2)->create();

        $response = $this->get('/api/vehicles');

        $response->assertStatus(200);

        $response->assertJsonStructure([
            'data' => ['*' => $this->getContract()]
        ]);
    }

    public function test_can_create_vehicle()
    {
        $vehicle = factory(Vehicle::class)->make();

        $payload = [
            'vehicle' => $vehicle->vehicle,
            'brand' => $vehicle->brand,
            'year' => $vehicle->year,
            'description' => $vehicle->description,
            'sold' => $vehicle->sold,
        ];

        $response = $this->json('POST', '/api/vehicles', $payload);

        $response->assertStatus(201);

        $response->assertJsonStructure(['data' => $this->getContract()]);

        $response->assertJsonFragment($payload);

        $this->assertDatabaseHas('vehicles', $payload);
    }

    public function test_can_show_vehicle()
    {
        $vehicle = factory(Vehicle::class)->create();

        $response = $this->json('GET', '/api/vehicles/1');

        $response->assertStatus(200);

        $response->assertJsonStructure(['data' => $this->getContract()]);

        $response->assertJsonFragment([
            'vehicle' => $vehicle->vehicle,
            'brand' => $vehicle->brand,
            'year' => $vehicle->year,
            'description' => $vehicle->description,
            'sold' => $vehicle->sold ? '1' : '0',
        ]);
    }

    public function test_can_update_vehicle()
    {
        factory(Vehicle::class)->create();

        $vehicle = factory(Vehicle::class)->make();

        $payload = [
            'vehicle' => $vehicle->vehicle,
            'brand' => $vehicle->brand,
            'year' => $vehicle->year,
            'description' => $vehicle->description,
            'sold' => $vehicle->sold,
        ];

        $response = $this->json('PUT', '/api/vehicles/1', $payload);

        $response->assertStatus(200);

        $response->assertJsonStructure(['data' => $this->getContract()]);

        $response->assertJsonFragment($payload);

        $this->assertDatabaseHas('vehicles', $payload);
    }

    public function test_can_delete_vehicle()
    {
        factory(Vehicle::class)->create();

        $response = $this->json('DELETE', '/api/vehicles/1');

        $response->assertStatus(204);

        $this->assertDatabaseMissing('vehicles', ['id' => 1]);
    }

    /**
     * @dataProvider requestUrlProvider
     */
    public function test_get_404_when_vehicle_dont_exist($method, $url, $data = [])
    {
        $response = $this->json($method, $url, $data);

        $response->assertStatus(404);

        $response->assertJson(['messages' => 'Vehicle not found.']);
    }

    /**
     * Request Url provider.
     *
     * @return array
     */
    public function requestUrlProvider()
    {
        return [
            ['GET', '/api/vehicles/1'],
            [
                'PUT',
                '/api/vehicles/1',
                [
                    'vehicle' => 'vehicle',
                    'brand' => 'brand',
                    'year' => 2000,
                    'description' => 'description',
                    'sold' => true,
                ]
            ],
            ['DELETE', '/api/vehicles/1'],
        ];
    }

    private function getContract()
    {
        return [
            'id',
            'vehicle',
            'brand',
            'year',
            'description',
            'sold',
            'created_at',
            'updated_at'
        ];
    }
}
