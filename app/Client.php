<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;
class Client extends Model
{
    protected $table='clients';
    protected $fillable=['fname','lname'];

    public static function LastId()
    {
        $id=DB::table('clients')
			->select('clients.id')
			->orderBy('clients.id','DESC')
			 ->first()->id;
			return $id; 
    }
}
