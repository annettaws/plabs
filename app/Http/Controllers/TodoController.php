<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;

class TodoController extends Controller {

    public function __construct() {
        $this->middleware('auth');
    }

    /**

     *

     * @return Resonse
     */
    public function Index() {

        //return Todo::all()->orderBy('id', 'desc')->get();
        return DB::table('todos')->orderBy('dataDiEsecuzione', 'desc')->get();
    }

    public function tododafare() {

        return Todo::where('done', '=', '0')->orderBy('dataDiEsecuzione', 'desc')->get();
    }

    public function todofatti() {

        return Todo::where('done', '=', '1')->orderBy('dataDiEsecuzione', 'desc')->get();
    }

    public function todoid($id) {

        return $todo = Todo::find($id);
    }

    public function destroy($id) {
        $todo = Todo::find($id);
        $todo->delete();
        $message = 'the Todo cacellato con successo!';
        return $message;
    }

    public function AddNew(Request $request) {
        $todo = new Todo;
        $todo->text = $request->input('text');
        $todo->done = $request->input('done');
        $todo->dataDiEsecuzione = $request->input('dataDiEsecuzione');
        $todo->save();
        return $todo;
    }

    public function agiorna(Request $request, $id) {
        $todo = Todo::find($id);
        $todo->text = $request->input('text');
        $todo->done = $request->input('done');
        $todo->dataDiEsecuzione = $request->input('dataDiEsecuzione');
        $todo->save();
        return $todo;
    }

}
