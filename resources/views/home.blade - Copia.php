@extends('app')
@section('title','| Home')
@section('content')
<div class="container" style="margin-top:20px">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Home</div>

                <div class="panel-body">
                    Sei Loggato <% Auth::user()->name %> !<br>
                    <% Auth::user()->email %>
                    <hr>
                    <div class="row">
                        <div class="col-md-4">
                          <label for="amministrazione" >Amministrazione</label>
                            <ul id='amministrazione'>
                                <li><a href="<% url('/todo')%>">Cose da fare</a></li>
                                <li><a href="<% url('/clienti')%>">Clienti</a></li>
                                <li><a href="<% url('/localita')%>">Comuni italiani</a></li>
                                <li><a href="<% url('/biblios/autoriPage')%>">Autori</a></li>
                                <li><a href="<% url('/listini')%>">Listini</a></li>
                            </ul>
                        </div>

                        <div class="col-md-4">
                            <label for="laboratorio" >Laboratorio</label>
                            <ul id="laboratorio">
                                <li><a href="<% url('/tests')%>">Test</a></li>
                                <li><a href="<% url('/clienti')%>">Clienti</a></li>
                                <li><a href="<% url('/localita')%>">Comuni italiani</a></li>
                                <li><a href="<% url('/laratweet')%>">laratweet</a></li>
                                <li><a href="<% url('/utenti')%>">utenti</a></li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <label for="ISO" >ISO 9001:2015</label>
                            <ul id="ISO">
                                <li><a href="<% url('/iso/normative')%>">Normative</a></li>
                                <li><a href="<% url('/iso/pq')%>">Piani di qualita</a></li>
                                
                            </ul>
                        </div>
                           <div class="col-md-4">
                            <label for="ISO" >Generatore</label>
                            <ul id="ISO">
                                <li><a href="<% url('/impostazioni')%>">Impostazioni</a></li>
                             <li><a href="<% url('/generatorePage')%>">Generatore</a></li>
                            <input type="text" ng-model="test">
                            {{ test}}
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel panel-default">
                <div class="panel-heading">Generati</div>

                <div class="panel-body">
            Collegamenti <br>
                    
           </div>
        </div>
    </div>

        </div>
    </div>
</div>
</div>
</div>
@endsection
