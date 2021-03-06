
@extends('app')
@section('title','| generatore')
@section('content')
<script src=" <% asset('app/controllers/gen/Tabella/TabellaControllers.js')%>" type='text/javascript'></script>
    <div id="contenitore" class="container" ng-controller="TabellaControllers" style="margin-top:20px">
   
        <div ng-view="message" class="alert alert-success" role="alert">
            <strong>Success:</strong>{{message}}
        </div>

        
		<div class="row">
		
					<div class="col-md-12 ">
			            <div class="panel panel-default">
			                <div class="panel-heading panelHead"> {{nomeController}} 


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
			 				 <table class="table table-hover">
                            <thead>
                                <tr>
                                  <th>ID</th><th>nome</th><th>idchiaesterna</th>  <th></th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr  dir-paginate="c in lista | itemsPerPage: 5 | filter:search" pagination-id="cust1" >
                                    <td >   {{c.ID }}</td><td >   {{c.nome }}</td><td >   {{c.idchiaesterna }}</td> <td> <button type="button" ng-click="seleziona(c)" class="btn btn-default"> <span class="glyphicon glyphicon-pencil " aria-hidden="true"></span></button></td>

                                </tr>
                            </tbody>   
                                     </table>
                        <dir-pagination-controls pagination-id="cust1" class="text-center" ></dir-pagination-controls> 

			            	</div>

			       		</div>
			  		</div>

				
		</div>
	

    </div>
@endsection
