<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TodoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $todos = [
            [
                'title' => 'Task 1',
                'priority' => 1,
                'content' => 'Content for Task 1',
                'isDone' => false,
            ],
            [
                'title' => 'Task 2',
                'priority' => 2,
                'content' => 'Content for Task 2',
                'isDone' => true,
            ],
            [
                'title' => 'Task 3',
                'priority' => 3,
                'content' => 'Content for Task 3',
                'isDone' => false,
            ],
        ];
        
        DB::table('todos')->insert($todos);
    }
}
