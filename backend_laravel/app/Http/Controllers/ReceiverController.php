<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReceiverRequest;
use App\Models\Receiver;
use App\Models\User;
use Illuminate\Http\Request;

class ReceiverController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $get_receiver = Receiver::all();

    if (count($get_receiver) > 0) {
      return response()->json(
        [
          "message" => "đã lấy dữ liệu thành công",
          "data" => $get_receiver,
        ]
      );
    } else {
      return response()->json(
        [
          "message" => "lấy dữ liệu thất bại hoac ko co",
        ]
      );
    }
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(ReceiverRequest $request)
  {
    $receiver = Receiver::create($request->all());

    return response()->json(
      [
        "message" => "đã thêm dữ liệu thành công",
        "data" => $receiver,
      ]
    );
  }

  /**
   * Display the specified resource.
   */
  public function show(Receiver $receiver)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Receiver $receiver)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(ReceiverRequest $request, Receiver $receiver)
  {
    $receiver->update($request->all());

    return response()->json(
      [
        "message" => "update dữ liệu thành công",
        "data" => $receiver,
      ]
    );
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Receiver $receiver)
  {
    $receiver->delete();

    return response()->json(
      [
        "message" => "đã xóa thành công",
        "data" => $receiver,
      ]
    );
  }

  public function HandleStatus(User $user, $receiver_id)
  {
    //tìm kiếm th nào đang mặc định và chuyển đổi nó
    $user->receivers()->where('receiver_type', 1)->update(['receiver_type' => 0]);
    $user->receivers()->where('receiver_id', $receiver_id)->update(['receiver_type' => 1]);

    return response()->json(
      [
        "message" => "đã cập nhập mặc định người dùng thành công",
      ]
    );
  }
}
