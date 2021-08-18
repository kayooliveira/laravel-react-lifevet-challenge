<?php

namespace Database\Seeders;

use Database\Factories\ExamFactory;
use Illuminate\Database\Seeder;
use App\Models\Exam;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        Exam::create([
            'label' => 'Hemograma',
            'description' => 'Hemograma',
        ]);
        Exam::create([
            'label' => 'Cultura de Fezes',
            'description' => 'Cultura de Fezes',
        ]);
        Exam::create([
            'label' => 'EAS',
            'description' => 'EAS',
        ]);
    }
}
