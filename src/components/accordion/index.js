import React, { useState, createContext, useContext } from 'react';
import { Container, Title, Body, Frame, Header, Inner, Item } from './styles/accordion';
const ToggleContext = createContext();

// compound component
export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Body = function FooterBody({ children, ...restProps }) {
  const {toggleShow} = useContext(ToggleContext);

  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
}

Accordion.Item = function FooterItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>;
    </ToggleContext.Provider>
  );
}

Accordion.Header = function FooterHeader({ children, ...restProps }) {
  const {toggleShow, setToggleShow} = useContext(ToggleContext);
  return (
    <Header 
      onClick={() => setToggleShow((toggleShow) => !toggleShow)} // take previous state and change it, !toggleShow could be an issue with batch state updates done by react
      {...restProps}>
        {children}
        {toggleShow ? (
          <img src="/images/icons/close-slim.png" alt="Close" ></img>
        ) : (
          <img src="/images/icons/add.png" alt="Open" ></img>

        )}
    </Header>
  );
}
