<?php

namespace App\Http\Controllers\book;

use App\Http\Controllers\Controller;
use App\model\biblios\author;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;

class AuthorController extends Controller {

    /**

     *

     * @return Resonse
     */
    public function index() {

    $authorList = Author::orderBy('lastname', 'asc')->orderBy('firstname', 'asc')->get();
    return $authorList;
}


 public function addnewautore(Request $request) {
        $autore = new Author;
        $autore->firstname = $request->input('firstname');
        $autore->lastname = $request->input('lastname');    
        $autore->save();
        return $autore;
    }



        public function agiorna(Request $request, $id) {
        $autore = Author::find($id);
        $autore->firstname = $request->input('firstname');
        $autore->lastname = $request->input('lastname');

        $autore->save();
        return $autore;
    }


       public function destroy($id) {
        $autore = Author::find($id);
        $autore->delete();
        $message = 'the Todo cacellato con successo!';
        return $message;
    }

}
