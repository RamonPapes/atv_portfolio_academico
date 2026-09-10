import { useRef, useState } from 'react'
import './FormularioContato.css'

const VALORES_INICIAIS = {
  nome: '',
  email: '',
  assunto: '',
  mensagem: '',
}

const EMAIL_VALIDO = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const validar = ({ nome, email, assunto, mensagem }) => {
  const erros = {}

  if (nome.trim().length < 2) {
    erros.nome = 'Informe seu nome com pelo menos 2 caracteres.'
  }

  if (email.trim() === '') {
    erros.email = 'Informe seu e-mail para que eu possa responder.'
  } else if (!EMAIL_VALIDO.test(email.trim())) {
    erros.email = 'Esse e-mail parece incompleto. Exemplo: nome@dominio.com'
  }

  if (assunto.trim() === '') {
    erros.assunto = 'Escreva um assunto curto para a mensagem.'
  }

  if (mensagem.trim().length < 10) {
    erros.mensagem = 'A mensagem precisa ter pelo menos 10 caracteres.'
  }

  return erros
}

function MensagemErro({ campo, texto }) {
  if (!texto) {
    return null
  }

  return (
    <p className="formulario__erro" id={`erro-${campo}`}>
      {texto}
    </p>
  )
}

function FormularioContato() {
  const [valores, setValores] = useState(VALORES_INICIAIS)
  const [erros, setErros] = useState({})
  const [enviado, setEnviado] = useState(false)
  const formularioRef = useRef(null)

  const aoDigitar = (evento) => {
    const { name, value } = evento.target

    setValores((anteriores) => ({ ...anteriores, [name]: value }))
    setEnviado(false)

    if (erros[name]) {
      setErros((anteriores) => {
        const atualizados = { ...anteriores }
        delete atualizados[name]
        return atualizados
      })
    }
  }

  const aoEnviar = (evento) => {
    evento.preventDefault()

    const encontrados = validar(valores)
    setErros(encontrados)

    const primeiroInvalido = Object.keys(encontrados)[0]

    if (primeiroInvalido) {
      setEnviado(false)
      formularioRef.current.elements[primeiroInvalido].focus()
      return
    }

    setValores(VALORES_INICIAIS)
    setEnviado(true)
  }

  const propsDoCampo = (campo) => ({
    id: `contato-${campo}`,
    name: campo,
    value: valores[campo],
    onChange: aoDigitar,
    required: true,
    'aria-invalid': erros[campo] ? true : undefined,
    'aria-describedby': erros[campo] ? `erro-${campo}` : undefined,
  })

  return (
    <form
      className="formulario"
      ref={formularioRef}
      onSubmit={aoEnviar}
      noValidate
    >
      <div className="formulario__linha">
        <div className="formulario__campo">
          <label htmlFor="contato-nome">Nome</label>
          <input type="text" autoComplete="name" {...propsDoCampo('nome')} />
          <MensagemErro campo="nome" texto={erros.nome} />
        </div>

        <div className="formulario__campo">
          <label htmlFor="contato-email">E-mail</label>
          <input type="email" autoComplete="email" {...propsDoCampo('email')} />
          <MensagemErro campo="email" texto={erros.email} />
        </div>
      </div>

      <div className="formulario__campo">
        <label htmlFor="contato-assunto">Assunto</label>
        <input type="text" {...propsDoCampo('assunto')} />
        <MensagemErro campo="assunto" texto={erros.assunto} />
      </div>

      <div className="formulario__campo">
        <label htmlFor="contato-mensagem">Mensagem</label>
        <textarea rows="5" {...propsDoCampo('mensagem')} />
        <MensagemErro campo="mensagem" texto={erros.mensagem} />
      </div>

      <div className="formulario__rodape">
        <button type="submit" className="botao">
          Enviar mensagem
        </button>

        <p className="formulario__retorno" role="status">
          {enviado
            ? 'Mensagem registrada. Este é um envio simulado: nada é transmitido a um servidor.'
            : ''}
        </p>
      </div>
    </form>
  )
}

export default FormularioContato
