<?php

namespace App\geoClass;

use App\geoClass\GestioneFile as G;
use App\geoClass\Costanti as C;

class GenPageHTML {


//const  pControllerPhp="../app/Http/Controllers";//percorso controlleres php

   public  static function creaStruttura($obj) {

    $nomeSezione=$obj["nomeTabella"];
           $text="
           <div class='aside ' tabindex='-1' role='dialog' >
     <div class='aside-dialog'>
    <div class='aside-content' >
      <div class='aside-header' >
        <button type='button' class='close' ng-click='\$hide()'>&times;</button>
        <h4 class='aside-title' > Novo " . $nomeSezione . " </h4>
      </div>
        <div class='aside-body' >";

               for ($i=0;$i<count($obj["campiTabella"]); $i++){
                $c=$obj["campiTabella"];
               $text = $text . "
           <label >". $c[$i]["nome"] . "</label>
              <input type='text' 
                class='form-control'
                 ng-model='" . $nomeSezione . "." . $c[$i]["nome"] . "'
                  ></input>";
          
            };
                    
 
                $text = $text . " </div>
      <div class='aside-footer'>
          <button ng-show='creaOaggirna' class='btn btn-success pull-left' ng-click='salva(" . $nomeSezione . ")' > salva</button>
          <button ng-show='!creaOaggirna' class='btn btn-success pull-left' ng-click='aggiorna(" . $nomeSezione . ")' > agiorna</button>
          <button type='button'  class='btn btn-default' ng-click='\$hide()'>annulla</button>
             <hr>
      <button ng-show='!creaOaggirna' class='btn btn-danger pull-left' ng-click='destroy(" . $nomeSezione . ")' > Cancella</button>
      </div>
   
    </div>
  </div>
</div>";






   G::scriviSuFile(C::pPageHtml().'/'.$nomeSezione.'/asideAdd.tpl.html', $text);

        return $nomeSezione;
    }





     

}
