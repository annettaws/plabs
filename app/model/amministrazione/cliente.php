<?php namespace App\model\amministrazione;

use Illuminate\Database\Eloquent\Model;

class cliente extends Model {
    protected $table = 'cliente';
protected $fillable = [
			'titolo', 
			'name',
			'cognome', 
			'email', 
			'tel', 
			'cell',
			'fax',
			'user_id',
			'follows_user_id'

			];

protected$morphClass='cliente';


    public function localita()
    {
        return $this->morphMany('App\model\localita\Localita', 'localizzazione')->with('comune','provincia','regione');
    }

	public function user()
	{
	    return $this->belongsTo('App\User');
	}

}
