<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ReceiverRequest extends FormRequest
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
      "city" => 'required|string|min:5',
      "district" => 'required|string|min:5',
      "commune" => 'required|string|min:5',
      "type" => 'required|in:0,1',
    ];

    if ($this->isMethod('post')) {
      $arr["phone"] = 'required|string|min:10|unique:receivers,phone';
      $arr["user_id"] = 'required|numeric|exists:users,id';
    }

    if ($this->isMethod('put')) {

      $receiver = $this->route()->receiver;
      $arr["phone"] =
        [
          'required',
          'string',
          Rule::unique('receivers', 'phone')->ignore($receiver->id, 'id')
        ];
      $arr["user_id"] =
        [
          'required',
          'numeric',
          Rule::exists('users', 'id')
        ];
    }

    return $arr;
  }

  public function messages()
  {
    return [
      "required" => ':attribute không được để trống',
      "unique" => ":attribute đã tồn tại",
      "exists" => ":attribute không tồn tại",
      "min" => ":attribute tối thiểu 5 kí tự",
      "in" => ":attribute phải là số 0 hoặc 1",

    ];
  }

  public function attributes()
  {
    return [
      "phone" => 'số điện thoại người nhận',
      "user_id" => 'Người dùng',
      "city" => 'Thành phố',
      "district" => 'Quận/Huyện',
      "commune" => 'Xã',
      "type" => 'kiểu mặc định',
    ];
  }
}
