@extends('app')
@section('title','| ToDo')



@section('content')
<script src='{{asset('app/controllers/agendaControllers.js')}}' type='text/javascript'></script>
<div class="container" ng-controller="agendaControllers" >
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">...sei su <% nomeController %>!</div>

                <div class="panel-body">

                    <div class="container" id="todos">
                        <h3 class="page-header">
                            Agenda
                        </h3>

                        <h3 class="page-header">add new</h3>
                        <form ng-submit="addNew()">
                            <div class="form-group">
                                <label for="nome">Nome</label>
                                <input type="text" class="form-control" id="nome" placeholder="Nome" ng-model="nome">
                            </div>
                            <div class="form-group">
                                <label for="cognome">Cognome</label>
                                <input type="text" class="form-control" id="cognome" placeholder="Cognome" ng-model="cognome">
                            </div>
                            <div class="form-group">
                                <label for="email">email</label>
                                <input type="email" class="form-control" id="email" placeholder="email" ng-model="email">
                            </div>
                            <div class="form-group">
                                <label for="tel">telefono</label>
                                <input type="tel" class="form-control" id="tel" placeholder="telefono" ng-model="telefono">
                            </div>


                            <button type="submit" class="btn btn-primary">aggiungi</button>

                        </form>


                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
