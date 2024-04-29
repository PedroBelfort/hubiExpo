const RegisterDataForm = {
    "1" : 
        [
            {
               "title" : "DADOS PESSOAIS",
               "type": "form",
               "data": "personal_data",
               "fields": [
                { key: "first_name",value: "Nome Próprio"}, 
                { key: "last_name", value: "Apelido"}, 
                { key: "gender", value: "Género"},
                { key: "date_of_birth", value: "Data de Nascimento"},
                { key: "address", value: "Morada"},
                { key: "zip_code", value: "Código Postal"}
               ],     
            },
            /*
            {
                "title" : "PROFISSÃO",
                "type": "checkbox",
                "data": "personal_data",
                "key_tag": "profession", 
                "fields": [
                 { key: 1, value: "Cuidador Formal"}, 
                 { key: 2, value: "Enfermeiro"}, 
                 { key: 3, value: "Profissional De Limpeza"}
                ],  
            },
            */
            {
                "title" : "NÍVEL DE HABILITAÇÃO",
                "type": "button",
                "data": "personal_data",
                "key_tag": "education", 
                "fields": [
                    { key: 1 ,value: "9º ano"}, 
                    { key: 2, value: "12º ano"}, 
                    { key: 3, value: "Licenciatura"},
                    { key: 4, value: "Mestrado"},
                    { key: 5, value: "Doutoramento"}]
            },
            /*
            {
                "title" : "EDUCAÇÂO",
                "type": "form",
                "fields": ["instituição", "àrea de Estudo", "Ano de Inicio", "Ano de Fim"]
            },
            */
            {
                "key_tag": "education_pic",
                "title" : "Certificado de Habilitações",
                "type": "picture",
                "Description":"qq"
            },
            /*
            {   
                "title" : "REGIME DE SERVIÇO",
                "type": "button",
                "fields": ["Tempo Parcial", "Tempo Inteiro", "Permanente"]
            },
            */
            /*
            {
                "title" : "LOCAL de SERVIÇO",
                "type": "form",
                "fields": ["Concelho"]
            },
            */
            {
                "title" : "CARTÂO DE CIDADÂO",
                "type": "picture",
                "Description":"qq"
            },
            {
                "title" : "COMPROVATIVO DE MORADA",
                "type": "picture",
                "Description":"qq"
            },
            {
                "title" : "ATESTADO DE ROBUSTEZ",
                "type": "picture",
                "Description":"qq"
            },
            {
                "title" : "REGISTO COMERCIAL",
                "type": "picture",
                "Description":"qq"
            },
            {
                "title" : "REGISTO CRIMINAL",
                "type": "picture",
                "Description":"qq"
            },
            {
                "title" : "SEGUROS",
                "type": "picture",
                "Description":"acidente de trabalho"
            },
            {
                "title" : "SEGUROS",
                "type": "picture",
                "Description":"responsabilidade civil"
            },
            {
                "title" : "SEGURANÇA SOCIAL",
                "type": "picture",
                "Description":"qq"
            },
            {
                "title" : "COMPROVATIVO DE IBAN",
                "type": "picture",
                "Description":"qq"
            }

        ],
    "2": [
        {
            "title" : "SOU A PESSOA CUIDADA",
            "type": "form",
            "data": "personal_data",
            "fields": [
             { key: "first_name",value: "Nome Próprio"}, 
             { key: "last_name", value: "Apelido"}, 
             { key: "gender", value: "Género"},
             { key: "date_of_birth", value: "Data de Nascimento"},
             { key: "address", value: "Morada"},
             { key: "zip_code", value: "Código Postal"}
            ],     
         }
    ],
    "3": [
        {
            "title" : "SOU TUTOR",
            "type": "form",
            "data": "personal_data",
            "fields": [
             { key: "first_name",value: "Nome Próprio"}, 
             { key: "last_name", value: "Apelido"}, 
             { key: "gender", value: "Género"},
             { key: "date_of_birth", value: "Data de Nascimento"},
             { key: "address", value: "Morada"},
             { key: "zip_code", value: "Código Postal"}
            ],     
         },
         {
            "title" : "SOU O TUTOR",
            "type": "button",
            "data": "personal_data",
            "key_tag": "affiliation", 
            "fields": [
                { key: 1 ,value: "Esposo ou Esposa"}, 
                { key: 2, value: "Pai ou Mãe"}, 
                { key: 3, value: "Avó ou Avô"},
                { key: 4, value: "Amigo ou Amiga"}
            ]
        },
        {
            "title" : "SOU O TUTOR",
            "type": "button",
            "data": "personal_data",
            "key_tag": "affiliation_type", 
            "fields": [
                { key: 1 ,value: "Estatuto do Maior Acompanhado"}, 
                { key: 2, value: "Estatuto de Cuidador Formal"}, 
                { key: 3, value: "Certidão de Casamento"},
                { key: 4, value: "Certidão de Agregado Familiar"}
            ]
        },
        {
            "title" : "SOU O TUTOR",
            "type": "picture",
            "Description":"qq"
        }
    ]
}; 




export default RegisterDataForm; 