<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;
use App\Http\Requests;

class UserController extends Controller {

    public function getList() {
        return \App\User::all();
    }

    public function dumpRequest(Request $request) {
        $value = $request->cookie('cookieName');
        var_dump($value);
    }

}
