<?php

namespace App\Http\Controllers;

use App\Models\User;
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
}
