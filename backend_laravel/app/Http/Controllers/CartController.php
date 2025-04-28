<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;

class CartController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    //


  }

  /**
   * Show the form for creating a new resource.
   */
  public function create() {}

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $user = $request->user();
    $cart = $user->carts()->where('product_id', $request->product_id)->first();
    if ($cart) {
      $newquantity = $request->quantity + $cart->quantity;
      $cart->update(['quantity' => $newquantity]);

      return response()->json(
        [
          "message" => "đã update dữ liệu thành công do sản phẩm này đã đc mua rồi",
          "data" => $cart,
        ]
      );
    } else {
      $cart = Cart::create($request->all());

      return response()->json(
        [
          "message" => "đã thêm dữ liệu thành công",
          "data" => $cart,
        ]
      );
    }
  }

  /**
   * Display the specified resource.
   */
  public function show(Cart $cart)
  {
    return response()->json(
      [
        "message" => "lấy dữ liệu thành công",
        "data" => $cart,
      ]
    );
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Cart $cart)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Cart $cart)
  {
    $cart->update($request->all());

    return response()->json(
      [
        "message" => "đã update thành công",
        "data" => $cart,
      ]
    );
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Cart $cart)
  {
    $cart->delete();

    return response()->json(
      [
        "message" => "đã xóa thành công",
        "data" => $cart,
      ]
    );
  }

  public function showCartByUser(Request $request)
  {

    $carts = $request->user()->carts()->with('product')->get();

    return response()->json(
      [
        "message" => "đã lấy dl thành công",
        "data" => $carts,
      ]
    );
  }


  public function showCartByUserSelect(Request $request)
  {
    // Lấy danh sách `cart_ids` từ request
    $cartIds = $request->input('cart_ids');

    // Kiểm tra xem `cart_ids` có hợp lệ không
    if (empty($cartIds)) {
      return response()->json(['error' => 'cart_ids is required'], 400);
    }

    // Truy vấn tất cả các giỏ hàng theo `cart_ids`
    $carts = Cart::whereIn('id', $cartIds)->with('product')->get();

    return response()->json(
      [
        "message" => "đã lấy dl thành công",
        "data" => $carts,
      ]
    );
  }
}
