<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;
use App\Models\User;

class WelcomeController extends Controller{
    
    // Retrieve surveys
    public function getSurveys($id = null){
        if($id){
            $surveys = Question::find($id);
        } else {
            $surveys = Question::all();
        }

        return response()->json([
            "status" => "success",
            "surveys" => $surveys
        ]);
    }
}
