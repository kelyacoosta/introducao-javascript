const formCadastro = document.getElementById('form-cadastro')

const nomeInput = document.getElementById('nome')
const emailInput = document.getElementById('email')
const dataInput = document.getElementById('data')
const sexoInputs = document.getElementsByName('sexo')

function validaInformacoes(nome, email, data) {

    // Nome e sobrenome
    if (nome.indexOf(" ") === -1) {
        alert("Digite nome e sobrenome.")
        return
    }

    // Email
    if (email.indexOf("@") === -1 || email.indexOf(".com") === -1) {
        alert("E-mail inválido.")
        return
    }

    // Sexo
    let sexoSelecionado = ""

    for (let i = 0; i < sexoInputs.length; i++) {
        if (sexoInputs[i].checked) {
            sexoSelecionado = sexoInputs[i].value
        }
    }

    if (sexoSelecionado === "") {
        alert("Selecione o sexo.")
        return
    }

    // Data
    if (data.length !== 10 || data[2] !== "/" || data[5] !== "/") {
        alert("Data inválida. Use DD/MM/AAAA.")
        return
    }

    alert("Cadastro realizado com sucesso!")
    resetForm()
}

function resetForm() {
    nomeInput.value = ""
    emailInput.value = ""
    dataInput.value = ""

    for (let i = 0; i < sexoInputs.length; i++) {
        sexoInputs[i].checked = false
    }
}

formCadastro.addEventListener('submit', function (event) {
    event.preventDefault()
    validaInformacoes(
        nomeInput.value,
        emailInput.value,
        dataInput.value
    )
})
