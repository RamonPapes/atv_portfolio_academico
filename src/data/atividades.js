export const REPOSITORIO = 'https://github.com/RamonPapes/atv_portfolio_academico'

export const FILTROS = ['Todos', 'HTML', 'CSS', 'React', 'Git', 'Vercel']

export const FILTRO_PADRAO = FILTROS[0]

export const STATUS = {
  PLANEJADA: 'Planejada',
  EM_ANDAMENTO: 'Em andamento',
  CONCLUIDA: 'Concluída',
}

const commit = (hash) => `${REPOSITORIO}/commit/${hash}`

export const atividades = [
  {
    id: 'atv-01',
    numero: 1,
    titulo: 'Preparar o ambiente e criar o projeto',
    descricao:
      'Verificação de Node.js, npm, Git e editor, criação da aplicação React com Vite e remoção do conteúdo de demonstração do template.',
    detalhes:
      'Ferramentas conferidas no terminal, projeto gerado com Vite no template React e o conteúdo de demonstração apagado de App.jsx.',
    tecnologia: ['Node.js', 'Vite', 'React'],
    status: STATUS.CONCLUIDA,
    link: commit('64939ed'),
  },
  {
    id: 'atv-02',
    numero: 2,
    titulo: 'Inicializar o repositório Git',
    descricao:
      'Repositório iniciado com git init, .gitignore cobrindo node_modules, dist e arquivos locais, e branch principal definida como main.',
    detalhes:
      'git init na pasta do projeto, .gitignore cobrindo node_modules e dist, branch principal definida como main e primeiro commit registrado.',
    tecnologia: ['Git'],
    status: STATUS.CONCLUIDA,
    link: commit('64939ed'),
  },
  {
    id: 'atv-03',
    numero: 3,
    titulo: 'Construir a estrutura semântica',
    descricao:
      'Página montada com header, nav, main, section e footer, títulos em ordem hierárquica a partir de um único h1 e área reservada para as 30 entregas.',
    detalhes:
      'O JSX de App.jsx foi reescrito com header, nav, main, três sections e footer, um único h1 e um bloco vazio reservado para a lista.',
    tecnologia: ['HTML', 'JSX', 'React'],
    status: STATUS.CONCLUIDA,
    link: commit('3dc8abe'),
  },
  {
    id: 'atv-04',
    numero: 4,
    titulo: 'Criar cabeçalho e identidade',
    descricao:
      'Identificação com nome, curso e turma, avatar com texto alternativo descritivo e botão de atalho para o quadro de atividades.',
    detalhes:
      'Section de apresentação com nome em h2, curso e turma numa lista de definição, avatar SVG com alt descritivo e botão âncora para o quadro.',
    tecnologia: ['HTML', 'CSS', 'Acessibilidade'],
    status: STATUS.CONCLUIDA,
    link: commit('978f20a'),
  },
  {
    id: 'atv-05',
    numero: 5,
    titulo: 'Criar menu de navegação',
    descricao:
      'Links internos para Início, Sobre, Atividades e Contato, com rolagem suave respeitando prefers-reduced-motion e foco visível via :focus-visible.',
    detalhes:
      'Links do nav apontando para os ids das seções, scroll-behavior smooth no html com guarda de prefers-reduced-motion e contorno de foco via :focus-visible.',
    tecnologia: ['HTML', 'CSS', 'Acessibilidade'],
    status: STATUS.CONCLUIDA,
    link: commit('0b0185e'),
  },
  {
    id: 'atv-06',
    numero: 6,
    titulo: 'Definir o sistema visual em CSS',
    descricao:
      'Tokens de cor, espaçamento, raio e sombra em tokens.css, escala tipográfica com clamp, normalização básica com box-sizing e suporte a tema escuro.',
    detalhes:
      'Criados tokens.css com as variáveis de cor, espaçamento, raio, sombra e tipografia, e base.css com box-sizing e normalização; o resto do CSS passou a consumir só tokens.',
    tecnologia: ['CSS', 'Design System'],
    status: STATUS.CONCLUIDA,
    link: commit('6b44ecf'),
  },
  {
    id: 'atv-07',
    numero: 7,
    titulo: 'Construir cartões de atividades',
    descricao:
      'Cartão com número, título, descrição, tecnologias e ação. Hover e foco alteram apenas a moldura, então o contraste do texto é o mesmo em todos os estados.',
    detalhes:
      'Componente de cartão com número, título, descrição, etiquetas e ação, em que hover e foco mudam apenas borda e sombra, preservando o contraste do texto.',
    tecnologia: ['CSS', 'React'],
    status: STATUS.CONCLUIDA,
    link: commit('675a600'),
  },
  {
    id: 'atv-08',
    numero: 8,
    titulo: 'Organizar o layout com Flexbox',
    descricao:
      'Flexbox no cabeçalho, no menu e no grupo de botões. Resolveu o desalinhamento entre título e menu e substituiu margens fixas por gap.',
    detalhes:
      'display flex no cabeçalho com justify-content space-between, align-items center e gap, mais um grupo de botões flexível na apresentação.',
    tecnologia: ['CSS', 'Flexbox'],
    status: STATUS.CONCLUIDA,
    link: commit('11d10c0'),
  },
  {
    id: 'atv-09',
    numero: 9,
    titulo: 'Organizar atividades com CSS Grid',
    descricao:
      'Grade com repeat(auto-fit, minmax(min(17rem, 100%), 1fr)). O min() evita que a coluna mínima estoure telas estreitas e provoque rolagem horizontal.',
    detalhes:
      'A lista virou grid com repeat(auto-fit, minmax(min(17rem, 100%), 1fr)) e min-width 0 nos cartões para não vazar a tela.',
    tecnologia: ['CSS', 'Grid'],
    status: STATUS.CONCLUIDA,
    link: commit('11d10c0'),
  },
  {
    id: 'atv-10',
    numero: 10,
    titulo: 'Tornar a homepage responsiva',
    descricao:
      'Pontos de ajuste em 768px, 480px e 1440px afinando menu, tipografia, margens, avatar e grade, com avatar fluido em clamp().',
    detalhes:
      'Três blocos de media query em rem, em 768px, 480px e 1440px, ajustando cabeçalho, botões, grade e paddings, com o avatar em clamp().',
    tecnologia: ['CSS', 'Media Queries'],
    status: STATUS.CONCLUIDA,
    link: commit('11d10c0'),
  },
  {
    id: 'atv-11',
    numero: 11,
    titulo: 'Criar o componente Cabecalho',
    descricao:
      'Cabeçalho e menu extraídos para Cabecalho.jsx, com marca e título por props, links vindos de um array e estilos movidos para Cabecalho.css.',
    detalhes:
      'Marcação do header movida para Cabecalho.jsx, estilos e media queries movidos para Cabecalho.css e os links do menu extraídos para um array.',
    tecnologia: ['React', 'Componentes'],
    status: STATUS.CONCLUIDA,
    link: commit('44c1001'),
  },
  {
    id: 'atv-12',
    numero: 12,
    titulo: 'Criar o componente Rodape',
    descricao:
      'Rodapé em Rodape.jsx com autor e disciplina por props, ano calculado uma única vez no escopo do módulo e link de retorno ao início.',
    detalhes:
      'Rodape.jsx recebe autor e disciplina por props, calcula o ano uma única vez no escopo do módulo e traz o link de volta ao topo.',
    tecnologia: ['React', 'Componentes'],
    status: STATUS.CONCLUIDA,
    link: commit('12bfcc8'),
  },
  {
    id: 'atv-13',
    numero: 13,
    titulo: 'Criar o componente CardAtividade',
    descricao:
      'CartaoAtividade.jsx recebe numero, titulo, descricao, tecnologia e link por props, e trata a ausência de link exibindo o estado Em breve.',
    detalhes:
      'O cartão passou a receber numero, titulo, descricao, tecnologia e link por props, com estado alternativo quando ainda não há link.',
    tecnologia: ['React', 'Props'],
    status: STATUS.CONCLUIDA,
    link: commit('675a600'),
  },
  {
    id: 'atv-14',
    numero: 14,
    titulo: 'Modelar os dados das atividades',
    descricao:
      'As 30 entregas passaram a viver em src/data/atividades.js, cada uma com id, numero, titulo, descricao, tecnologia, status e link, separando conteúdo de apresentação.',
    detalhes:
      'Criado src/data/atividades.js exportando as 30 entregas com os sete campos, mais as constantes STATUS e FILTROS.',
    tecnologia: ['JavaScript', 'React'],
    status: STATUS.CONCLUIDA,
    link: null,
  },
  {
    id: 'atv-15',
    numero: 15,
    titulo: 'Renderizar a lista com map',
    descricao:
      'Gerar os cartões dinamicamente com map sobre o array de atividades, usando uma key estável e exclusiva e conferindo a numeração de 1 a 30.',
    detalhes:
      'A seção percorre o array com map usando o id como key, e App.jsx deixou de guardar dados.',
    tecnologia: ['React', 'JavaScript'],
    status: STATUS.CONCLUIDA,
    link: commit('675a600'),
  },
  {
    id: 'atv-16',
    numero: 16,
    titulo: 'Mostrar status condicional',
    descricao:
      'Status Planejada, Em andamento ou Concluída exibido em etiqueta própria. A escolha da classe visual sai de um objeto de consulta fora do componente, então o JSX não carrega condições encadeadas.',
    detalhes:
      'Um objeto APARENCIA_STATUS fora do componente associa cada status a uma classe e a um símbolo, evitando condições encadeadas no JSX.',
    tecnologia: ['React', 'CSS'],
    status: STATUS.CONCLUIDA,
    link: null,
  },
  {
    id: 'atv-17',
    numero: 17,
    titulo: 'Criar filtro por tecnologia',
    descricao:
      'Botões Todos, HTML, CSS, React, Git e Vercel guardando a escolha em useState. A lista exibida é derivada com filter a cada renderização, então o array original permanece intacto.',
    detalhes:
      'useState guarda a tecnologia escolhida e a lista exibida é derivada com filter, sem tocar no array original.',
    tecnologia: ['React', 'useState'],
    status: STATUS.CONCLUIDA,
    link: null,
  },
  {
    id: 'atv-18',
    numero: 18,
    titulo: 'Criar busca por texto',
    descricao:
      'Campo controlado filtrando por título ou descrição, ignorando maiúsculas e acentos, combinado com o filtro de tecnologia e com mensagem própria quando nada é encontrado.',
    detalhes:
      'Campo controlado por useState, com uma função que remove acentos e maiúsculas antes de procurar o termo no título e na descrição.',
    tecnologia: ['React', 'useState'],
    status: STATUS.CONCLUIDA,
    link: null,
  },
  {
    id: 'atv-19',
    numero: 19,
    titulo: 'Criar contador de progresso',
    descricao:
      'Contador no formato concluídas de 30, calculado com filter sobre a lista a cada renderização. Nada é guardado em useState, então o número nunca fica defasado em relação aos dados.',
    detalhes:
      'filter sobre a lista conta os itens concluídos a cada renderização, sem guardar o número em estado.',
    tecnologia: ['React', 'JavaScript'],
    status: STATUS.CONCLUIDA,
    link: null,
  },
  {
    id: 'atv-20',
    numero: 20,
    titulo: 'Criar barra de progresso',
    descricao:
      'Barra com role progressbar, aria-valuenow e aria-valuetext, percentual visível em texto e cor de conclusão ao chegar a 100%. O cálculo trata os extremos para que 0% e 100% nunca sejam arredondados por engano.',
    detalhes:
      'Percentual calculado com guardas para os extremos, exibido em texto e numa barra com role progressbar e aria-valuetext.',
    tecnologia: ['CSS', 'Acessibilidade'],
    status: STATUS.CONCLUIDA,
    link: null,
  },
  {
    id: 'atv-21',
    numero: 21,
    titulo: 'Criar modal de detalhes',
    descricao:
      'Modal construído sobre o elemento dialog nativo, aberto pela ação do cartão e fechado por botão, Escape ou clique no fundo, com o foco preso ao conteúdo enquanto está aberto.',
    detalhes:
      'Elemento dialog nativo aberto com showModal, fechando por botão, tecla Escape e clique no fundo, com o foco devolvido ao cartão de origem.',
    tecnologia: ['React', 'Acessibilidade'],
    status: STATUS.CONCLUIDA,
    link: null,
  },
  {
    id: 'atv-22',
    numero: 22,
    titulo: 'Criar formulário de contato',
    descricao:
      'Campos controlados de nome, e-mail, assunto e mensagem, com labels associados, required e confirmação simulada no envio.',
    detalhes:
      'Ainda não iniciada. Campos controlados com useState, labels associados, required e confirmação simulada no envio.',
    tecnologia: ['React', 'Formulários'],
    status: STATUS.PLANEJADA,
    link: null,
  },
  {
    id: 'atv-23',
    numero: 23,
    titulo: 'Implementar alternância de tema',
    descricao:
      'Botão para alternar entre tema claro e escuro aplicando o tema por atributo no elemento raiz, mantendo contraste e foco visível nos dois.',
    detalhes:
      'Ainda não iniciada. Botão alternando um atributo no elemento raiz, com os tokens de cor respondendo a esse atributo.',
    tecnologia: ['React', 'CSS'],
    status: STATUS.PLANEJADA,
    link: null,
  },
  {
    id: 'atv-24',
    numero: 24,
    titulo: 'Persistir preferência local',
    descricao:
      'Salvar o tema em localStorage, ler a preferência ao iniciar e definir um padrão quando não houver valor guardado.',
    detalhes:
      'Ainda não iniciada. Leitura e gravação do tema em localStorage, com valor padrão quando não houver preferência salva.',
    tecnologia: ['React', 'localStorage'],
    status: STATUS.PLANEJADA,
    link: null,
  },
  {
    id: 'atv-25',
    numero: 25,
    titulo: 'Adicionar seção Sobre',
    descricao:
      'Componente Sobre com texto autoral, tecnologias praticadas sem exagerar o nível de domínio e links profissionais apropriados para publicação.',
    detalhes:
      'Ainda não iniciada. Componente Sobre com texto autoral, lista de tecnologias praticadas e links profissionais.',
    tecnologia: ['React', 'HTML'],
    status: STATUS.PLANEJADA,
    link: null,
  },
  {
    id: 'atv-26',
    numero: 26,
    titulo: 'Revisar acessibilidade',
    descricao:
      'Revisão de headings, labels, alt, foco, contraste e uso por teclado, sem depender apenas de cor para transmitir status, com no mínimo cinco verificações registradas.',
    detalhes:
      'Ainda não iniciada. Revisão de headings, labels, alt, foco, contraste e navegação por teclado, com as verificações registradas.',
    tecnologia: ['Acessibilidade', 'HTML'],
    status: STATUS.PLANEJADA,
    link: null,
  },
  {
    id: 'atv-27',
    numero: 27,
    titulo: 'Criar o README do repositório',
    descricao:
      'Documentação com título, descrição, tecnologias, pré-requisitos, comandos, estrutura de pastas, autoria e campos para os links do repositório e da Vercel.',
    detalhes:
      'Ainda não iniciada. README com descrição, tecnologias, pré-requisitos, comandos, estrutura de pastas e campos para os links.',
    tecnologia: ['Markdown', 'Documentação'],
    status: STATUS.PLANEJADA,
    link: null,
  },
  {
    id: 'atv-28',
    numero: 28,
    titulo: 'Organizar o histórico Git',
    descricao:
      'Revisão de git status e git log, commits descritivos sem arquivos indevidos e criação da tag local v1.0.0 após validar a versão final.',
    detalhes:
      'Ainda não iniciada. Revisão de git log, commits descritivos e criação da tag local v1.0.0.',
    tecnologia: ['Git'],
    status: STATUS.PLANEJADA,
    link: null,
  },
  {
    id: 'atv-29',
    numero: 29,
    titulo: 'Enviar o projeto ao repositório remoto',
    descricao:
      'Repositório remoto associado ao projeto local, com envio da branch main e da tag v1.0.0 e conferência dos arquivos e do README pelo navegador.',
    detalhes:
      'Ainda não iniciada. Repositório remoto associado ao projeto local e envio da branch main e da tag v1.0.0.',
    tecnologia: ['Git', 'GitHub'],
    status: STATUS.PLANEJADA,
    link: null,
  },
  {
    id: 'atv-30',
    numero: 30,
    titulo: 'Publicar e validar na Vercel',
    descricao:
      'Publicação na Vercel com validação de menu, filtros, busca, modal, formulário e responsividade na URL gerada, mais atualização do README com o link final.',
    detalhes:
      'Ainda não iniciada. Importação do repositório na Vercel, teste da URL publicada e atualização do README com o link final.',
    tecnologia: ['Vercel', 'Deploy'],
    status: STATUS.PLANEJADA,
    link: null,
  },
]

export default atividades
