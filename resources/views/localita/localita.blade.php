@extends('app')
@section('title','| Località')


@section('content')
<script src='<% asset('app/controllers/localitaControllers.js') %>' type='text/javascript'></script>

<div class="container" ng-controller="localitaControllers" >

    <div ng-view="message" class="alert alert-success" role = "alert" >
        <strong> Success: </strong>{{comuneSelezionata}}{{message}}
                    </div>


                    <div class = "row" >
                    <div class = "col-md-8  " >
                    <div class = "panel panel-default" >
                    <div class = "panel-heading panelHead" > {{nomeController}}

            <button class = "btn btn-primary  pull-right btnPanelHead" ng - click = "listaTodo()"  bs-tooltip = "tooltip" >
                    <span class = "glyphicon glyphicon-refresh " aria - hidden = "true" > </span>
                    </button>
                    <button class = "btn btn-primary  pull-right btnPanelHead" ng-click="createLocalita()" >
                    <span class = "glyphicon glyphicon-plus " aria - hidden = "true" > </span>
                    </button>
                    <button class = "btn btn-primary  pull-right btnPanelHead" ng - click = "listaAutori()" >
                    <span class = "glyphicon glyphicon-heart " aria - hidden = "true" > </span>
                    </button>

                    </div>

                    <div class = "panel-body" >
                 <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th></th>
                           
                                    <th>Via</th>
                                    <th>Comune</th>
                                     <th>Provincia</th>


                                </tr>
                            </thead>
                            <tbody>
                                <tr  dir-paginate="c in listaLocalita | itemsPerPage: 10 | filter:search" pagination-id="cust1" >
                                    <td> <button type="button" ng-click="seleziona(c)" class="btn btn-default"> <span class="glyphicon glyphicon-pencil " aria-hidden="true"></span></button></td>
                                  
                                    <td >   {{c.via}}, n°  {{c.civico}}</td>
                                    <td >   {{c.comune.nomeComune}}, {{c.provincia.sigla}}, {{c.regione.siglaRegione}}</td>
                                    <td >   {{c.localizzazione_type}} : {{c.name}}  {{c.cognome}}</td>



                                </tr>
                            </tbody>            </table>
                        <dir-pagination-controls pagination-id="cust1" class="text-center" ></dir-pagination-controls>
                    </div>



                    </div>
                    </div>

                    <div class = "col-md-4  " >
                    <div class = "panel panel-default" >
                    <div class = "panel-heading panelHead" > Categorie
                    <li > <a href = "<% url('/biblios/bookPage')%>" > Book </a></li >
                    </div>

                    <div class = "panel-body" >
                    <div class = "container col-lg-8 col-md-8 col-sm-8 col-xs-8" id = "todos" >
                    <div bs - datepicker> ca </div>


                    </div>
                    </div>



                    </div>
                    </div>


                    </div>


                    </div>
                    @endsection
