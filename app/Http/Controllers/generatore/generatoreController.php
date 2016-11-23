<?php
namespace app\Http\Controllers\generatore;
use App\Http\Controllers\Controller;
use App\geoClass\Generatore as G;
use App\geoClass\Costanti as C;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
     use Illuminate\Support\Facades\Schema;
class generatoreController extends Controller {


    public function getIndex() {
        return "Ciao";
}

    public function getCiao() {
        return "Ciao ciao";
}



    public function getCreaStruttura_($struttura) {
    $obj  = json_decode($struttura,true);
	
      //G::creaVista($obj)
    //	$messaggio = 'Struttura : ' . $nomeSezione . ' creata con successo!';
        return   G::creaVista($obj);
}


    public function getCreaStruttura($struttura) {
      $obj  = json_decode($struttura,true);
      $nomeSezione=$obj["nomeTabella"];
    $messaggio=G::creaCollegamento($nomeSezione);
    $test=1;
  
    G::creaCartelle($nomeSezione);  
    G::creaControllers($obj);


    G:: creaModel($obj);

   G::creaVista($obj);
   G::creaControllersJS($nomeSezione);
    G::creaHtml($obj);
   G::creaRotta($nomeSezione);

  

  
  G::salvaStrutturadb($obj);
        return   'creata';
}





    public function getCancellaStruttura($nomeSezione) {
       
  G::cancellaCartelle($nomeSezione);
  G::cancellaCollegamneto(C::pHome(),$nomeSezione);
  G::cancellaCollegamneto(C::pRoute(),$nomeSezione);
 
  G::cancellaTabellaDb($nomeSezione);
    //  $messaggio = 'Struttura : ' . $nomeSezione . ' creata con successo!';
          return "Cancellato";
}




}     
            