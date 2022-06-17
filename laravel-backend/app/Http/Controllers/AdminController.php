<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Question;
use Illuminate\Http\Request;

class AdminController extends Controller{
    
    // Retrieve all users
    public function getUsers($id = null){
        if($id){
            $users = User::find($id);
        } else {
            $users = User::all();
        }
        
        return response()->json([
            "status" => "success",
            "users" => $users
        ], 200);
    }

    // Add a survey

    // Fix this issue with json and surveys filling 
    public function store(Request $request){
        $question = new Question;
        $question->type = $request->type;
        $question->content = $request->content;
        $question->possible_answers = $request->possible_answers;
        $question->survey_name = $request->survey_name;
        $question->save();
        return response()->json([
            "status" => "success",
            "message" => "question saved"
        ], 200);
    }
}
