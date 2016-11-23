<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\model\localita\Comune as C;
use App\model\localita\Provincia as P;
use App\model\localita\Regione as R;

class testController extends Controller {

    public function index() {
        var_dump("scarica importaRegioni <br>");
        $this->importaRegioni();
        var_dump("scarica importaProvince <br>");
        $this->importaProvince();
        var_dump("scarica comuni <br>");
        $this->importaComuni();
    }

    public function importaRegioni() {

        $path = 'http://localhost/pLabS/public/data/regioni.csv';
        $file = fopen($path, 'r');
        $firstLine = true;

        $error = false;
        $i = 0;
        DB::beginTransaction();
        try {

            while (($line = fgetcsv($file, 0, ';')) != false) {
                if ($firstLine) {
                    $firstLine = false;
                    continue;
                }

                $regione = new R();
                $regione->siglaRegione = trim($line[0]);
                $regione->nome = utf8_decode(trim($line[1]));

                $savevd = $regione->save();
                var_dump($regione->nome);
                if (!$savevd) {
                    $error = true;
                    $errori = var_export($regione->errors, true);
                    print "nome comune: $regione->nome  errore: $errori \n";
                    break;
                } else {

                    $i++;
                    var_dump($i);
                }
            }
            if ($error) {
                DB::rollBack();
            } else {

                DB::commit();
                print "importati correttamnete: $i";
            }
        } catch (Exception $e) {
            DB::rollBack();
        }
    }

    public function importaProvince() {

        $path = 'http://localhost/pLabS/public/data/province.csv';
        $file = fopen($path, 'r');
        $firstLine = true;

        $error = false;
        $i = 0;
        DB::beginTransaction();
        try {

            while (($line = fgetcsv($file, 0, ';')) != false) {
                if ($firstLine) {
                    $firstLine = false;
                    continue;
                }

                $province = new P();
                $province->siglaRegione = trim($line[0]);
                $province->nome = utf8_decode(trim($line[1]));
                $province->sigla = trim($line[2]);


                $savevd = $province->save();
                var_dump($province->nome);
                if (!$savevd) {
                    $error = true;
                    $errori = var_export($province->errors, true);
                    print "nome comune: $province->nome  errore: $errori \n";
                    break;
                } else {
                    var_dump($province->nome);
                    $i++;
                    var_dump($i);
                }
            }
            if ($error) {
                DB::rollBack();
            } else {

                DB::commit();
                print "importati correttamnete: $i";
            }
        } catch (Exception $e) {
            DB::rollBack();
        }
    }

    public function importaComuni() {

        $path = 'http://localhost/pLabS/public/data/listacomuni.txt';
        $file = fopen($path, 'r');
        $firstLine = true;

        $error = false;
        $i = 0;
        DB::beginTransaction();
        try {

            while (($line = fgetcsv($file, 0, ';')) != false) {
                if ($firstLine) {
                    $firstLine = false;
                    continue;
                }

                $comune = new C();
                $comune->istat = trim($line[0]);
                $comune->nomeComune = utf8_decode(trim($line[1]));
                $comune->provincia = trim($line[2]);
                $comune->regione = trim($line[3]);
                $comune->prefisso = trim($line[4]);
                $comune->cap = trim($line[5]);
                $comune->codFisco = trim($line[6]);
                $comune->abitanti = trim($line[7]);
                $comune->link = trim($line[8]);

                $savevd = $comune->save();
                //  var_dump($comune->nomeComune);
                if (!$savevd) {
                    $error = true;
                    $errori = var_export($comune->errors, true);
                    print "nome comune: $comune->nomeComune  errore: $errori \n";
                    break;
                } else {
                    //   var_dump($comune->nomeComune);
                    $i++;
                    var_dump($i);
                }
            }
            if ($error) {
                DB::rollBack();
            } else {

                DB::commit();
                print "importati correttamnete: $i";
            }
        } catch (Exception $e) {
            DB::rollBack();
        }
    }

}
