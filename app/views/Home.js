import React, { Component } from 'react'
import $ from 'jquery'
import '../../public/js/semantic.js'

class Home extends Component {
  componentDidMount(){
    $('.ui.sticky').sticky({
      context: '#contextSticky'
    })
  }

  render() {
    return (
      <div className="Home" id="contextSticky">
        <div className="ui grid centered Home-title">
          <div className="row">
            <h1 className="sixteen wide mobile six wide computer column center aligned">Web Modelo</h1>
          </div>

          <div className="row">
            <p className="fourteen wide mobile six wide computer column center aligned">Web app del equipo para generar una pre cotización de un sitio web categorizado internamente como modelo administrables</p>
          </div>
        </div>

        <div className="ui grid Home-quoted centered">
          <div className="Questions eight wide column">

            {/* Proyect Name */}
            <h2 className="ui header olive">¿Cúal es el nombre de tu proyecto?</h2>
            <div className="ui fluid input">
              <input type="text" placeholder="Gran Proyecto..."/>
            </div> {/* <- Proyect Name */}

            {/* Pages */}
            <h2 className="ui header olive">¿Cúantas páginas vas a necesitar codear?</h2>
            <div className="ui grid two column">
              <div className="ui labeled input column">
                <div className="ui label">Nº</div>
                <input type="number" placeholder="0"/>
              </div>
              <small className="column">Considerando que serán en FRONTEND/BACKEND</small>
            </div> {/* <- Pages */}

            {/* Proyect Kind */}
            <h2 className="ui header olive">¿Que tipo de proyecto necesitas?</h2>
            <div className="Questions-kinds ui three column grid">
              <div className="column">
                <div className="ui segment center aligned select-image">
                  <img src="images/layout-desktop@2x.png" alt=""/>
                  <h4 className="ui header">Desktop</h4>
                </div>
              </div>

              <div className="column">
                <div className="ui segment center aligned select-image">
                  <img src="images/layout-mobile-@2x.png" alt=""/>
                  <h4 className="ui header">Mobile</h4>
                </div>
              </div>

              <div className="column">
                <div className="ui segment center aligned select-image">
                  <img src="images/layout-responsive@2x.png" alt=""/>
                  <h4 className="ui header">Responsive</h4>
                </div>
              </div>
            </div> {/* <- Proyect Kind */}

            {/* Extras */}
            <h2 className="ui header olive">Integración de extras</h2>
            <div className="ui segment">
              <div className="ui list">

                <div className="item">
                  <i className="add icon"></i>
                  <div className="content">Sliders</div>
                </div>

                <div className="item">
                  <i className="add icon"></i>
                  <div className="content">Accordion</div>
                </div>

                <div className="item">
                  <i className="add icon"></i>
                  <div className="content">Gallería de Fotos</div>
                </div>

                <div className="item">
                  <i className="add icon"></i>
                  <div className="content">Parallax</div>
                </div>

              </div>
            </div> {/* <- End Extras */}

            {/* Web Content */}
            <h2 className="ui header olive">¿Quieres un diseño, desarrollo o ambos?</h2>
            <div className="Questions-forMade ui two column grid">
              <div className="column">
                <div className="ui segment center aligned image-forMade">
                  <img src="images/delivery@2x.png" alt=""/>
                  <h4 className="ui header">Desarrollo</h4>
                </div>
              </div>
              <div className="column">
                <div className="ui segment center aligned image-forMade">
                  <img src="images/qa@2x.png" alt=""/>
                  <h4 className="ui header">Diseño</h4>
                </div>
              </div>
            </div>
            {/* <- Web Content */}

            {/* Select Content Web site */}
            <h2 className="ui header olive">¿Quieres que redactemos el contenido de tu sitio?</h2>
            <div className="SelectionOption ui grid centered">
              <div className="SelectionOption-select four wide column center aligned">Si</div>
              <div className="SelectionOption-select four wide column center aligned">No</div>
            </div> {/* <- End Select Content Web site */}

            {/* Select Language */}
            <h2 className="ui header olive">¿Quieres un lenguage más?</h2>
            <div className="SelectionOption ui grid centered">
              <div className="SelectionOption-select four wide column center aligned">Si</div>
              <div className="SelectionOption-select four wide column center aligned">No</div>
            </div> {/* <- End Select Language */}

            {/* You need a blog */}
            <h2 className="ui header olive">¿Necesitas un Blog?</h2>
            <div className="SelectionOption ui grid centered">
              <div className="SelectionOption-select four wide column center aligned">Si</div>
              <div className="SelectionOption-select four wide column center aligned">No</div>
            </div> {/* <- You need a blog */}

            {/* You need a profesional images */}
            <h2 className="ui header olive">¿Necesitas imágenes profesionales?</h2>
            <div className="SelectionOption ui grid centered">
              <div className="SelectionOption-select four wide column center aligned">Si</div>
              <div className="SelectionOption-select four wide column center aligned">No</div>
            </div> {/* <- You need a profesional images */}

            {/* You need an integration with social channels */}
            <h2 className="ui header olive">¿Redes Sociales?</h2>
            <div className="SelectionOption ui grid centered">
              <div className="SelectionOption-select four wide column center aligned">Si</div>
              <div className="SelectionOption-select four wide column center aligned">No</div>
            </div> {/* <- You need an integration with social channels */}
            
            {/* Posicionamiento web */}
            <h2 className="ui header olive">¿Posicionamiento Web?</h2>
            <div className="ui segment">
              <div className="ui list">

                <div className="item">
                  <i className="add icon"></i>
                  <div className="content">Instalación Google Analitycs</div>
                </div>

                <div className="item">
                  <i className="add icon"></i>
                  <div className="content">Instalación de Google Search Console</div>
                </div>

                <div className="item">
                  <i className="add icon"></i>
                  <div className="content">Optimización de Robots.txt y sitemap.xml</div>
                </div>

                <div className="item">
                  <i className="add icon"></i>
                  <div className="content">Puesta a punto con el plugin de wordpress</div>
                </div>

              </div>
            </div> {/* <- End Posicionamiento Web */}

          </div>

          <div className="Checkout ui four wide column">
            <div className="ui sticky">
              <div className="Checkout-segment ui segment">
                <h3 className="ui header aligned center">Estimado Rápido</h3>
                <div className="ui grid two column">
                  <div className="column">Páginas</div>
                  <div className="ui column right aligned">3</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Home
