export const formFields = [

    {
        id: '2',
        formControlName: "cnpj",
        require: false,
        type: "text",
        label: "CNPJ",
        placeholder: "00.000.000/0001-00",
        validationMessage: "",
        inputType: 'normal'

    },
    {
        id: '3',
        formControlName: "cpf",
        require: false,
        type: "text",
        label: "CPF",
        placeholder: "000.000.000-00",
        validationMessage: "",
        inputType: 'normal'

    },
    {
        id: '4',
        formControlName: "email",
        require: true,
        type: "text",
        label: "E-MAIL",
        placeholder: "seuemail@email.com.br",
        validationMessage: "O e-mail é obrigatório.",
        inputType: 'normal'

    },
    {
        id: '5',
        formControlName: "telefone",
        require: false,
        type: "text",
        label: "TELEFONE",
        placeholder: "(00) 0000-0000",
        validationMessage: "",
        inputType: 'normal'

    },
    {
        id: '6',
        formControlName: "celular",
        require: true,
        type: "text",
        label: "CELULAR",
        placeholder: "(00) 00000-0000",
        validationMessage: "O celular para contato é obrigatório.",
        inputType: 'normal'

    },

    {
        id: '8',
        formControlName: "nomeDoCliente",
        require: true,
        type: "text",
        label: "NOME",
        placeholder: "Digite seu nome",
        validationMessage: "O seu nome é obrigatório.",
        inputType: 'normal'


    },
];

export const selecteWhereMeet = [{
    id: '7',
    formControlName: "ondeEncontrou",
    require: true,
    type: "text",
    label: "Onde nos encontrou",
    placeholder: "Local que nos encontrou..",
    validationMessage: "O local onde nos encontrou é obrigatório.",
    options: [
        { id: 0, value: 'Selecione um local..' },
        { id: 1, value: 'GOOGLE' },
        { id: 2, value: 'INSTAGRAM' },
        { id: 3, value: 'INDICAÇÃO' },
        { id: 4, value: 'FACEBOOK' },
        { id: 5, value: 'LINKEDIN' },
        { id: 6, value: 'OUTROS' },
    ]
}]