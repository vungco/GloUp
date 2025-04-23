<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CategoryRequest extends FormRequest
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

    if ($this->isMethod('post')) {
      $arr = [
        "name" => [
          "required",
          "string",
          "unique:categories,name"
        ]
      ];
    }

    if ($this->isMethod('put')) {

      $category = $this->route()->category;
      $arr = [
        "name" => [
          "required",
          "string",
          Rule::unique('categories', 'name')->ignore($category->id, 'id')
        ]
      ];
    }

    return $arr;
  }

  public function messages()
  {
    return [
      "required" => ':attribute không được để trống',
      "unique" => ':attribute đã tồn tại rồi',
      "string" => ':attribute phai la chuoi ky tu'
    ];
  }

  public function attributes()
  {
    return [
      "name" => 'Tên',
    ];
  }
}
