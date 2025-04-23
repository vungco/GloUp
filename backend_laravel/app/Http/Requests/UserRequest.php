<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
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
      "password" => 'required|string|min:5',
      "role" => 'required|in:admin,user',
    ];

    if ($this->isMethod('post')) {
      $arr["name"] = 'required|string|unique:users,name';
      $arr["email"] = 'required|string|unique:users,email';
    }

    if ($this->isMethod('put')) {

      $user = $this->route()->user;

      $arr["name"] = [
        "required",
        "string",
        Rule::unique('users', 'name')->ignore($user->id, 'id')
      ];

      $arr["email"] = [
        "required",
        "string",
        Rule::unique('users', 'email')->ignore($user->id, 'id')
      ];
    }

    return $arr;
  }

  public function messages()
  {
    return [
      "required" => ':attribute không được để trống',
      "unique" => ":attribute đã tồn tại",
      "min" => ':attribute tối thiểu là :min',
      "in" => ":attribute phải là 'admin' hoặc 'user'",
    ];
  }

  public function attributes()
  {
    return [
      "name" => 'tên khách hàng',
      "password" => 'mật khẩu',
      "email" => 'email',
      "role" => 'quyền hạn',
    ];
  }
}
