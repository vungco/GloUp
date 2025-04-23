<?php

namespace App\Http\Controllers\AuthUser;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class LoginController extends Controller
{
  public function login(Request $request)
  {
    $email = $request->email;
    $password = $request->password;

    $status = Auth::attempt(['email' => $email, 'password' => $password]);

    if ($status) {
      $user = Auth::user();

      $token = $request->user()->createToken('Token_name');

      return response()->json([
        'message' => 'đăng nhập thành công',
        'user' => [
          'id' => $user->id,
          'role' => $user->role,
          'name' => $user->name,
        ],
        'token' => $token->plainTextToken,
      ]);
    }
    return response()->json([
      'message' => 'đăng nhập thất bại sai tk hoặc mk',
    ], 401);
  }

  public function showProfile(Request $request)
  {
    return response()->json(
      [
        "message" => "lấy dữ liệu thành công",
        'data' => $request->user(),
      ]
    );
  }
}
