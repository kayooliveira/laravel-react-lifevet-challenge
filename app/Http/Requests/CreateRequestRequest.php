<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateRequestRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
            'label' => ['required','unique:requests,label,animal_id'],
            'animal' => ['numeric','exists:animals,id'],
            'exams' => ['required']

        ];
    }

    public function messages(){
        return [
            'label.required' => 'O campo "descrição" é requerido!',
            'label.unique' => 'Já existe uma solicitação para este animal com estas informações',
        ];
    }
}
