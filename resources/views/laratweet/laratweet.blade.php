@extends('app')
@section('title','| laratweet')
@section('content')
<script src=" <% asset('app/controllers/clientiControllers.js')%>" type='text/javascript'></script>
<div class="container" ng-controller="clientiControllers" style="margin-top:20px">
    <div class="row">
        <div class="col-md-12 ">
            <div class="panel panel-default">
                <div class="panel-heading">{{ nomeController}}</div>

                <div class="panel-body">
                    sei su laratweet!
                    <input type="text" ng-model="test">
                    {{ test}}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
