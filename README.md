# smartgame
INFORMAÇÕES IMPORTANTES APARA FUNCIONAMENTO
Na pasta smart-game é onde está localizado o back end da aplicação,
o banco usado é o MySQL na versão 8
tenha certeza que em: src/main/resources/application.yml
o usename e o password estejam de acordo com o seu banco de dados.

na pasta smartGameMobile está o aplicativo feito em React-native por conta de um bug que não tive tempo de arrumar na tela inicial na parte superior direita vai ter uma especie de um "X" ali era pra ter um icone mas ele não aparece é o o botão para ir para a tela de compras já realizadas

INFORMAÇÃO MUITO IMPORTANTE 
por conta de uma especie de erro do proprio react native para que o leitor de qr code funcione e o app carregue sem erros, apos o comando npm i para instalar as dependencias é preciso fazer uma mudança em: node_modules/react-native/index.js apartir da linha 436 fazendo a troca disso:

get ColorPropType(): $FlowFixMe {
    invariant(
      false,
      'ColorPropType has been removed from React Native. Migrate to ' +
        "ColorPropType exported from 'deprecated-react-native-prop-types'.",
    );
  },
  get EdgeInsetsPropType(): $FlowFixMe {
    invariant(
      false,
      'EdgeInsetsPropType has been removed from React Native. Migrate to ' +
        "EdgeInsetsPropType exported from 'deprecated-react-native-prop-types'.",
    );
  },
  get PointPropType(): $FlowFixMe {
    invariant(
      false,
      'PointPropType has been removed from React Native. Migrate to ' +
        "PointPropType exported from 'deprecated-react-native-prop-types'.",
    );
  },
  get ViewPropTypes(): $FlowFixMe {
    invariant(
      false,
      'ViewPropTypes has been removed from React Native. Migrate to ' +
        "ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
    );
  },
  
  para isso:
  
  get ColorPropType(): $FlowFixMe {
    return require('deprecated-react-native-prop-types').ColorPropType
  },
  get EdgeInsetsPropType(): $FlowFixMe {
    return require('deprecated-react-native-prop-types').EdgeInsetsPropType

  },
  get PointPropType(): $FlowFixMe {
    return require('deprecated-react-native-prop-types').PointPropType

  },
  get ViewPropTypes(): $FlowFixMe {
    return require('deprecated-react-native-prop-types').ViewPropTypes

  },
  
  depois dessa configuração o app executara sem falhas.
  
  
  
  Nota:
  Eu não tive muito tempo por conta do meu trabalho como atendente se puxado ainda mais em semana de black friday
  encontrei algumas dificuldades que me atrasaram como a dificuldade de misturar dois modos de navegação, mas fiz tudo que podia na medida do possivel     para entregar um app funcional e me desculpem eu não consegui tempo para fazer o site.
  Obrigado.
