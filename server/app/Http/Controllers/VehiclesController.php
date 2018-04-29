<?php

namespace App\Http\Controllers;

use App\Http\Requests\VehicleRequest;
use App\Vehicle;

class VehiclesController extends Controller
{
    /**
     * @var Vehicle
     */
    private $model;

    public function __construct()
    {
        $this->model = app()->make(Vehicle::class);
    }

    /**
     * Display a listing of vehicles.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $vehicles = $this->model->paginate(10);

        return response()->json($vehicles);
    }

    /**
     * Display the specified vehicle.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $vehicle = $this->model->find($id);

        if (!$vehicle) {
            return response()->json([
                'messages' => 'Vehicle not found.'
            ], 404);
        }

        return response()->json([
            'data' => $vehicle
        ], 200);
    }

    /**
     * Store a newly created vehicle in storage.
     *
     * @param VehicleRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(VehicleRequest $request)
    {
        $vehicle = $this->model->create($request->all());

        return response()->json([
            'data' => $vehicle
        ], 201);
    }

    /**
     * Update the specified product in storage.
     *
     * @param VehicleRequest $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(VehicleRequest $request, $id)
    {
        $vehicle = $this->model->find($id);

        if (!$vehicle) {
            return response()->json([
                'messages' => 'Vehicle not found.'
            ], 404);
        }

        $vehicle->update($request->all());

        return response()->json([
            'data' => $vehicle
        ], 200);
    }

    /**
     * Remove the specified vehicle from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete($id)
    {
        $vehicle = $this->model->find($id);

        if (!$vehicle) {
            return response()->json([
                'messages' => 'Vehicle not found.'
            ], 404);
        }

        $vehicle->delete();

        return response()->json([], 204);
    }
}
