<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProductRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   */
  public function authorize(): bool
  {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
   */
  public function rules(): array
  {
    $arr = [
      "price" => 'required|numeric',
      "dsc" => 'required|string',
      "supplier_id" => 'required|numeric|exists:suppliers,id',
      "quantity" => 'required|numeric',
    ];

    if ($this->isMethod('post')) {
      $category = $this->route()->category;
      $arr["name"] = 'required|string|unique:products,name';
      $arr["image"] = 'required|image'; // Ảnh bắt buộc khi tạo

      if (!$category) {
        $arr["category_id"] = 'required|numeric|exists:categories,id';
      }
    }

    if ($this->isMethod('put')) {

      $product = $this->route()->product;
      $arr["name"] = [
        "required",
        "string",
        Rule::unique('products', 'name')->ignore($product->id, 'id')
      ];

      $arr["image"] = 'nullable|image'; // Ảnh không bắt buộc khi update
      $arr["category_id"] = 'required|numeric|exists:categories,id';
    }

    return $arr;
  }

  public function messages()
  {
    return [
      "required" => ':attribute không được để trống',
      "unique" => ":attribute đã tồn tại",
      "numeric" => ":attribute phải là số",
      "string" => ":attribute phải là chuỗi ký tự",
      "exists" => ":attribute phải tồn tại rồi",
    ];
  }

  public function attributes()
  {
    return [
      "name" => 'Tên sản phẩm',
      "price" => 'Giá sản phẩm',
      "dsc" => 'Mô tả sản phẩm',
      "category_id" => 'Nhóm sản phẩm',
      "supplier_id" => 'Nhà cung cấp sản phẩm',
      "quantity" => 'Số lượng sản phẩm',
    ];
  }
}
