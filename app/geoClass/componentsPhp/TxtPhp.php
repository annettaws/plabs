<?php

namespace App\geoClass\componentsPhp;
use App\geoClass\Costanti as C;
use App\geoClass\GenTabelleDb as database;

class TxtPhp {



//Intestazione

   public static function I($nomeSezione) {

        return '<?php
                    namespace ' . C::pNameSpace() .'\\' . $nomeSezione .';
            use App\Http\Controllers\Controller;
            use Illuminate\Database\Schema\Blueprint;
            use Illuminate\Support\Facades\Schema;
            use Illuminate\Support\Facades\DB;
            use '. C::pNameSpaceModel() . '\\' . $nomeSezione . '\\' .$nomeSezione  . ';

            ';
    }
    


//Classe
       public static function C($nomeSezione,$includi) {

        return 'class ' . $nomeSezione . 'Controller extends Controller {
        	'

        . $includi . '


        }

        ';
    }

//vista
   public static function V($nomeSezione) {
        return '
      public function getIndex() {
                    return view(\'gen.'.$nomeSezione.'.'.$nomeSezione.'\');
                    }

            ';
    }

//ListaTutti
   public static function LT($nomeSezione) {
        return '
        public function getLista() {
            return DB::table(\'' . $nomeSezione . '\')->orderBy(\'id\', \'desc\')->get();
                    }

            ';
    }


   public static function Salva($obj) {
  $nomeSezione=$obj["nomeTabella"];

$text = '
public function getSalva($obj) {
                $data  = json_decode($obj,true);
                $r = new ' . $nomeSezione . ';';


  
    for ($i=1;$i<count($obj["campiTabella"]); $i++){
                    $c=$obj["campiTabella"];
                   $text = $text . '
                $r->'. $c[$i]["nome"] .' = $data[\'' . $c[$i]["nome"] . '\'];

                ';
            };



$text = $text . ' $r->save();

            return \'salvato\';
                    }

                    ';

    
 return $text;          
    }


 public static function db($obj) {
        return '
          public function getCreadb() {

                   '.  database::creaStruttura($obj)  .'

                  
                    }       

          
                ';
            
    }


 public static function destroy($obj) {
 $nomeSezione=$obj["nomeTabella"];
        return '

    public function getDestroy($obj) {
         $data  = json_decode($obj,true);
         $id=$data["'.$obj["campiTabella"][0]["nome"].'"];
        $deleted = DB::delete("delete from ' . $nomeSezione . '  where '.$obj["campiTabella"][0]["nome"].' = ?",[$id]);
        $message = \'cacellato con successo!\';
        return $message;
    }

           ';
            
    }

 public static function seleziona($obj) {
 $nomeSezione=$obj["nomeTabella"];
        return '
                public function getOgetto($id) {

                    return ' .  $nomeSezione . '::find($id);
                }

            ';
            
    }

   public static function agiorna_($obj) {
  $nomeSezione=$obj["nomeTabella"];

$text = '
public function getAggiorna($obj) {
                $data  = json_decode($obj,true);
                $id  = $data["'.$obj["campiTabella"][0]["nome"].'"]; 
                $r = ' . $nomeSezione . '::find($id);';
             


  
    for ($i=1;$i<count($obj["campiTabella"]); $i++){
                    $c=$obj["campiTabella"];
                   $text = $text . '
                $r->'. $c[$i]["nome"] .' = $data[\'' . $c[$i]["nome"] . '\'];

                ';
            };



$text = $text . ' $r->save();

            return \'salvato\';
                    }

                    ';

    
 return $text;          
    }


   public static function agiorna($obj) {
  $nomeSezione=$obj["nomeTabella"];

$text = '
public function getAggiorna($obj) {
                $data  = json_decode($obj,true);
                $id  = $data["'.$obj["campiTabella"][0]["nome"].'"]; 
               

DB::update("update ' . $nomeSezione .'  set  ';








                
             

$n=count($obj["campiTabella"]);
  
    for ($i=1;$i<$n; $i++){
                    $c=$obj["campiTabella"];
                     if($i == $n-1){$virgola = ' ';}else{$virgola = ',';}

                   $text = $text . $c[$i]["nome"] .' =   \' " . $data[ "' . $c[$i]["nome"] . '"] . " \' ' . $virgola; 
                   
                
            };




$text = $text . '  where ' . $obj["campiTabella"][0]["nome"] . ' = ?", [$id]);

            return \'salvato\';
                    }'

                    ;

    
 return $text;          
    }

}
