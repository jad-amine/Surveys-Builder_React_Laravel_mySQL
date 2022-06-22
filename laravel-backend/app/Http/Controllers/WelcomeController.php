<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Survey;
use App\Models\Question;
use App\Models\Choice;
use App\Models\User;

class WelcomeController extends Controller{
    
    // Fetch surveys
    public function getSurveys($id = null){
        if($id){
            $survey = Survey::find($id);
            $questions = $survey->questions;
            $choices = [];
            foreach($questions as $question){
                $choices[] = $question->choices;
            };
            return response()->json([
                "status" => "success",
                "survey" => $survey
            ], 200);
        } else{
            $surveys = Survey::all();

            // Get surveys questions
            $questions = [];
            foreach($surveys as $survey){
                $questions[] = $survey->questions;
            }
            
            // Get questions choices
            $choices = [];
            for ($i=0; $i<count($questions); $i++){
                foreach($questions[$i] as $question){
                    $choices[] = $question->choices;
                }
            }

            return response()->json([
                "status" => "success",
                "surveys" => $surveys,
            ]);
        }
    }
}
