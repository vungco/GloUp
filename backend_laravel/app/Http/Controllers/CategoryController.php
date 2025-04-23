<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $get_category = Category::all();

    if (count($get_category) > 0) {
      return response()->json(
        [
          "message" => "đã lấy dữ liệu thành công",
          "data" => $get_category,
        ]
      );
    } else {
      return response()->json(
        [
          "message" => "lấy dữ liệu thất bại hoặc không có",
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
  public function store(CategoryRequest $request)
  {
    $category = Category::create($request->all());

    return response()->json(
      [
        "message" => "đã thêm dữ liệu thành công",
        "data" => $category,
      ]
    );
  }

  /**
   * Display the specified resource.
   */
  public function show(Category $category)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Category $category)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(CategoryRequest $request, Category $category)
  {
    $category->update($request->all());

    return response()->json(
      [
        "message" => "đã update thành công",
        "data" => $category,
      ]
    );
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Category $category)
  {
    $category->delete();

    return response()->json(
      [
        "message" => "đã xóa thành công",
        "data" => $category,
      ]
    );
  }

  public function ShowProducts(Category $category)
  {
    $allproduct = $category->products;

    if (count($allproduct) > 0) {
      return response()->json(
        [
          "message" => "đã lấy dữ liệu thành công",
          "data" => $allproduct,
        ]
      );
    } else {
      return response()->json(
        [
          "message" => "ko có sản phẩm nào thuộc nhóm này cả",
        ]
      );
    }
  }
}
