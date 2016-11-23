<?php

namespace App\Http\Controllers\book;

use App\Http\Controllers\Controller;
use App\model\biblios\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;

class BookController extends Controller {


  public function index() {

	$bookList = Book::orderBy('title', 'asc')->with('author')->get();
    return $bookList;
}

 public function addnewbook(Request $request) {
        $book = new Book;
        $book->title = $request->input('title');
        $book->author_id = $request->input('author_id');    
        $book->save();
        return $book;
    }


        public function agiorna(Request $request, $id) {
        $book = Book::find($id);
        $book->title = $request->input('title');
        $book->author_id = $request->input('autore.id');

        $book->save();
        return $book;
    }



       public function destroy($id) {
        $book = Book::find($id);
        $book->delete();
        $message = 'the Todo cacellato con successo!';
        return $message;
    }

}
