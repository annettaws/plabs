<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRegioniTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {



        Schema::create('regioni', function (Blueprint $table) {
            $table->increments('id');
            $table->string('siglaRegione')->unique();
            $table->string('nome');
            $table->timestamps();
        });


        Schema::create('province', function (Blueprint $table) {
            $table->increments('id');
            $table->string('siglaRegione');
            $table->foreign('siglaRegione')->references('siglaRegione')->on('regioni')->onDelete('cascade');
            $table->string('nome');
            $table->string('sigla')->unique();
            $table->timestamps();
        });


        Schema::create('comuni', function (Blueprint $table) {
            $table->increments('id');
            $table->string('istat')->unique();
            $table->string('nomeComune');
            $table->string('provincia');
            $table->foreign('provincia')->references('sigla')->on('province')->onDelete('cascade');
            $table->string('regione');
            $table->foreign('regione')->references('siglaRegione')->on('regioni')->onDelete('cascade');
            $table->string('prefisso');
            $table->string('cap');
            $table->string('codFisco');
            $table->string('abitanti');
            $table->string('link');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::drop('regioni');
        Schema::drop('province');
        Schema::drop('comuni');
    }

}
