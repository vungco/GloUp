<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProductController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $get_product = Product::with("category")->with("supplier")->get();

    if (count($get_product) > 0) {
      return response()->json(
        [
          "message" => "đã lấy dữ liệu thành công",
          "data" => $get_product,
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
  public function store(ProductRequest $request)
  {
    $category = Category::where('id', $request->category_id)->first();
    $tennhom = Str::slug($category->name); // bỏ dấu + gạch nối
    $tensp = Str::slug($request->input('name'));     // bỏ dấu + gạch nối
    if ($request->has('image')) {
      $file = $request->file('image');

      $extension = $file->getClientOriginalExtension();

      // Tạo đường dẫn lưu trữ: aonam/aosomitrang.jpg
      $fileName = "$tensp.$extension";

      // Lưu file vào storage/app/public/products/
      $path = $file->storeAs("products/$tennhom", $fileName, 'public');

      // Đường dẫn lưu trong DB
      $imagePathInDB = "storage/products/$tennhom/$tensp.$extension";


      $request->merge(['img' => $imagePathInDB]);

      $product = Product::create($request->all());

      return response()->json(
        [
          "message" => "đã thêm dữ liệu thành công",
          'data' => $product,
        ]
      );
    } else {
      return response()->json(
        [
          "message" => "không có file ảnh đc gửi lên",
        ],
        422
      );
    }
  }

  /**
   * Display the specified resource.
   */
  public function show(Product $product)
  {
    return response()->json(
      [
        "message" => "đã lấy dữ liệu thành công",
        'data' => $product,
      ]
    );
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Product $product)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(ProductRequest $request, Product $product)
  {
    $category = Category::where('id', $product->category_id)->first();
    $tennhom = Str::slug($category->name); // bỏ dấu + gạch nối
    $tensp = Str::slug($request->input('name'));     // bỏ dấu + gạch nối
    if ($request->has('image')) {
      $file = $request->file('image');

      $fullPath = $product->img;

      if ($fullPath && is_string($fullPath)) {
        // Loại bỏ 'storage/' để lấy path trong storage/app/public
        $path = Str::replaceFirst('storage/', '', $fullPath);

        if (Storage::disk('public')->exists($path)) {
          Storage::disk('public')->delete($path);
        }
      }
      // lưu ảnh mới
      $extension = $file->getClientOriginalExtension();

      // Tạo đường dẫn lưu trữ: aonam/aosomitrang.jpg
      $fileName = "$tensp.$extension";

      // Lưu file vào storage/app/public/products/
      $path = $file->storeAs("products/$tennhom", $fileName, 'public');

      // Đường dẫn lưu trong DB
      $imagePathInDB = "storage/products/$tennhom/$tensp.$extension";


      $request->merge(['img' => $imagePathInDB]);

      //update dữ liệu
      $product->update($request->all());
    } else {
      $request->only(['name', 'price', 'dsc', 'category_id', 'supplier_id', 'quantity']);
      $product->update($request->all());
    }
    return response()->json(
      [
        "message" => "đã update dữ liệu thành công",
      ]
    );
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Product $product)
  {
    $product->delete();

    return response()->json(
      [
        "message" => "đã xóa thành công",
        "data" => $product,
      ]
    );
  }
}
