# Portfólio Acadêmico — Desenvolvimento Web

Aplicação em React que reúne as 30 atividades da disciplina de Desenvolvimento
Web em um único quadro, cada uma com descrição, tecnologias, status e link para
o commit que a entregou. O projeto foi construído de forma incremental: cada
atividade é um commit no histórico deste repositório.

## Links do projeto

| Campo | Endereço |
| --- | --- |
| Repositório | https://github.com/RamonPapes/atv_portfolio_academico |
| Aplicação publicada (Vercel) | https://atv-portfolio-academico.vercel.app/ |
| Revisão de acessibilidade | [docs/acessibilidade.md](docs/acessibilidade.md) |

## O que a aplicação faz

- Quadro com as 30 atividades, cada uma em um cartão com número, título,
  descrição, tecnologias e status.
- Filtro por tecnologia e busca por texto, que ignora maiúsculas e acentos e se
  combina com o filtro.
- Contador e barra de progresso das entregas concluídas.
- Modal de detalhes por atividade, sobre o elemento `dialog` nativo.
- Formulário de contato com validação própria e envio simulado.
- Tema claro e escuro, com a escolha guardada no `localStorage`.
- Layout responsivo e revisão de acessibilidade documentada.

## Tecnologias

| Tecnologia | Uso no projeto |
| --- | --- |
| [React 19](https://react.dev) | Componentes, props e estado local com `useState`, `useEffect` e `useRef` |
| [Vite 8](https://vite.dev) | Servidor de desenvolvimento e build de produção |
| JavaScript (ES2022) | Módulos ES, derivação das listas com `map` e `filter` |
| HTML semântico | `header`, `nav`, `main`, `section`, `dialog` e `footer` |
| CSS | Variáveis em `tokens.css`, Flexbox, Grid e media queries, sem framework |
| [Oxlint](https://oxc.rs) | Análise estática do código |
| Git e GitHub | Histórico com um commit por atividade |
| Vercel | Publicação contínua a partir da branch `main` |

## Pré-requisitos

- **Node.js** `^20.19.0` ou `>=22.12.0` — exigência do Vite 8; confira com
  `node -v`.
- **npm** 10 ou superior, instalado junto com o Node.
- **Git**, para clonar o repositório.

## Instalação

```bash
git clone https://github.com/RamonPapes/atv_portfolio_academico.git
cd atv_portfolio_academico
npm install
```

## Comandos

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Sobe o servidor de desenvolvimento em `http://localhost:5173` com recarga automática |
| `npm run build` | Gera a versão de produção na pasta `dist/` |
| `npm run preview` | Serve localmente o conteúdo de `dist/`, para conferir o build antes de publicar |
| `npm run lint` | Roda o Oxlint sobre o projeto |

## Estrutura de pastas

```
atv_portfolio_academico/
├── docs/
│   └── acessibilidade.md      # Registro das verificações de acessibilidade
├── src/
│   ├── assets/                # Imagens do projeto (avatar)
│   ├── components/            # Um .jsx e um .css por componente
│   │   ├── BotaoTema
│   │   ├── BuscaAtividades
│   │   ├── Cabecalho
│   │   ├── CartaoAtividade
│   │   ├── FiltroTecnologias
│   │   ├── FormularioContato
│   │   ├── ModalAtividade
│   │   ├── ProgressoAtividades
│   │   ├── Rodape
│   │   └── Sobre
│   ├── data/
│   │   └── atividades.js      # As 30 entregas e as constantes de status e filtro
│   ├── hooks/
│   │   └── useTema.js         # Tema claro/escuro e preferência salva
│   ├── styles/
│   │   ├── base.css           # Normalização e elementos base
│   │   └── tokens.css         # Cores, espaçamentos, tipografia e tema escuro
│   ├── App.jsx                # Composição das seções da página
│   ├── index.css              # Importa os estilos globais
│   └── main.jsx               # Ponto de entrada do React
├── index.html
├── package.json
└── vite.config.js
```

O conteúdo fica separado da apresentação: os textos das atividades vivem em
[`src/data/atividades.js`](src/data/atividades.js) e os componentes apenas os
exibem. Para acrescentar ou alterar uma entrega, basta editar esse arquivo — o
contador, a barra de progresso e os filtros derivam dele.

## Publicação

O projeto está publicado na Vercel a partir da branch `main`, com as
configurações padrão para Vite:

- Build: `npm run build`
- Diretório de saída: `dist`

Cada push para `main` gera um novo deploy.

## Autoria

**Ramon Enrico Alves Papes**
Engenharia da Computação — turma GRDECPDIU20241
Disciplina de Desenvolvimento Web

- GitHub: [@RamonPapes](https://github.com/RamonPapes)
- E-mail: ramonpapes@gmail.com

Projeto acadêmico, de uso livre para consulta e estudo.
