import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
//É NECESSÁRIO INSTALAR A DEPENDENCIA PARA PODER USAR ROTAS: 'npm install react-router-dom'

import Rodape from './componentes/footer'
import Header from './componentes/header'
import Inicio from './componentes/home'
import Servicos from './componentes/servicos'
import Portfolio from './componentes/portfolio'
import Preco from './componentes/preco'
import Contato from './componentes/contato'

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div className="App">
          <Header/>

          <Route path='/' exact component={Inicio}/>{/* 'EXACT' FAZ COM QUE O INICIO APARECA APENAS QUANDO ESTIVER NOT DIRETORIO '/' */}
          <Route path='/servicos' component={Servicos}/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/precos' component={Preco}/>
          <Route path='/contato' component={Contato}/>

          <Rodape/>
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
