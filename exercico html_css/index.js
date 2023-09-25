class ValidaForm {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.emailbD = 'abc123@gmail.com';
        this.senhaBD = '123';
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.submitAleatorio(e)
        })
    }

    submitAleatorio(e) {
        e.preventDefault();
        const emailValido = this.validaEmail();
        const senhaValido = this.validaSenha();

        if (emailValido && senhaValido) {
            this.formulario.submit()
        }
    }

    validaEmail() {
        let valido = true;
        const email = document.querySelector('.email').value
        if (email !== this.emailbD) {
            valido = false;
           
            const lbEmail = document.querySelector('.lb-email')
            lbEmail.innerHTML =`<p class="lp-email">Email nao cadastrado</p>` 
        }else{
            const lbEmail = document.querySelector('.lb-email')
            lbEmail.innerHTML =`` 

        }

        return valido;
    }
    
    validaSenha() {
        let valido = true;
        const senha = document.querySelector('.senha').value
        if (senha !== this.senhaBD) {
            valido = false;
            const lbSenha = document.querySelector('.lb-senha')
            lbSenha.innerHTML =`<p class="lp-senha">Senha nao cadastrada</p>` 
        }else{
            const lbSenha = document.querySelector('.lb-senha')
            lbSenha.innerHTML =`` 

        }
        return valido;
    }
}
const form = new ValidaForm();