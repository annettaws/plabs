@extends('app')
@section('title','| ToDo')



@section('content')
<script src=" <% asset('app/controllers/todoControllers.js')%>" type='text/javascript'></script>
<div class="container" ng-controller="toDoController" style="margin-top:20px">
    <div ng-view="message" class="alert alert-success" role="alert">
        <strong>Success:</strong>{{message}}
    </div>
   <div class="row">
        <div class="col-md-8  ">
            <div class="panel panel-default">
                <div class="panel-heading panelHead"> ToDO : {{button.radio}}
                    <button class="btn btn-primary  pull-right btnPanelHead" ng-click="listaTodo()" bs-tooltip="tooltip">
                        <span class="glyphicon glyphicon-refresh " aria-hidden="true"></span>
                    </button>
                    <button class="btn btn-primary  pull-right btnPanelHead" ng-click="showAsideNew()">
                        <span class="glyphicon glyphicon-plus " aria-hidden="true"></span>
                    </button>
                    <button class="btn btn-primary  pull-right btnPanelHead" ng-click="showAside()">
                        <span class="glyphicon glyphicon-heart " aria-hidden="true"></span>
                    </button>

                </div>

                <div class="panel-body">

                    <div class="container col-lg-10 col-md-10 col-sm-10 col-xs-10" id="todos">
                        <div class="row">
                            <h3 class="page-header">    <span class="glyphicon glyphicon-search " aria-hidden="true"></span>   <input type='text'ng-model='search.text'>
                                <div class="btn-group pull-right" ng-model="button.radio" bs-radio-group>
                                    <label class="btn btn-default" ng-click="listaDaFare()"><input type="radio" class="btn btn-default" value="daFare" > Da Fare</label>
                                    <label class="btn btn-default" ng-click="listaFatti()"><input type="radio" class="btn btn-default" value="fatti"> Fatti</label>
                                    <label class="btn btn-default" ng-click="listaTodo()"><input type="radio" class="btn btn-default"  value="tutti" > Tutti</label>

                                </div>
                        </h3>
                    </div>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>done</th>
                            <th>text</th>
                            <th>Da eseguire</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr  dir-paginate="todo in todos | itemsPerPage: 2 | filter:search" pagination-id="cust1" >
                            <td> <button type="button" ng-click="selezionaAside(todo)" class="btn btn-default"> <span class="glyphicon glyphicon-pencil " aria-hidden="true"></span></button></td>
                            <td><input type="checkbox" ng-model="todo.done" ng-true-value="'1'" ng-false-value="'0'" ng-change="update(todo)"></td>
                            <td >   {{todo.text}}</td>
                            <td >   {{todo.dataDiEsecuzione| date:"dd/MM/yyyy"}}</td>
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
