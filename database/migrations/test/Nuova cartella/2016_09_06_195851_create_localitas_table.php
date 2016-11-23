<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLocalitasTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('localitas', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('via');
			$table->string('civico');
			$table->string('note');

			$table->integer('comune_id')->unsigned();
			$table->foreign('comune_id')->references('id')->on('comuni');

			$table->integer('provincia_id')->unsigned();
			$table->foreign('provincia_id')->references('id')->on('province');

			$table->integer('regione_id')->unsigned();
			$table->foreign('regione_id')->references('id')->on('regioni');


			$table->integer('localizzazione_id');
			$table->string('localizzazione_type');
			
			


			$table->string('coordinataX');
			$table->string('coordinataY');
 			$table->timestamps();


		
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('localitas');
	}

}
