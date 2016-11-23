<?php

namespace App\geoClass;
       use Illuminate\Support\Facades\Schema;
use App\geoClass\GestioneFile as G;
use App\geoClass\Costanti as C;
use App\geoClass\GenControllerPhp as Cphp;
use App\geoClass\GenControllerJS as CJs;
use App\geoClass\GenTabelleDb as db;
use App\geoClass\GenVista as CV;
use App\geoClass\GenModelPhp as M;
use App\geoClass\GenPageHTML as H; 
use App\model\gen\Campo\Campo;   
use App\model\gen\Tabella\Tabella;
            
class Generatore {



//const  pControllerPhgfhp="../app/Http/Controllers";//percorso controlleres php

   public static function creaCollegamento($nomeSezione) {
         $nomeSezioneSTR  = "'/".$nomeSezione. "'";
      $text='<li><a href="<% url('.$nomeSezioneSTR.')%>">'.$nomeSezione.'</a></li>
 ';
       

          G::aggiungiSuFile(C::pHome(), $text);

        return $nomeSezione;
    }


public static function inserisciCollegamento($nomeSezione) {
    $punto="Fine";
    $file=file(C::pHome());
    foreach($file as $i => $linea) { 
         if (strstr($linea,$punto)){break;}
   
        
    }

     $H=fopen(C::pHome(), 'w');
    $text="";
     for($j=0; $j<$i  ; $j++){
         $text=$text . "" .$file[$j];
        }
        fwrite ($H,$text);


$H=fopen(C::pHome(), 'a');
      $nomeSezioneSTR  = "'/".$nomeSezione. "'";
 $text='<li><a href="<% url('.$nomeSezioneSTR.')%>">'.$nomeSezione.'</a></li>
 ';
   fwrite ($H,$text);
       fclose($H);

    $H=fopen(C::pHome(), 'a');
    $text="";
     for($j=$i; $j<count($file) ; $j++){
         $text=$text . "" .$file[$j];
        }
        fwrite ($H,$text);
        fclose($H);
        return $i;   
    }


       
    public static function cancellaCartelle($nS) {
        $nomeSezione=$nS;


       G::eliminafilesCartelle(C::pControllerPhp() . '/' . $nomeSezione);
       G::eliminafilesCartelle(C::pViewBlade() . '/' . $nomeSezione);
      G::eliminafilesCartelle(C::pControllerJs(). '/' . $nomeSezione);
       G::eliminafilesCartelle(C::pPageHtml() . '/' . $nomeSezione);
    G::eliminafilesCartelle(C::pModelPhp() . '/' . $nomeSezione);
    
   return "cancellato :" .$nomeSezione;
    }



  public static function cancellaCollegamneto($fileD,$nS) {

    $file=file($fileD);
    foreach($file as $i => $linea) { 
         if (strstr($linea, $nS)){break;}
         }

       var_dump("" . $i  ."");


        $H=fopen($fileD, 'w');
        $text="";
        for($j=0; $j<$i  ; $j++){
             $text=$text . "" .$file[$j];
            }
        fwrite ($H,$text);
        fclose($H);
 
        $H=fopen($fileD, 'a');
        $text="";
         for($j=$i+1; $j<count($file) ; $j++){
             $text=$text . "" .$file[$j];
            }
        fwrite ($H,$text);
        fclose($H);


        return $nS;
    }



    public static function creaCartelle($nS) {
        $nomeSezione=$nS;


        G::creaCartella(C::pControllerPhp() . '/' . $nomeSezione);
        G::creaCartella(C::pViewBlade() . '/' . $nomeSezione);
        G::creaCartella(C::pControllerJs(). '/' . $nomeSezione);
        G::creaCartella(C::pPageHtml() . '/' . $nomeSezione);
        G::creaCartella(C::pModelPhp() . '/' . $nomeSezione);



        return $nomeSezione;
    }

    public static function creaRotta($nomeSezione) {
       
        $text="
        Route::controllers(['" . $nomeSezione  . "' => 'gen\\"  . $nomeSezione . "\\" . $nomeSezione . "Controller',]);
        ";
       

          G::aggiungiSuFile(C::pRoute(), $text);

        return $nomeSezione;
    }



    public static function creaControllers($struttura) {
       
         
        return Cphp::creaStruttura($struttura);
    }

     public static function creaControllersJS($nomeSezione) {
       
        CJs::creaStruttura($nomeSezione);
        
        return $nomeSezione;
    }
    
    

       public static function creaVista($obj) {
 
        //$vitsa->creaStruttura($nomeSezione);
        

         return CV::creaStruttura($obj);
    }



       public static function creaHtml($obj) {
 
        //$vitsa->creaStruttura($nomeSezione);
        

         return H::creaStruttura($obj);
    }



       public static function creaModel($obj) {
 
        //$vitsa->creaStruttura($nomeSezione);
        

         return M::creaStruttura($obj);
    }


public static function salvaStrutturadb($obj) {
    $t= new Tabella;
    $t->nome=$obj["nomeTabella"];
    $t->save();
  //  $id=$t->ID;
    for($i=0;$i< count($obj['campiTabella']);$i++){

            $c= new Campo;

          //  $c->n=$obj['campiTabella'][$i]['n'];
            $c->nome=$obj['campiTabella'][$i]['nome'];

            $c->tipo=$obj['campiTabella'][$i]['tipo'];

          //  $c->lunghezzaValori=$obj['campiTabella'][$i]['lunghezzaValori'];
          //  $c->nullo=$obj['campiTabella'][$i]['nullo'];
     
          //  $c->indice=$obj['campiTabella'][$i]['indice'];
            $c->ai=$obj['campiTabella'][$i]['ai'];
             $c->IdTab=$t->id;
         //  ;
       $c->save();
        }
     //   var_dump($obj);
                
         return 'salvataggi su db campi fatto'; 
    }












            public static function cancellaTabellaDb($nomeSezione) {

         Schema::dropIfExists( $nomeSezione ); 
      //  $deleted = DB::delete("delete from Campo  where nome = ?",[$nomeSezione]);

        return  'cancellato';
    }

}
