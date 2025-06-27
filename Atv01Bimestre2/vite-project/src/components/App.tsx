import reactLogo from '../assets/react.svg'
import githubLogo from '/public/github.svg'
import '../App.css'
import Mensagem from './Mensagem'; // 3. Importação do Componente
import Cabecalho from './Cabecalho'; // 4. Hierarquia de Componentes
import Conteudo from './Conteudo'; // 4. Hierarquia de Componentes
import Rodape from './Rodape'; // 4. Hierarquia de Componentes
import Topo from './Topo'; // 8. Layout com Múltiplos Componentes
import Meio from './Meio'; // 8. Layout com Múltiplos Componentes
import Base from './Base'; // 8. Layout com Múltiplos Componentes

// 6. Função Externa
function executarAcao() {
  console.log("Função chamada com sucesso!"); // Console do navegador
}

// 7. Função de Renderização
function renderizarMensagem() {
  return <p>Texto gerado por uma função de renderização.</p>;
}

// Função principal
function App() {
  // 2. Variáveis
  const nome = "Ana";
  const anoNascimento = "2005";

  return (
    <>
      <div>
        <a href="https://github.com/Joaogalescky/Dispositivos-Moveis-2025" target="_blank">
          <img src={githubLogo} className="logo github" alt="Github logo" />
          {/* https://icons8.com/icons/set/github */}
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Meu primeiro app React</h1>
      <div>
        {/* 2. Expressões*/}
        <p>Olá, o meu nome é {nome} e nasci em {anoNascimento}.</p>
      </div>
      <div>
        {/* 3. Uso do Componente*/}
        <Mensagem />
        {/* 4. Hierarquia de Componentes*/}
        <Cabecalho />
        <Conteudo />
        <Rodape />
      </div>
      <div>
        {/* 5. Evento de Clique com Função Online*/}
        <button onClick={() => alert("Você clicou no botão!")}>Mostrar Alerta</button>
        {/* 6. Evento de Clique com Função Externa*/}
        <button onClick={executarAcao}>Executar Ação</button>
      </div>
      <div>
        {/* 7. Função de Renderização*/}
        {renderizarMensagem()}
      </div>
      <div>
        {/* 8. Layout com Múltiplos Componentes*/}
        <Topo />
        <Meio />
        <Base />
      </div>
      <p className="autor">
        Autor: <a href="https://github.com/Joaogalescky">João Vitor Campõe Galescky</a> 
      </p>
    </>
  )
}

// Exportação
export default App