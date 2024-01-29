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
        $todos = Todo::orderBy('id', 'desc')->get();
    
        return $todos;
    }
    

    /**
     * Store a newly created resource in storage.
     */
    public function register(Request $request)
    {
        $todos = new Todo();
        $todos->title = $request->title;
        $todos->priority = $request->priority;
        $todos->content = $request->content;
        $todos->isDone = $request->isDone;
        $todos->save();
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
