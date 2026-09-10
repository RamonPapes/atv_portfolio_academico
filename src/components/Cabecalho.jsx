import './Cabecalho.css'

const LINKS = [
  { href: '#inicio', rotulo: 'Início' },
  { href: '#sobre', rotulo: 'Sobre' },
  { href: '#atividades', rotulo: 'Atividades' },
  { href: '#contato', rotulo: 'Contato' },
]

function Cabecalho({ marca, titulo }) {
  return (
    <header className="cabecalho" id="inicio">
      <div className="cabecalho__identidade">
        <p className="cabecalho__marca">{marca}</p>
        <h1>{titulo}</h1>
      </div>

      <nav className="navegacao" aria-label="Navegação principal">
        <ul>
          {LINKS.map(({ href, rotulo }) => (
            <li key={href}>
              <a href={href}>{rotulo}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Cabecalho
