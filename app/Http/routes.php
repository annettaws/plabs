<?php

/*
  |--------------------------------------------------------------------------
  | Application Routes
  |--------------------------------------------------------------------------
  |
  | Here is where you can register all of the routes for an application.
  | It's a breeze. Simply tell Laravel the URIs it should respond to
  | and give it the controller to call when that URI is requested.
  |
 */

//Route::get('/', 'WelcomeController@index');
//Illuminate\View\Compilers\BladeCompiler::setEscapedContentTags('[[', ']]');vendor\laravel\framework\src\Illuminate\View\Compilers

Route::get('routes',function(){\Artisan::call('route:list');return"<pre>".\Artisan::output();});

Route::get('/', function () {


    return view('welcom');
});
//navigatore Pagine
Route::get('home', 'HomeController@index');
Route::get('todo/', 'HomeController@todo');
//Route::get('clienti/', 'HomeController@clienti');
Route::get('utenti/', 'HomeController@utenti');
Route::get('localita/', 'HomeController@localita');
Route::get('tests/', 'HomeController@tests');
Route::get('biblios/autoriPage', 'HomeController@biblios');
Route::get('biblios/bookPage', 'HomeController@bibliosBook');
Route::get('listini/', 'HomeController@listini');
Route::get('laratweet/', 'HomeController@laratweetIdex');
Route::get('impostazioni/', 'HomeController@impostazioni');
Route::get('generatorePage/', 'HomeController@generatore');


Route::get('iso/normative', 'HomeController@normative');
Route::get('iso/pq', 'HomeController@pq');

//impostazioni
//Ripristina i cumuni del db
Route::get('ripristinaComuni/', 'testController@index');




Route::get('test/', 'GeoLib\FileController@index');







Route::get('current_user/', 'HomeController@current_user');

Route::controllers(
        [


            'auth' => 'Auth\AuthController',
            'password' => 'Auth\PasswordController',
       //     'Clienti' => 'amministrazione\clientiController',
            'Utenti' => 'amministrazione\utentiController',
            'norme' => 'iso\normeController',
            'testando' => 'testando\testandoController',
            'generatore' => 'generatore\generatoreController',

]);


//Route::resource('posts', 'PostController');
Route::post('/posts/storie', 'PostController@store');



//TOdo
Route::get('/todos', 'TodoController@index');
Route::get('/todos/test', 'TodoController@tododafare');
Route::get('/todos/fatti', 'TodoController@todofatti');
Route::get('/todos/dafare', 'TodoController@tododafare');
Route::post('/todos', 'TodoController@addNew');
Route::delete('/todos/{K}', 'TodoController@destroy');
Route::get('/todos/{K}', 'TodoController@todoid');
Route::put('/todos/{K}', 'TodoController@agiorna');

//Route::post("todos", function () {return App\Todo::create(Input::all());});
//Route::post("todos/{id}/destroy", 'TodoController@destroy');
//Route::post('auth/login', 'Auth\AuthController@postLogin');
//Route::resource('/localita', 'LocalitaController');


//ComuniProviceRegioni:
Route::get('/tuttelelocalita', 'LocalitaController@index');
Route::get('/regioni', 'LocalitaController@regioni');
Route::get('/rescelta/{K}', 'LocalitaController@province');
Route::get('/prscelta/{K}', 'LocalitaController@comuni');
Route::get('/comuniJson', 'LocalitaController@index');
Route::post('/localita', 'LocalitaController@addNew');



//Agenda
Route::resource('agenda', 'AgendaController');



//Amministrrazione/Clienti
//Route::resource('Clienti', 'amministrazione\clientiController');




//Route::post('/agenda/crea', 'AgendaController@store');
Route::post("agenda/crea", function () {
    return App\model\Agenda\Agenda::create(Input::all());
});
//User
Route::get('/users', [ 'uses' => 'UserController@getList', 'as' => 'userList']);
Route::get('/request', 'UserController@dumpRequest');
//Biblios
Route::get('/biblios/autori','book\AuthorController@index');
Route::post('/biblios/autore', 'book\AuthorController@addnewautore');
Route::put('/biblios/autore/{K}', 'book\AuthorController@agiorna');
Route::delete('/biblios/autore/{K}', 'book\AuthorController@destroy');

Route::get('/biblios/book','book\BookController@index');
Route::post('/biblios/book', 'book\BookController@addnewbook');
Route::put('/biblios/book/{K}', 'book\BookController@agiorna');
Route::delete('/biblios/book/{K}', 'book\BookController@destroy');
      
        
    
include 'routesGen.php';
 //Route::get('/Norme/aggiorna/{K}', 'gen\Norme\NormeController@aggiorna');  
        
        
      
   


        