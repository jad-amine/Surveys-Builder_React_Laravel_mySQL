<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Answer;
use App\Models\Question;
use App\Models\Choice;
use App\Models\Survey;
use Illuminate\Http\Request;

class AdminController extends Controller{
    
    // Retrieve all users
    public function answers($survey_name){
        $questions = Question::where('survey_name', "$survey_name")->get();
        $collection = [];
        foreach($questions as $question){
            $collection[] = $question->answers;
        }
        return response()->json([
            "status" => "success",
            "questions" => $questions,
            // "answers" => $collection
        ]);
    }

    // Store survey
    public function storeSurvey(Request $request){
        $survey = new Survey;
        $survey->surveyTitle = $request->surveyTitle;
        $survey->save();
        return response()->json([
            "status" => "success",
            "survey" => $survey
        ], 200);
    }

    // Store questions 
    public function storeQuestion(Request $request){
        $question = new Question;
        $question->type = $request->type;
        $question->label = $request->label;
        $question->survey_id = $request->survey_id;
        $question->save();
        return response()->json([
            "status" => "success",
            "question" => $question
        ], 200);
    }

    // Store choice 
    public function storeChoice(Request $request){
        $choice = new Choice;
        $choice->choice = $request->choice;
        $choice->question_id = $request->question_id;
        $choice->save();
        return response()->json([
            "status" => "success",
            "choice" => $choice
        ], 200);
    }
}
