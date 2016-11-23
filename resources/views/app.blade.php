<!DOCTYPE html>
<html lang="en" ng-app="bApp" ng-cloak>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script> var baseUrl = "<% url('/') %>/";</script>
        <script> var pubicUrl = "";
            // var pubicUrl = "http://geosveva.it/plab/public";
        </script>
        @yield('scriptController')
        <title>PiLAB @yield('title')</title>
 
        @include('partials._head')
        @yield('style')

        <!-- Fonts -->


        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
                <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
                <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>

        @include('partials._nav')


    <eeh-navigation-sidebar menu-name="'myMenu'"
                            search-input-submit="searchCallback">


        @yield('content')



        @include('partials._footer')



        <!-- Scripts -->

    </body>
</html>
