var Cadastro = []

Cadastro = JSON.parse(localStorage.getItem('bdInf'))
if (Cadastro == null) {
  Cadastro = []
}

function validarCadastro(nome, login, senha, ConfirmarSenha) {
  if (senha != ConfirmarSenha) {
    alert('Verifique suas senhas pois estão diferentes')
    return false
  }

  if (nome != '' && login != '' && senha != '' && ConfirmarSenha != '') {
    return true
  } else {
    return false
  }
}

function Cadastrar() {
  var nome = document.getElementById('nome').value
  var login = document.getElementById('login').value
  var senha = document.getElementById('senha').value
  var ConfirmarSenha = document.getElementById('confSenha').value
  
  var avaliarCadastro = validarCadastro(nome, login, senha, ConfirmarSenha)
  if (avaliarCadastro == false) {
    alert('Verifique os dados antes de cadastrar')
    return false
  }

  var Conta = {
    Nome: nome,
    Login: login,
    Senha: senha,
    ConfSenha: ConfirmarSenha
  }
  Cadastro.push(Conta)

  localStorage.setItem('bdInf', JSON.stringify(Cadastro))

  location.href = 'start.html'
}




function Voltar() {
  location.href = 'index.html'
}

function Entrar() {
  var nome = document.getElementById('nome').value
  var senha = document.getElementById('senha').value
  
  var encontrou = false
  Cadastro.forEach ( item => {
      if (nome == item.Login && senha == item.Senha) {
        encontrou = true
        location.href = 'start.html'
      }
  } )
  
  if (encontrou == false)
    alert('Usuário não encontrado')

}



var listaFilmes = []

listaFilmes = JSON.parse(localStorage.getItem(' bdFilme'))
if (listaFilmes == null) {
  listaFilmes = []
}

function Gerar() {
  var nome = document.getElementById('nome').value
  var resumo = document.getElementById('resumo').value
  var link = document.getElementById('link').value

  var Midia = {
    Titulo: nome,
    Resumo: resumo,
    Link: link
  }
  listaFilmes.push(Midia)

  localStorage.setItem(' bdFilme', JSON.stringify(listaFilmes))

  alert ('Filme Cadastrado com sucesso')

}

function CadastrarFilme() {
  document.getElementById('midia').innerHTML = ''
  listaFilmes.forEach((item) => {
    document.getElementById('midia').innerHTML += `<img class='poster' src='${item.Link}'>`
  })
}