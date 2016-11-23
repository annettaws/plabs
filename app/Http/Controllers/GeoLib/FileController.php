<?php

namespace App\Http\Controllers\GeoLib;

use App\Http\Controllers\Controller;
use App\geoClass\GestioneFile as G;

class FileController extends Controller {

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
$nomeSezione="testando";
$nomeSezioneNSpace='\testando';
$nameSpace='app\Http\Controllers' . $nomeSezioneNSpace  ;//percorso controlleres php

$pControllerPhp='../app/Http/Controllers';//percorso controlleres php
$pViewBlade='../resources/views';//percorso view blade del conetnt
$pControllerJs='app/controllers';//percorso controlleres javascript
$pPageHtml='page';//percorso controlleres javascript

        //return G::eliminaCartella('data/fatture');
G::creaCartella($pControllerPhp . '/' . $nomeSezione);
G::creaCartella($pViewBlade . '/' . $nomeSezione);
G::creaCartella($pControllerJs . '/' . $nomeSezione);
G::creaCartella($pPageHtml . '/' . $nomeSezione);


        $file=fopen($pControllerPhp . '/' . $nomeSezione .'/'. $nomeSezione . 'Controller.php', 'w');
        $text='<?php
namespace ' . $nameSpace .';
use App\Http\Controllers\Controller;
class ' . $nomeSezione . 'Controller extends Controller {
    public function getIndex() {
        return "Ciao";
}

    public function getCiao() {
        return "Ciao ciao";
}
}
        ';
        fwrite($file,$text);
        fclose($file);


        $file=fopen($pViewBlade . '/' . $nomeSezione .'/'. $nomeSezione . '.blade.php', 'w');
        fwrite($file,'blade');
        fclose($file);


        $file=fopen($pControllerJs . '/' . $nomeSezione .'/'. $nomeSezione . 'Controllers.js', 'w');
        fwrite($file,'javascript');
        fclose($file);

        $file=fopen($pPageHtml . '/' . $nomeSezione .'/'. $nomeSezione . '.html', 'w');
        fwrite($file,'html');
        fclose($file);
        return 'fatto tutto';

        //    return url('/');
        // return ('ciao');
        // return view('posts.create');
    }

}
