<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AnimalRequest extends FormRequest
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
            'label' => ['required','string','max:25','unique:animals,label'],
            'specie' => ['required','string','max:25'],
            'breed' => ['required','string','max:25'],
            'name' => ['required','string','max:25'],
        ];

    }
    public function messages(){
        return [
            'label.required' => 'O campo Descrição precisa ser preenchido!',
            'label.max' => 'O campo Descrição pode ter no máximo 25 caracteres!',
            'label.unique' => 'Já existe um animal com esta identificação!',
            'breed.max' => 'O campo Raça pode ter no máximo 25 caracteres!',
            'specie.max' => 'O campo Especie pode ter no máximo 25 caracteres!',
            'name.max' => 'O campo Nome pode ter no máximo 25 caracteres!',

        ];
    }
}
