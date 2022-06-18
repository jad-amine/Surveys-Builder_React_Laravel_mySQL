<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Answer;
use App\Models\Question;

class UserController extends Controller{

    // Save user answer
    public function addAnswer(Request $resquest){
        $answer = new Answer;
        $answer->user_id = $resquest->user_id;
        $answer->question_id = $resquest->question_id;
        $answer->answer = $resquest->answer;
        $answer->survey_name = $resquest->survey_name;
        $answer->save();

        return response()->json([
            "status" => "success",
            "content" => $answer
        ], 200);
    }

}
