<?php
                    namespace app\Http\Controllers\gen\Tabella;
            use App\Http\Controllers\Controller;
            use Illuminate\Database\Schema\Blueprint;
            use Illuminate\Support\Facades\Schema;
            use Illuminate\Support\Facades\DB;
            use App\model\gen\Tabella\Tabella;

            class TabellaController extends Controller {
        	
      public function getIndex() {
                    return view('gen.Tabella.Tabella');
                    }

            
        public function getLista() {
            return DB::table('Tabella')->orderBy('id', 'desc')->get();
                    }

            
public function getSalva($obj) {
                $data  = json_decode($obj,true);
                $r = new Tabella;
                $r->nome = $data['nome'];

                
                $r->idchiaesterna = $data['idchiaesterna'];

                 $r->save();

            return 'salvato';
                    }

                    
          public function getCreadb() {

                    Schema::create('Tabella', function (Blueprint $table) {
        $table->increments('ID' );
                $table->string('nome' );
                $table->string('idchiaesterna' );
                

        $table->timestamps();
        });

                  
                    }       

          
                

    public function getDestroy($obj) {
         $data  = json_decode($obj,true);
         $id=$data["ID"];
        $deleted = DB::delete("delete from Tabella  where ID = ?",[$id]);
        $message = 'cacellato con successo!';
        return $message;
    }

           
                public function getOgetto($id) {

                    return Tabella::find($id);
                }

            
public function getAggiorna($obj) {
                $data  = json_decode($obj,true);
                $id  = $data["ID"]; 
               

DB::update("update Tabella  set  nome =   ' " . $data[ "nome"] . " ' ,idchiaesterna =   ' " . $data[ "idchiaesterna"] . " '    where ID = ?", [$id]);

            return 'salvato';
                    }





        }

        