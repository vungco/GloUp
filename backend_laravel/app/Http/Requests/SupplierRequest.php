<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SupplierRequest extends FormRequest
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
    $arr = [];

    if ($this->isMethod('post')) {
      $arr = [
        "name" => 'required|string|unique:suppliers,name',
        "address" => 'required|string|min:10',
        "email" => 'required|string|unique:suppliers,email',
        "phone" => 'required|string|min:10|unique:suppliers,phone',
      ];
    }

    if ($this->isMethod('put')) {

      $supplier = $this->route()->supplier;
      $arr = [
        "name" => [
          "required",
          "string",
          Rule::unique('suppliers', 'name')->ignore($supplier->id, 'id')
        ],
        "address" => 'required|string|min:10',
        "email" => [
          "required",
          "string",
          Rule::unique('suppliers', 'email')->ignore($supplier->id, 'id')
        ],
        "phone" => [
          'required',
          'string',
          'min:10',
          Rule::unique('suppliers', 'phone')->ignore($supplier->id, 'id')
        ],
      ];
    }

    return $arr;
  }

  public function messages()
  {
    return [
      "required" => ':attribute không được để trống',
      "unique" => ':attribute đã tồn tại rồi',
      "min" => ':attribute tối thiểu là :min',
      "string" => ':attribute phai la chuoi ky tu'
    ];
  }

  public function attributes()
  {
    return [
      "name" => 'tên nhà cung cấp',
      "address" => 'địa chỉ nhà cung cấp',
      "email" => 'email',
      "phone" => 'số điện thoại',
    ];
  }
}
