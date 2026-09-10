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
    tecnologia: ['React', 'useState'],
    status: STATUS.CONCLUIDA,
    link: null,
  },
  {
    id: 'atv-19',
    numero: 19,
    titulo: 'Criar contador de progresso',
    descricao:
      'Calcular quantas atividades estão concluídas e exibir no formato concluídas de 30, derivando o número dos dados em vez de guardá-lo em estado.',
    tecnologia: ['React', 'JavaScript'],
    status: STATUS.PLANEJADA,
    link: null,
  },
  {
    id: 'atv-20',
    numero: 20,
    titulo: 'Criar barra de progresso',
    descricao:
      'Barra acessível com valor textual e atributos ARIA adequados, exibindo corretamente os extremos de 0% e 100%.',
    tecnologia: ['CSS', 'Acessibilidade'],
    status: STATUS.PLANEJADA,
    link: null,
  },
  {
    id: 'atv-21',
    numero: 21,
    titulo: 'Criar modal de detalhes',
    descricao:
      'Modal aberto pela ação do cartão, fechando por botão, tecla Escape e área externa, com título e foco compreensíveis para quem usa teclado.',
    tecnologia: ['React', 'Acessibilidade'],
    status: STATUS.PLANEJADA,
    link: null,
  },
  {
    id: 'atv-22',
    numero: 22,
    titulo: 'Criar formulário de contato',
    descricao:
      'Campos controlados de nome, e-mail, assunto e mensagem, com labels associados, required e confirmação simulada no envio.',
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
    tecnologia: ['Vercel', 'Deploy'],
    status: STATUS.PLANEJADA,
    link: null,
  },
]

export default atividades
