<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $todos = Todo::all();

        return $todos;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function register(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function viewer(string $id)
    {
        $todo = Todo::findOrFail($id);

        return $todo;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
