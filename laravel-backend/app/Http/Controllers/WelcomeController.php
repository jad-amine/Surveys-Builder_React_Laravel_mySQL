<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;
use App\Models\User;

class WelcomeController extends Controller{
    
    // Fetch surveys
    public function getSurveys($name = null){
        if($name){
            $surveys = Question::where('survey_name', "$name")->get();
        } else{
            // $surveys = DB::table('questions')->select('survey_name')->distinct();
            $surveys = Question::select('survey_name')->distinct()->get();
        };
        
        return response()->json([
            "status" => "success",
            "surveys" => $surveys
        ]);
    }

}
