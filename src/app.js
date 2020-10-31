import React from 'react';
import { Jumbotron } from './components';
import jumboData from './fixtures/jumbo';

export default function App() {
  const jumbotrons = jumboData.map((item) => (
    <Jumbotron key={item.id} direction={item.direction}>
      <Jumbotron.Pane>
        <Jumbotron.Title>{item.title}</Jumbotron.Title>
        <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
      </Jumbotron.Pane>
      <Jumbotron.Pane>
        <Jumbotron.Image src={item.image} alt={item.alt} />
      </Jumbotron.Pane>
    </Jumbotron>
  ));
  
  return (
    <Jumbotron.Container>
      {jumbotrons}
    </Jumbotron.Container>
  );
}
