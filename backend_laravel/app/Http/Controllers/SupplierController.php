<?php

namespace App\Http\Controllers;

use App\Models\Supplier;
use Illuminate\Http\Request;

class SupplierController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $get_supplier = Supplier::all();

    if (count($get_supplier) > 0) {
      return response()->json(
        [
          "message" => "đã lấy dữ liệu thành công",
          "data" => $get_supplier,
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
  public function store(Request $request)
  {
    $get_supplier = Supplier::create($request->all());

    return response()->json(
      [
        "message" => "đã thêm dữ liệu thành công",
        "data" => $get_supplier,
      ]
    );
  }

  /**
   * Display the specified resource.
   */
  public function show(Supplier $supplier)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Supplier $supplier)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Supplier $supplier)
  {
    $supplier->update($request->all());

    return response()->json(
      [
        "message" => "update dữ liệu thành công",
        "data" => $supplier,
      ]
    );
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Supplier $supplier)
  {
    $supplier->delete();

    return response()->json(
      [
        "message" => "đã xóa thành công",
        "data" => $supplier,
      ]
    );
  }

  public function ShowProducts(Supplier $supplier)
  {
    $allproduct = $supplier->products;

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
          "message" => "lấy dữ liệu thất bại hoac ko co",
        ]
      );
    }
  }
}
