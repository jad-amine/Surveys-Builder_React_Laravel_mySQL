<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WelcomeController;

Route::controller(WelcomeController::class)->group(function(){
    Route::get('/', 'welcome');
});