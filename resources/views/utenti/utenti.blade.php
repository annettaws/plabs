@extends('app')
@section('title','| utenti')
@section('content')
<script src=" <% asset('app/controllers/amministrazione/utentiControllers.js')%>" type='text/javascript'></script>
<div class="container" ng-controller="utentiControllers" style="margin-top:20px">
    <div class="row">
        <div class="col-md-12 ">






            <div class="panel panel-default">
                <div class="panel-heading panelHead"> <a data-toggle="collapse" href="#Anagrafica" aria-expanded="false" aria-controls="Anagrafica"> Anagrafica -> {{nomeController}} -> {{users.id}}</a>

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
                <div class="panel-body collapse"  id="Anagrafica">

                <label for="dati" ng>Anagrafica:</label>
                <dl id="dati" class="dl-horizontal">
                  <dt>Cliente:</dt>
                  <dd>{{ cliente.titolo}} {{cliente.name}} {{cliente.cognome}}</dd>

            

                  <dt>email:</dt>
                  <dd>{{cliente.email}}</dd>
                


                  <dt>tel:</dt>
                  <dd>{{cliente.tel}}</dd>
            

                  <dt>cell:</dt>
                  <dd>{{cliente.cell}}</dd>
                 

           
                

                  <dt>fax:</dt>
                  <dd>{{cliente.fax}}</dd>
              
                  <dt>Accaunt associato:</dt>
                  <dd>{{cliente.user}}</dd>
                  </dl>
                                  
                    <hr>
                  <label for="localita">Località:</label>
                   <dl id="localita" class="dl-horizontal">
                  <dt>Via:</dt>
                  <dd>{{localita.Via}},{{localita.civico}}</dd>
                
                  <dt>Città:</dt>
                  <dd>{{localita.Via}},{{localita.civico}}</dd>
                

                   <dt>Cap:</dt>
                  <dd>{{localita.Via}},{{localita.civico}}</dd>
                  </dl>
                   
                   

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
                                    <th>e-mail</th>


                                </tr>
                            </thead>
                            <tbody>
                                <tr  dir-paginate="c in listaUtenti | itemsPerPage: 10 | filter:search" pagination-id="cust1" >
                                    <td> <button type="button" ng-click="seleziona(c)" class="btn btn-default"> <span class="glyphicon glyphicon-pencil " aria-hidden="true"></span></button></td>
                                  
                                    <td >   {{c.name}}</td>
                                    <td >   {{c.email}}</td>



                                </tr>
                            </tbody>            </table>
                        <dir-pagination-controls pagination-id="cust1" class="text-center" ></dir-pagination-controls>
           
            </div>


            </div>

        </div>
    </div>
</div>
@endsection
