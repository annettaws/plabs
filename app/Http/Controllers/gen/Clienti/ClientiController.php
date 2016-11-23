<?php
                    namespace app\Http\Controllers\gen\Clienti;
            use App\Http\Controllers\Controller;
            use Illuminate\Database\Schema\Blueprint;
            use Illuminate\Support\Facades\Schema;
            use Illuminate\Support\Facades\DB;
            use App\model\gen\Clienti\Clienti;

            class ClientiController extends Controller {
        	
      public function getIndex() {
                    return view('gen.Clienti.Clienti');
                    }

            
        public function getLista() {
            return Clienti::with('gruppo')->get();
                    }

            
public function getSalva($obj) {
                $data  = json_decode($obj,true);
                $r = new Clienti;
                $r->Nome = $data['Nome'];

                
                $r->Cognome = $data['Cognome'];

                
                $r->gruppo_id = $data['gruppo_id'];

                 $r->save();

            return 'salvato';
                    }

                    
          public function getCreadb() {

                    Schema::create('Clienti', function (Blueprint $table) {
        $table->increments('ID' );
                $table->string('Nome' );
                $table->string('Cognome' );
                $table->integer('gruppo_id' )->unsigned();
                

        $table->timestamps();
        });

    Schema::table('Clienti', function (Blueprint $table) 
    {
        $table->foreign('gruppo_id')
            ->references('ID')->on('gruppi')
            ->onDelete('cascade');
    });

                  
                    }       

          
                

    public function getDestroy($obj) {
         $data  = json_decode($obj,true);
         $id=$data["ID"];
        $deleted = DB::delete("delete from Clienti  where ID = ?",[$id]);
        $message = 'cacellato con successo!';
        return $message;
    }

           
                public function getOgetto($id) {

                    return Clienti::find($id);
                }

            
public function getAggiorna($obj) {
                $data  = json_decode($obj,true);
                $id  = $data["ID"]; 
               

DB::update("update Clienti  set  Nome =   ' " . $data[ "Nome"] . " ' ,Cognome =   ' " . $data[ "Cognome"] . " ' ,gruppo_id =   ' " . $data[ "gruppo_id"] . " '    where ID = ?", [$id]);

            return 'salvato';
                    }


        }

        