@extends('app')
@section('title','| generatore')
@section('content')
<script src=" <% asset('app/controllers/generatore/generatoreControllers.js')%>" type='text/javascript'></script>
<div class="container" ng-controller="generatoreControllers" style="margin-top:20px">
   <div ng-view="message" class="alert alert-success" role="alert">
        <strong>Success:</strong>{{message}}
    </div>

    <div class="row">
        <div class="col-md-12 ">
            <div class="panel panel-default">
                <div class="panel-heading panelHead"> {{nomeController}} :

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
                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-6">
                            Nome sistema:
                            <input type="text" ng-model="nomeStruttura"> 
                            <button type="button" ng-click="crea(campi)" class="btn btn-primary  btnPanelHead" >crea Struttura</button>                       
                        </div>
                         <div class="col-md-6">
                       
                             
                                <button type="button" ng-click="cancella(nomeStruttura)" class="btn btn-danger pull-right btnPanelHead" >Cancella Struttura</button>
                            </div>
                    </div>
                </div>
                <hr>
                 <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-12">
                            Numero campi:
                            <input type="text" ng-model="numeroCampi"> 
                            <button type="button" ng-click="creaCampi(numeroCampi)" class="btn btn-primary  btnPanelHead" >crea Campi</button>                       
                        </div>
                         
                    </div>
                    <div class="col-md-12">
           
                        <div class="col-md-12">
                         
                             <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>n</th>
                                        <th>Nome</th>
                                        <th>Tipo</th>
                                        <th>Lunghezza/Valori</th>
                                        <th>Null</th>
                                        <th>Indice</th>
                                        <th>A_I</th>
                                    </tr>
                                </thead>
                                <tbody>
                                 <tr ng-repeat="campo in campi">
                                        <th>{{campo.n}}</th>
                                        <th><input type="text" ng-model="campo.nome"></th>
                                        <th>
                                            <div>
                                                <button id="tipoDb" type="button" class="btn btn-default" ng-model="campo.tipo" data-html="1" data-toggle="true" bs-options="tdb for tdb in tipodb"  bs-select >
                                                    <span class="caret"></span>
                                                 </button>
                                            </div>

                                         </th>
                                        <th><input type="text" ng-model="campo.lunghezzaValori"</th>
                                        <td><input type="checkbox" ng-model="campo.nullo" ng-true-value="'1'" ng-false-value="'0'" ></td>
                                        <th>
                                            <div>
                                                <button id="inicedb" type="button" class="btn btn-default" ng-model="campo.indice" data-html="1" data-toggle="true" bs-options="idb for idb in inicedb"  bs-select >
                                                    <span class="caret"></span>
                                                 </button>
                                            </div>
                                        </th>
                                         <td><input type="checkbox" ng-model="campo.ai" ng-true-value="'1'" ng-false-value="'0'" ng-change=""></td>
                                        
                                    </tr>  
                                </tbody> 
                            </table>              
                        </div>
                         <div class="col-md-12">
                       {{campi}}
                             <hr>
                                <button type="button" ng-click="creadb()" class="btn btn-primary  btnPanelHead" >CreaDb </button>                      
                            </div>
                    </div>
                </div>    
                      

                  
                

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
    
</div>
@endsection
