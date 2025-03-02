//Valida se os campos de Login estão preenchidos, caso não, emite um alerta
function validarCampos() {
    const usernameInput = document.getElementById('usuario');
    const passwordInput = document.getElementById('senha');
    const mensagem = document.getElementById('mensagem');

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
        mensagem.textContent = 'Preencha todos os campos!';

        if (!username) {
            usernameInput.classList.add('erro');
            usernameInput.focus();
        } else {
            usernameInput.classList.remove('erro');
        }

        if (!password) {
            passwordInput.classList.add('erro');
            if (username) passwordInput.focus();
        } else {
            passwordInput.classList.remove('erro');
        }

        setTimeout(() => {
            mensagem.textContent = '';
            usernameInput.classList.remove('erro');
            passwordInput.classList.remove('erro');
            document.activeElement.blur(); 
        }, 3000);

    } else {
        mensagem.textContent = '';

        usernameInput.classList.remove('erro');
        passwordInput.classList.remove('erro');
    }
}

//Valida se os campos de Cadastro estão preenchidos, caso não, emite um alerta
function realizaCadastro() {
    const nomeCadastroInput = document.getElementById('nomeCadastro');
    const emailCadastroInput = document.getElementById('emailCadastro');  
    const usuarioCadastroInput = document.getElementById('usuarioCadastro');
    const senhaCadastroInput = document.getElementById('senhaCadastro');
    const checkbox = document.getElementById('TermosServicos');
    const mensagemCadastro = document.getElementById('mensagemCadastro');

    const nomeCadastro = nomeCadastroInput.value.trim();
    const emailCadastro = emailCadastroInput.value.trim();
    const usuarioCadastro = usuarioCadastroInput.value.trim();
    const senhaCadastro = senhaCadastroInput.value.trim();

    if (!nomeCadastro || !emailCadastro || !usuarioCadastro || !senhaCadastro) {
        mensagemCadastro.textContent = 'Preencha todos os campos!';

        if (!nomeCadastro){
            nomeCadastroInput.classList.add('erro');
            nomeCadastroInput.focus();
        } else {
            nomeCadastroInput.classList.remove('erro');
        }

        if (!emailCadastro) {
            emailCadastroInput.classList.add('erro');
            emailCadastroInput.focus();
        } else {
            emailCadastroInput.classList.remove('erro');
        }

        if (!usuarioCadastro) {
            usuarioCadastroInput.classList.add('erro');
            usuarioCadastroInput.focus();
        } else {
            usuarioCadastroInput.classList.remove('erro');
        }

        if (!senhaCadastro) {
            senhaCadastroInput.classList.add('erro');
            senhaCadastroInput.focus();
        } else {
            senhaCadastroInput.classList.remove('erro');
        } 


        setTimeout(() => {
            mensagemCadastro.textContent = '';
            nomeCadastroInput.classList.remove('erro');
            emailCadastroInput.classList.remove('erro');
            usuarioCadastroInput.classList.remove('erro');
            senhaCadastroInput.classList.remove('erro');
            document.activeElement.blur(); 
        }, 3000);

    } else {
        mensagemCadastro.textContent = '';

        nomeCadastroInput.classList.remove('erro');
        emailCadastroInput.classList.remove('erro');
        usuarioCadastroInput.classList.remove('erro');
        senhaCadastroInput.classList.remove('erro');

        if (checkbox.checked) {
            mensagemCadastro.textContent = '';
        } else {
            mensagemCadastro.textContent = 'Por favor, confirme os Termos & Serviços';
        }

        setTimeout(() => {
            mensagemCadastro.textContent = '';
        }, 3000);
        
        
    }
    
}

//Chamada das telas
function mostraCadastro() {
    document.getElementById('tela-login').style.display = 'block';
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
 }

 function mostraLogin() {
    document.getElementById('tela-login').style.display = 'block';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
    
 }

function abrirLogin(){
    document.getElementById('containerHome').style.display = 'none';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('tela-login').style.display = 'block';
    document.getElementById('login-form').style.display = 'block';
    
}
function abrirHome(){
    document.getElementById('containerHome').style.display = 'flex';
    document.getElementById('tela-login').style.display = 'none';
}

function entradasaidalogin(){
    document.getElementById('tela-login').style.display = 'none';
    document.getElementById('signup-form').style.display = 'none';
    abrirHome();
    
    
}

function aviso(){
    mensagem.textContent = 'Como se trata de uma demonstração, a API de conexão do Google não foi incluída';

    setTimeout(() => {
        mensagem.textContent = ''; 
    }, 3000);

}