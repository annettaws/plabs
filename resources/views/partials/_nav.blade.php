<nav class="navbar navbar-default ">
    <div class="container-fluid">
        <div class="navbar-header ">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle Navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a  href="<% url('/') %>"><img  class="logo" src="<% asset('/img/C.gif')%>" alt=""/></a>


        </div>


        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li><a href="<% url('/home')%>">Home</a></li>


            </ul>

            <ul class="nav navbar-nav navbar-right">
                @if (Auth::guest())
                <li><a href="<% url('/auth/login')%>">Login</a></li>
                <li><a href="<% url('/auth/register')%>">Register</a></li>
                @else

      

                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><% Auth::user()->name %> <span class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                <li <%  Request::is('user/all')?'class="active"':'' %> ><a href="<%  url('user/all') %> "><span class="glyphicon glyphicon-globe"></span> People</a></li>
                <li <%  Request::is('user/timeline')?'class="active"':'' %> ><a href="<%  url('user/timeline') %> "><span class="glyphicon glyphicon-list-alt"></span> Timeline</a></li>
                <li <%  Request::is('user/profile/'.Auth::user()->username)?'class="active"':'' %> ><a href="<%  url('user/profile/'.Auth::user()->username) %> "><span class="glyphicon glyphicon-user"></span> IO</a></li>
 

                        <li><a href="<% url('/auth/logout')%>">Logout</a></li>
                    </ul>
                </li>
                @endif
            </ul>
        </div>

</nav>

