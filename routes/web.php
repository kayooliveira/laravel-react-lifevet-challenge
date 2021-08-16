<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnimalController as Animal;
use App\Http\Controllers\RequestController as RequestController;
use App\Http\Controllers\ExamController as Exam;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

// ROTAS DOS ANIMALS

Route::get('/animal/add',[Animal::class,'create'])->name('animal.create');

Route::post('/animal/add',[Animal::class,'store'])->name('animal.store');

Route::delete('/animal/delete',[Animal::class,'destroy'])->name('animal.destroy');

Route::get('/animal/all',[Animal::class,'index'])->name('animal.index');

// ROTAS DAS REQUESTS

Route::get('/request/add',[RequestController::class,'create'])->name('request.create');

Route::post('/request/add',[RequestController::class,'store'])->name('request.store');

Route::delete('/request/delete',[RequestController::class,'destroy'])->name('request.destroy');

Route::get('/request/all',[RequestController::class,'index'])->name('request.index');

// ROTAS DOS EXAMS

Route::get('/exam/add',[Exam::class,'create'])->name('exam.create');

Route::post('/exam/add',[Exam::class,'store'])->name('exam.store');

Route::delete('/exam/delete',[Exam::class,'destroy'])->name('exam.destroy');

Route::get('/exam/all',[Exam::class,'index'])->name('exam.index');
