@extends('app')
@section('title','| Biblios')



@section('content')
<script src=" <% asset('app/controllers/bibliosControllers.js')%>" type='text/javascript'></script>
<div class="container" ng-controller="bibliosControllers" style="margin-top:20px">
    <div ng-view="message" class="alert alert-success" role="alert">
        <strong>Success:</strong>{{message}}
    </div>




    <div class="row">
        <div class="col-md-8  ">
            <div class="panel panel-default">
                <div class="panel-heading panelHead"> {{nomeController}} : {{scenario}}
       
                    <button class="btn btn-primary  pull-right btnPanelHead" ng-click="listaTodo()" bs-tooltip="tooltip">
                        <span class="glyphicon glyphicon-refresh " aria-hidden="true"></span>
                    </button>
                    <button class="btn btn-primary  pull-right btnPanelHead" ng-click="createAutore()">
                        <span class="glyphicon glyphicon-plus " aria-hidden="true"></span>
                    </button>
                    <button class="btn btn-primary  pull-right btnPanelHead" ng-click="listaAutori()">
                        <span class="glyphicon glyphicon-heart " aria-hidden="true"></span>
                    </button>

                </div>

                <div class="panel-body">

                    <div class="container col-lg-10 col-md-10 col-sm-10 col-xs-10" id="todos">
                        <div class="row">
                            <h3 class="page-header">    
                                
                            </h3>

                        </div>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Cognome</th>
                                    <th>Nome</th>
                                    
                                  


                                </tr>
                            </thead>
                            <tbody>
                                <tr  dir-paginate="autore in autori | itemsPerPage: 5" pagination-id="cust1" >
                                    <td> <button type="button" class="btn btn-default" ng-click="selezionaAutore(autore)" >
                                     <span class="glyphicon glyphicon-pencil " aria-hidden="true"></span></button></td>
                                    
                                    <td >   {{autore.lastname}}</td>
                                    <td >   {{autore.firstname}}</td>



                                </tr>
                            </tbody>      
                         </table>
                        <dir-pagination-controls pagination-id="cust1" class="pull-center" ></dir-pagination-controls>


                    </div>
                </div>



            </div>
        </div>

        <div class="col-md-4  ">
            <div class="panel panel-default">
                <div class="panel-heading panelHead"> Categorie
                    <li><a href="<% url('/biblios/bookPage')%>">Book</a></li>

                </div>

                <div class="panel-body">

                    <div class="container col-lg-8 col-md-8 col-sm-8 col-xs-8" id="todos">

                        <div bs-datepicker>ca</div>


                    </div>
                </div>



            </div>
        </div>


    </div>
</div>



@endsection
