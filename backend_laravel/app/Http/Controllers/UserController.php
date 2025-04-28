<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\Receiver;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
  public function index()
  {
    $get_user = User::all();

    if ($get_user) {
      return response()->json(
        [
          "message" => "đã lấy dữ liệu thành công",
          "data" => $get_user,
        ]
      );
    } else {
      return response()->json(
        [
          "message" => "lấy dữ liệu thất bại",
        ]
      );
    }
  }

  public function store(UserRequest $request)
  {

    $user = User::create([
      'name' => $request->name,
      'password' => Hash::make($request->password), // Mã hóa mật khẩu
      'email' => $request->email,
      'role' => $request->role,
    ]);

    return response()->json(
      [
        "message" => "đã thêm dữ liệu thành công",
        "data" => $user,
      ]
    );
  }

  public function show(User $user)
  {
    return response()->json(
      [
        "message" => "lấy dữ liệu thành công",
        "data" => $user,
      ]
    );
  }

  public function update(UserRequest $request, User $user)
  {
    $user->update([
      'name' => $request->name,
      'password' => Hash::make($request->password), // Mã hóa mật khẩu
      'email' => $request->email,
      'role' => $request->role,
    ]);
    return response()->json(
      [
        "message" => "update dữ liệu thành công",
        "data" => $user,
      ]
    );
  }

  public function destroy(User $user)
  {
    $user->delete();

    return response()->json(
      [
        "message" => "đã xóa thành công",
        "data" => $user,
      ]
    );
  }

  public function ShowReceivers(Request $request)
  {
    $get_receivers = $request->user()->receivers()->orderBy('type', 'desc')->get();

    if (count($get_receivers) > 0) {
      return response()->json(
        [
          "message" => "đã lấy dữ liệu thành công",
          "data" => $get_receivers,
        ]
      );
    } else {
      return response()->json(
        [
          "message" => "không có người nhận nào của ng dùng này cả",
        ],
        404
      );
    }
  }

  public function showByType(Request $request)
  {
    $get_receivers = $request->user()->receivers()->where('type', 1)->get();
    // $receiver= Receiver::where('receiver_type',1)->get();

    if (count($get_receivers) > 0) {
      return response()->json(
        [
          "message" => "đã get thành công",
          "data" => $get_receivers,
        ]
      );
    } else {
      return response()->json(
        [
          "message" => "chưa có người nhận nào cả",
        ],
        404
      );
    }
  }

  public function setType(Request $request, Receiver $receiver)
  {
    $request->user()->receivers()->where('type', 1)->update(["type" => 0]);
    $receiver->update(["type" => 1]);


    return response()->json(
      [
        "message" => "đã update thành công",
        "data" => $receiver,
      ]
    );
  }
}
