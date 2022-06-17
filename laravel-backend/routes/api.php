<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;

// Authenticate User
Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});


Route::controller(WelcomeController::class)->group(function(){
    Route::get('/', 'welcome');
});


// Admin Routes
Route::middleware("role.admin")->group(function(){
    Route::controller(AdminController::class)->group(function () {
        Route::get('users/{id?}', 'getUsers');
        Route::post('survey', 'store');
        Route::delete('item/{id}', 'destroy');
    }); 
});