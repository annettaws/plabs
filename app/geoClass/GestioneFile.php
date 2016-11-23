<?php

namespace App\geoClass;

class GestioneFile {

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public static function creaCartella($path) {
        if (is_dir($path)) {
            $result = "caro simone la cartella gia esistente";
        } else {
            $result = mkdir($path, 0777);
            if ($result) {
                $result = $path . 'cartella creata ';
            } else {
                $result = $path . ' cartella NON creata ';
            }
        }
        return $result;
    }

    public static function eliminaCartella($path) {
        if (!is_dir($path)) {
            $result = "cartella non esistente";
        } else {
            $result = rmdir($path);
            if ($result) {
                $result = $path . 'cartella eliminata ';
            } else {
                $result = $path . ' cartella NON eliminata ';
            }
        }
        return $result;
    }

 

   public static function eliminafilesCartelle($dir){

        foreach (scandir($dir) as $item) {
         if ($item == '.' || $item == '..') continue;
            unlink($dir.DIRECTORY_SEPARATOR.$item);
            }
        rmdir($dir);
      return "ciao";
}

    public static function scriviSuFile($path,$text) {
          $file=fopen($path, 'w');
        fwrite($file,$text);
        fclose($file);
        return 'aggiunto';
    }
   

 public static function aggiungiSuFile($path,$text) {
     $file=fopen($path, 'a');
        fwrite($file,$text);
        fclose($file);
        return 'aggiunto';
    }

 public static function aggiungiAllaRiga($path,$text) {
     $file=fopen($path, 'a');
        fwrite($file,$text);
        fclose($file);
        return 'aggiunto';
    }

}
