<?php
    namespace app\Http\Controllers\gen\Campo;
            use App\Http\Controllers\Controller;
            use Illuminate\Database\Schema\Blueprint;
            use Illuminate\Support\Facades\Schema;
            use Illuminate\Support\Facades\DB;
            use App\model\gen\Campo\Campo;





            class CampoController extends Controller {
        	
      public function getIndex() {
                    return view('gen.Campo.Campo');
                    }

            
        public function getLista() {
           // return DB::table('Campo'SELECT * FROM `pippo`.`tabella` WHERE `ID` = 36)->with('tabella')->get();
//$c = new Campo;

//$c= DB::table('Campo')->with('tabella')->get();
 $c = Campo::orderBy('ID', 'disc')->with('tabellas')->get();
   // return  $c->with('tabella')->get();
return  $c;

                    }

            
public function getSalva($obj) {
                $data  = json_decode($obj,true);
                $r = new Campo;
                $r->n = $data['n'];

                
                $r->nome = $data['nome'];

                
                $r->tipo = $data['tipo'];

                
                $r->lunghezzaValori = $data['lunghezzaValori'];

                
                $r->nullo = $data['nullo'];

                
                $r->indice = $data['indice'];

                
                $r->ai = $data['ai'];
                $r->IdTab =$data['IdTab'];
                 $r->save();

            return 'salvato';
                    }

                    
          public function getCreadb() {

                    Schema::create('Campo', function (Blueprint $table) {
        $table->increments('ID' );
                $table->string('n' );
                $table->string('nome' );
                $table->string('tipo' );
                $table->string('lunghezzaValori' );
                $table->string('nullo' );
                $table->string('indice' );
                $table->string('ai' );
                $table->integer('IdTab')->unsigned();

        $table->timestamps();
        });


                     Schema::table('Campo', function (Blueprint $table) 
    {
        $table->foreign('IdTab')
            ->references('ID')->on('tabella')
            ->onDelete('cascade');
    });

                  
                    }       

          
                

    public function getDestroy($obj) {
         $data  = json_decode($obj,true);
         $id=$data["ID"];
        $deleted = DB::delete("delete from Campo  where ID = ?",[$id]);
        $message = 'cacellato con successo!';
        return $message;
    }

           
                public function getOgetto($id) {

                    return Campo::find($id);
                }

            
public function getAggiorna($obj) {
                $data  = json_decode($obj,true);
                $id  = $data["ID"]; 
               

DB::update("update Campo  set  n =   ' " . $data[ "n"] . " ' ,nome =   ' " . $data[ "nome"] . " ' ,tipo =   ' " . $data[ "tipo"] . " ' ,lunghezzaValori =   ' " . $data[ "lunghezzaValori"] . " ' ,nullo =   ' " . $data[ "nullo"] . " ' ,indice =   ' " . $data[ "indice"] . " ' ,ai =   ' " . $data[ "ai"] . " '    where ID = ?", [$id]);

            return 'salvato';
                    }


        }

        