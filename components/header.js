
import React from 'react';
import { Jumbotron, Container } from 'reactstrap';



const Header = () => {
    return (
        <>
        <div>
        <Jumbotron fluid>
          <Container fluid>
            <h2 className="display-3">Professional Fleet Washing Services in Bay Area</h2>
            <p className="lead">Our Bay Area company has helped many fleet managers keep their drivers happy and achieve top-notch fleet washing results. Just <br></br> imagine what our proven services can do for your fleet.</p>
            <h3>Serving Bay Area 7 Days a Week</h3>
            <div class="vertical-center">
    <button>Centered Button</button>
  </div>
          </Container>
        </Jumbotron>
      </div>
      <style jsx>{`

      p.lead  {
          text-align: center!important;
      }
      .display-3 {
        text-align: center!important;
        margin-top: 50px;
      }

      button.display-button {
        margin: 0;
        top: 50%;

      }

    `}</style>
      </>
    )
}

export default Header