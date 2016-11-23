@extends('app')
@section('title','| Impostazioni')
@section('content')
<script src=" <% asset('app/controllers/impostazioniControllers.js')%>" type='text/javascript'></script>
<div class="container" ng-controller="impostazioniControllers" style="margin-top:20px">


    <div class="row">
        <div class="col-md-12 ">
            <div class="panel panel-default">
                <div class="panel-heading panelHead"> {{nomeController}} : {{users.id}}

                    <button class="btn btn-primary  pull-right btnPanelHead" ng-click="listaTodo()" bs-tooltip="tooltip">
                        <span class="glyphicon glyphicon-refresh " aria-hidden="true"></span>
                    </button>
                    <button class="btn btn-primary  pull-right btnPanelHead" ng-click="create()">
                        <span class="glyphicon glyphicon-plus " aria-hidden="true"></span>
                    </button>
                    <button class="btn btn-primary  pull-right btnPanelHead" ng-click="listaAutori()">
                        <span class="glyphicon glyphicon-heart " aria-hidden="true"></span>
                    </button>

                </div>
                <div class="panel-body">

             
                

                  
                    <form ng-submit="ripristinaComini()" id="cancella"></form>
                   <button type="submit"  class="btn btn-danger" form="cancella">Ripristina Comini</button>

                </div>
            </div>

                <div class="panel panel-default">
                  <div class="panel-heading panelHead"> {{nomeController}}
                  </div>

  <div class="panel-body">

   <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th></th>
                           
                                    <th>nome</th>
                                    <th>Da eseguire</th>


                                </tr>
                            </thead>
                            <tbody>
                                <tr  dir-paginate="c in listaClienti | itemsPerPage: 5 | filter:search" pagination-id="cust1" >
                                    <td> <button type="button" ng-click="seleziona(c)" class="btn btn-default"> <span class="glyphicon glyphicon-pencil " aria-hidden="true"></span></button></td>
                                  
                                    <td >   {{c.name}} {{c.cognome}}</td>
                                    <td > <p ng-repeat="l in c.localita">{{l.comune.nomeComune}} ({{l.provincia.sigla}}),{{l.regione.nome}} </p>  
                                    </td>



                                </tr>
                            </tbody>            </table>
                        <dir-pagination-controls pagination-id="cust1" class="text-center" ></dir-pagination-controls>
           
            </div>


            </div>

        </div>
    </div>
     <div ng-view="message" class="alert alert-success" role="alert">
        <strong>Success:</strong>{{message}}
    </div>
</div>
@endsection
