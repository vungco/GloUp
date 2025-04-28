<?php

use App\Http\Controllers\AuthUser\LoginController;
use App\Http\Controllers\AuthUser\LogoutController;
use App\Http\Controllers\AuthUser\RegisterController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ReceiverController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;



// 1. Không cần xác thực
Route::post('user/login', [LoginController::class, 'login']);
Route::post('user/register', [RegisterController::class, 'User_Register']);

// 2. Cần xác thực
Route::middleware('auth:sanctum')->group(function () {
  // Show sản phẩm / nhóm / nhà cung cấp
  Route::apiResource('products', ProductController::class)->only(['index', 'show']);
  Route::apiResource('categories', CategoryController::class)->only(['index', 'show']);
  Route::apiResource('suppliers', SupplierController::class)->only(['index', 'show']);

  Route::get('categories/{category}/products', [CategoryController::class, 'ShowProducts']);
  Route::get('suppliers/{supplier}/products', [SupplierController::class, 'ShowProducts']);

  // Giỏ hàng & người nhận
  Route::apiResource('carts', CartController::class);
  Route::get('user/carts', [CartController::class, 'showCartByUser']);
  Route::get('user/select_cart', [CartController::class, 'showCartByUserSelect']);


  Route::apiResource('receivers', ReceiverController::class);
  Route::get('user/receivers', [UserController::class, 'ShowReceivers']);
  Route::get('receiver/type', [UserController::class, 'showByType']);
  Route::get('receiver/{receiver}/setType', [UserController::class, 'setType']);

  // Logout
  Route::get('user/logout', [LogoutController::class, 'User_Logout']);

  // 3. Admin-only
  Route::middleware('admin')->group(function () {
    Route::apiResource('users', UserController::class)->only(['store', 'update', 'delete']);
    Route::apiResource('categories', CategoryController::class)->only(['store', 'update', 'delete']);
    Route::apiResource('products', ProductController::class)->only(['store', 'update', 'delete']);
    Route::apiResource('suppliers', SupplierController::class)->only(['store', 'update', 'delete']);
  });
});
