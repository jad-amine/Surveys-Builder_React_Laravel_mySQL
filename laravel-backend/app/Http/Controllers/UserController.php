<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Answer;
use App\Models\Question;

class UserController extends Controller{

    // Save user answer
    public function addAnswer(Request $resquest){
        $user = Auth::user();
        $arrived = json_decode($resquest->response);
        foreach($arrived as $user_answer){
            // $user_answer = json_decode($user_answer);
            $answer = new Answer;
            $answer->user_id = $user->id;
            $answer->question_id = $user_answer->question_id;
            $answer->answer = $user_answer->content;
            $answer->survey_name = $user_answer->survey_name;
            $answer->save();
        }

        return response()->json([
            "status" => "success",
            "content" => $arrived,
            "user_id" => $user->id
        ], 200);
    }

    public function authUser(){
        $user = Auth::user();
        return response()->json([
            "status" => "succes",
            "user" => $user
        ], 200);
    }
}
