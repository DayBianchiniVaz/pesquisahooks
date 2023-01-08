import React from "react";
import { MainStyle, ContainerCol, ContainerRow, Col } from "./style";
import code1 from "../../assets/code1.gif";
import code2 from "../../assets/code2.gif";

export const Main: React.FC = () => {
  return (
    <MainStyle>
      <ContainerCol>
        <h2>O que são Hooks?</h2>
        <p>
          React Hooks foram adicionados ao React na versão 16.8. Com a transição
          de componentes de classe para funcionais, Hooks permitem que você use
          estado e outros recursos dentro de componentes funcionais, ou seja,
          sem escrever um componente de classe. Esse novo recurso fornece a
          componentes funcionais um estado interno e acesso ao próprio ciclo de
          vida através de uma forma mais direta, limpa e autocontida.
        </p>
      </ContainerCol>
      <ContainerRow>
        <Col>
          <h3>Lifecycle sem Hooks</h3>
          <p>
            Da forma antiga, utilizando class components o acesso ao ciclo de
            vida (momento em que o componente é carregado, por exemplo) é
            fornecido através dos métodos chamados lifecycle methods, cuja
            execução ocorre dado um determinado ciclo de vida do componente, ou
            seja, sempre que há uma mudança todo componente era renderizado.
          </p>
        </Col>
        <Col>
          <h3>Lifecycle com Hooks</h3>
          <p>
            Em um componente funcional podemos, utilizando a função useEffect()
            fornecida pelo React, que recebe como parâmetro uma função callback
            e nela serão realizados os efeitos colaterais necessários pelo
            componente durante seu ciclo de vida.
          </p>
        </Col>
      </ContainerRow>
      <ContainerCol>
        <h3>Regras dos Hooks</h3>
        <p>
          Para utilizar os Hooks em componentes React é preciso seguir duas
          regras específicas, caso contrário, não há como garantir a integridade
          do recurso na aplicação: Chame os Hooks apenas no nível de cima: nunca
          chame Hooks dentro de loops, estruturas condicionais ou funções
          callback aninhadas. Os Hooks devem ser chamados sempre no primeiro
          nível do componente ou função React em que eles serão utilizados. Isso
          se deve porque o React identifica os hooks de um componente pela ordem
          em que eles foram chamados. Seguindo essa regra, garantimos que os
          Hooks sejam chamados na mesma ordem sempre que o componente é
          renderizado, permitindo ao React preservar o estado dos Hooks apesar
          de múltiplas chamadas de useState e useEffect. Apenas chame Hooks em
          funções React: Os Hooks devem sempre ser chamados dentro de um
          componente funcional React ou de um Hook customizado, geralmente
          extraído de um componente funcional React.
        </p>
      </ContainerCol>
      <ContainerCol>
        <h2>Use Memo</h2>
        <p>
          Uma das possibilidades com o React Hooks é o <i>useMemo</i>, que
          utiliza uma técnica já conhecida chamada <i>memoization</i>, que
          consiste em guardar o valor de retorno de uma função a partir dos
          valores de entrada (Parâmetros). Ou seja, se uma função de soma recebe
          os parâmetros 2 e 3 e retorna 5, esses valores serão armazenados e,
          quando essa função for chamada com os mesmos parâmetros, ela não
          precisará refazer o cálculo para obter o valor de retorno, já que este
          estará armazenado.
        </p>
      </ContainerCol>
      <ContainerCol>
        <iframe
          src="https://codesandbox.io/embed/clever-babbage-xwnt7h?fontsize=14&hidenavigation=1&theme=dark"
          style={{
            width: "100%",
            height: "500px",
            border: 0,
            borderRadius: "4px",
            overflow: "hidden"
          }}
          title="clever-babbage-xwnt7h"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        />
      </ContainerCol>
      <ContainerCol>
        <p>
          Podemos notar que sempre que houver uma atualização de estado nesse
          componente, o React irá renderizá-lo novamente e isso fará com que o
          código da lista seja totalmente reprocessado, mesmo quando não há
          atualização no <i>[showErrors]</i> que é o controlador da lista.
        </p>
        <br />
        <img src={code1} alt="code1" />
      </ContainerCol>
      <ContainerCol>
        <p>
          Repare na caixa de atualização na lista de erro: sempre que o
          componente é re-renderizado, o React nos mostra qual componente está
          sendo atualizado. Se pensarmos bem, nossa lista não deveria estar
          sendo atualizada nessa frequência. As atualizações deveriam ocorrer
          apenas ao ser exibida ou ocultada.
        </p>

        <p>
          É aí que entra o <i>useMemo</i>. Podemos utilizá-lo para salvar a
          lista de erros (Que no nosso caso é o componente Errors) em uma
          variável e informar que ela será atualizada apenas quando showErrors
          for alterado, já que essa é a única dependência que a lista tem.
          Mantive abaixo apenas o componente que foi alterado:
        </p>
      </ContainerCol>
      <ContainerCol>
        <iframe
          src="https://codesandbox.io/embed/affectionate-clarke-v5mzi0?fontsize=14&hidenavigation=1&theme=dark"
          style={{
            width: "100%",
            height: "500px",
            border: 0,
            borderRadius: "4px",
            overflow: "hidden"
          }}
          title="clever-babbage-xwnt7h"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        />
      </ContainerCol>
      <ContainerCol>
        <p>
          Agora veja as atualizações após aplicar o <i>useMemo</i>.
        </p>
        <br />
        <img src={code2} alt="code2" />
      </ContainerCol>
      <ContainerCol>
        <h3>Mas como o useMemo funciona?</h3>
        <p className="mg-bt">
          Para utilizar essa API, precisamos passar 2 parâmetros, o primeiro
          precisa ser uma função em que o retorno será o valor que o{" "}
          <i>useMemo</i> irá armazenar e retornar para a sua variável, sendo
          assim sua variável será sempre igual ao valor de retorno dessa função.
          O segundo parâmetros é um array de dependências, no nosso exemplo
          passamos <i>[showErrors]</i> pois, como foi dito, nossa lista depende
          apenas desse valor para ser renderizada.
        </p>
      </ContainerCol>
    </MainStyle>
  );
};
