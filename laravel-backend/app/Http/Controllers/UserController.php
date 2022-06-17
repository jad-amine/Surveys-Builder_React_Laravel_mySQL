<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller{

    public function addAnswer(){
        return response()->json([
            "status" => "success",
            "message" => "Answer added"
        ], 200);
    }
}
