const { select, input } = require('@inquirer/prompts')

let meta = {
    value: 'Tomar 3l de água por dia',
    checked: false,

}
let metas = [ meta ]

const start = async () => {

while(true){
    
    const opcao = await select({
        message: "Menu >",
        choices: [
            {
                name: "Cadastrar meta",
                value: "Cadastrar"
            },
            {
                name: "Sair",
                value: "Sair"
            },
            {
                name: "Listar metas",
                value: "Listar"
            }
        ]
    })

    const cadastrarMeta = async () => {
        const meta = await input ({ message: "Digite a meta: "})

        if(meta.length== 0) {
            console.log('A meta não pode ser vazia')
            return
        }
        metas.push(
            { value: meta, checked: false }
        )
    }




    switch(opcao) {
        case "Cadastrar":
            await cadastrarMeta()
            console.log(metas)
        case "Listar":
            console.log("vamos listar")
            break
        case "Sair":
            console.log('Até a próxima!')
            return

    }

}
}

start()