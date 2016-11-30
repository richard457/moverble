<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;
use Response;
use App\Client;
class ClientController extends Controller
{
   public function post(Request $request)
   {
       
       Client::create($request->all());
       return Response::json(['status'=>200,'clientId'=>Client::lastId()]);
   }
}
