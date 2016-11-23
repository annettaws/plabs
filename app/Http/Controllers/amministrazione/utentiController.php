<?php

namespace App\Http\Controllers\amministrazione;
use App\User as U;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\model\amministrazione\cliente as C;
class utentiController extends Controller {

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function getIndex() {
        var_dump("getIndex");
    }


        public function getListaUtenti() {
            $l = new U();
            return $l->all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */

     public function postAddNew(Request $request) {

        $generic = new C();
        $generic->titolo = $request->input('titolo');
        $generic->name = $request->input('name');
        $generic->cognome = $request->input('cognome');
        $generic->email = $request->input('email');
        $generic->tel = $request->input('tel');
        $generic->cell = $request->input('cell');
        $generic->fax = $request->input('fax');
        $generic->user_id = $request->input('user_id');
        $generic->follows_user_id = $request->input('follows_user_id');
     
        $generic->save();
        return $generic;
    }


    public function getClienteId($id) {

        return  C::find($id);
    }

    public function deleteDestroy($id) {
        $c = C::find($id);
        $c->delete();
        $message = 'the Todo cacellato con successo!';
        return $message;
    }

   
}
