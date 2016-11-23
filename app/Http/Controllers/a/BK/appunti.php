 public static function creaRotta($nomeSezione) {
        $file=fopen('../app/http/routes.php', 'a');
        $text="
        Route::controllers('" . $nomeSezione  . "' => '"  . $nomeSezione . "" . $nomeSezioneNSpace . "Controller',);
        ";
                fwrite($file,$text);
                fclose($file);

        return $result;
    }

"@extends('app')
@section('title','". $nomeSezione ."')
@section('content')
<script src=\" <% asset('app/controllers/generatore/". $nomeSezione. "Controllers.js')%>\" type='text/javascript'></script>
<div class=\"container\" ng-controller=\"generatoreControllers\" style=\"margin-top:20px\">
   <div ng-view=\"message\" class=\"alert alert-success\" role=\"alert\">
        <strong>Success:</strong>{{message}}
    </div>

    <div class=\"row\">
        <div class=\"col-md-12 \">
            <div class=\"panel panel-default\">
                <div class=\"panel-heading panelHead\"> {{nomeController}} : {{users.id}}

                    <button class=\"btn btn-primary  pull-right btnPanelHead\" ng-click=\"listaTodo()\" bs-tooltip=\"tooltip\">
                        <span class=\"glyphicon glyphicon-refresh \" aria-hidden=\"true\"></span>
                    </button>
                    <button class=\"btn btn-primary  pull-right btnPanelHead\" ng-click=\"create()\">
                        <span class="glyphicon glyphicon-plus " aria-hidden="true"></span>
                    </button>
                    <button class=\"btn btn-primary  pull-right btnPanelHead\" ng-click=\"listaAutori()\">
                        <span class=\"glyphicon glyphicon-heart \" aria-hidden=\"true\"></span>
                    </button>

                </div>



                <div class=\"panel-body\">
                <div class=\row\">
                    <div class=\"col-md-4\">
                        Nome sistema:
                         <input type=\"text\" ng-model=\test\">
                        
                        
                    </div>
                     
                         
                </div>
                <hr>
                     
                        <button type=\"button\" ng-click="crea(test)" class=\"btn btn-danger\" >crea Struttura</button>
             
                

                  
                

                </div>
            </div>

                <div class=\"panel panel-default\">
                  <div class=\"panel-heading panelHead\"> {{nomeController}}
                  </div>

  <div class=\"panel-body\">

   <table class=\"table table-hover\">
                            <thead>
                                <tr>
                                    <th></th>
                           
                                    <th>nome</th>
                                    <th>Da eseguire</th>


                                </tr>
                            </thead>
                            <tbody>
                                <tr  dir-paginate=\"c in listaClienti | itemsPerPage: 5 | filter:search\" pagination-id=\"cust1\" >
                                    <td> <button type=\"button\" ng-click=\"seleziona(c)\" class=\"btn btn-default\"> <span class=\"glyphicon glyphicon-pencil \" aria-hidden=\"true\"></span></button></td>
                                  
                                    <td >   {{c.name}} {{c.cognome}}</td>
                                    <td > <p ng-repeat=\"l in c.localita\">{{l.comune.nomeComune}} ({{l.provincia.sigla}}),{{l.regione.nome}} </p>  
                                    </td>



                                </tr>
                            </tbody>            </table>
                        <dir-pagination-controls pagination-id=\"cust1\" class=\"text-center\" ></dir-pagination-controls>
           
            </div>


            </div>

        </div>
    </div>
    
</div>
@endsection
";


  bApp.controller('". $nomeSezione ."Controllers',function (
        $scope,
        $http,
        $modal,
        $aside)
        {

        $scope.publicUrl=pubicUrl;    
        $scope.url=baseUrl;
        $scope.message=\"Pino\";
        $scope.nomeController='". $nomeSezione."';

        });//Fine  toDoControllerfunction remove($dirname = '.')
{
        if (is_dir($dirname))
        {
                echo "$dirname is a directory.<br />";
 
                if ($handle = @opendir($dirname))
                {
                        while (($file = readdir($handle)) !== false)
                        {
                                if ($file != "." && $file != "..")
                                {
                                        echo "$file<br />";
 
                                        $fullpath = $dirname . '/' . $file;
 
                                        if (is_dir($fullpath))
                                        {
                                                remove($fullpath);
                                                @rmdir($fullpath);
                                        }
                                        else
                                        {
                                                @unlink($fullpath);
                                        }
                                }
                        }
                        closedir($handle);
                }
        }
}


   public static function c($obj) {
       
          // $text=$obj["nomeTabella"];
                     $text=" <table class=\"table table-hover\">
                            <thead>
                                <tr>
                                    <th></th>";

                for ($i=0;$i<count($obj["campiTabella"]); $i++){
                $c=$obj["campiTabella"];
    $text=$text+ "<th>" . $c["nome"] . "</th>";
            };
        $text=$text+ "

                                </tr>
                            </thead>
                            <tbody>
                                <tr  dir-paginate=\"c in lista" . $obj["nomeTabella"] ." | itemsPerPage: 5 | filter:search\" pagination-id=\"cust1\" >
                                    <td> <button type=\"button\" ng-click=\"seleziona(c)\" class=\"btn btn-default\"> <span class=\"glyphicon glyphicon-pencil \" aria-hidden=\"true\"></span></button></td>";
                                  
                for ($i=0;$i<count($obj["campiTabella"]); $i++){
                $c=$obj["campiTabella"];
    $text=$text+  "<td >   {{c."  . $c["nome"] m" }}</td>";
            };
                                 
                                   

$text=$text+ "

                                </tr>
                            </tbody>   
                                     </table>
                        <dir-pagination-controls pagination-id=\"cust1\" class=\"text-center\" ></dir-pagination-controls> 
";
       
        return  $text;
    }