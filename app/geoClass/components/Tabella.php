<?php

namespace App\geoClass\components;

class Tabella {













       public static function c($obj) {
        $text="";
      $text=" <table class=\"table table-hover\">
                            <thead>
                                <tr>
                                  ";

        for ($i=0;$i<count($obj["campiTabella"]); $i++){
                $c=$obj["campiTabella"];
                $text= $text . "<th>" . $c[$i]["nome"] .  "</th>";
            };

                  

  $text=$text . "  <th></th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr  dir-paginate=\"c in lista | itemsPerPage: 5 | filter:search\" pagination-id=\"cust1\" >
                                    ";



                for ($i=0;$i<count($obj["campiTabella"]); $i++){
                $c=$obj["campiTabella"];
               $text = $text .  "<td >   {{c."  . $c[$i]["nome"] . " }}</td>";
            };
                        
       $text = $text . " <td> <button type=\"button\" ng-click=\"seleziona(c)\" class=\"btn btn-default\"> <span class=\"glyphicon glyphicon-pencil \" aria-hidden=\"true\"></span></button></td>

                                </tr>
                            </tbody>   
                                     </table>
                        <dir-pagination-controls pagination-id=\"cust1\" class=\"text-center\" ></dir-pagination-controls> 
";
       
                             
                     
        return   $text;
    }

}
