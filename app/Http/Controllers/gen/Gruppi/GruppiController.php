<?php
                    namespace app\Http\Controllers\gen\Gruppi;
            use App\Http\Controllers\Controller;
            use Illuminate\Database\Schema\Blueprint;
            use Illuminate\Support\Facades\Schema;
            use Illuminate\Support\Facades\DB;
            use App\model\gen\Gruppi\Gruppi;

            class GruppiController extends Controller {
        	
      public function getIndex() {
                    return view('gen.Gruppi.Gruppi');
                    }

            
        public function getLista() {
            return DB::table('Gruppi')->orderBy('id', 'desc')->get();
                    }

            
public function getSalva($obj) {
                $data  = json_decode($obj,true);
                $r = new Gruppi;
                $r->Nome = $data['Nome'];

                
                $r->Descrizione = $data['Descrizione'];

                 $r->save();

            return 'salvato';
                    }

                    
          public function getCreadb() {

                    Schema::create('Gruppi', function (Blueprint $table) {
        $table->increments('ID' );
                $table->string('Nome' );
                $table->string('Descrizione' );
                

        $table->timestamps();
        });

                  
                    }       

          
                

    public function getDestroy($obj) {
         $data  = json_decode($obj,true);
         $id=$data["ID"];
        $deleted = DB::delete("delete from Gruppi  where ID = ?",[$id]);
        $message = 'cacellato con successo!';
        return $message;
    }

           
                public function getOgetto($id) {

                    return Gruppi::find($id);
                }

            
public function getAggiorna($obj) {
                $data  = json_decode($obj,true);
                $id  = $data["ID"]; 
               

DB::update("update Gruppi  set  Nome =   ' " . $data[ "Nome"] . " ' ,Descrizione =   ' " . $data[ "Descrizione"] . " '    where ID = ?", [$id]);

            return 'salvato';
                    }


        }

        