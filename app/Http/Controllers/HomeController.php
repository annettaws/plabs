<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller {
    /*
      |--------------------------------------------------------------------------
      | Home Controller
      |--------------------------------------------------------------------------
      |
      | This controller renders your application's "dashboard" for users that
      | are authenticated. Of course, you are free to change or remove the
      | controller as you wish. It is just here to get your app started!
      |
     */

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard to the user.
     *
     * @return Response
     */
    public function index() {
        return view('home');
    }

    public function todo() {
        return view('todo.todo');
    }

    public function localita() {
        return view('localita.localita');
    }

    public function clienti() {
        return view('clienti.clienti');
    }

    public function utenti() {
        return view('utenti.utenti');
    }


    public function tests() {
        return view('tests.tests');
    }

    public function biblios() {
        return view('biblios.biblios');
    }

        public function bibliosBook() {
        return view('biblios.bibliosBook');
    }

        public function laratweetIdex() {
        return view('laratweet.laratweet');
    }
      public function listini() {
        return view('listini.listini');
    }


      public function normative() {
        return view('iso.normative');
    }

      public function pq() {
        return view('iso.pq');
    }

     public function impostazioni() {
        return view('impostazioni.impostazioni');
    }
   public function generatore() {
        return view('generatore.generatore');
    }



    public function current_user(Request $request) {
        $data = ['id' => $request->user()->id, 'email' => $request->user()->email ,'nome' => $request->user()->name ];
        return $data;
    }

}
