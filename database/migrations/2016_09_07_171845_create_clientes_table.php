<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClientesTable extends Migration {

private $tableName = "Cliente";
    private $tableNameFK = "Users";
    private $tableLocalitaFK = "localitas";
     // tabella per le Foreign Keys
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {

			$table->increments('id');
			$table->string('titolo');
			$table->string('name');
			$table->string('cognome');
			$table->string('email')->unique();
			$table->string('tel')->unique();
			$table->string('cell')->unique();
			$table->string('fax')->unique();

            $table->integer('user_id')->unsigned();
            $table->integer('follows_user_id')->unsigned(); 
 			$table->integer('localita_id')->unsigned();

            $table->timestamps();

            $table->unique(array('user_id','follows_user_id','localita_id'));
            $table->foreign('follows_user_id')->references('id')->on($this->tableNameFK);
            $table->foreign('user_id')->references('id')->on($this->tableNameFK);
            $table->foreign('localita_id')->references('id')->on($this->tableLocalitaFK);
        });
    }
 
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists($this->tableName);
    }
 
}