import React, { useState } from 'react';
import fs from 'fs';
import {
  Route,
  Router,
  Text,
  ButtonGroup,
  Button,
  useText,
  Image,
} from '@urban-bot/core';
import logo from './assets/logo.png';

const file = fs.readFileSync(logo);

function Echo() {
  const [message, setText] = useState('Say something');

  useText(({ text }) => {
    setText(text);
  });

  return (
    <Text>
      <i>{message}</i>
    </Text>
  );
}

function Logo() {
  const [title, setTitle] = useState('Urban Bot');

  const addRobot = () => {
    setTitle(`${title}🤖`);
  };

  return (
    <Image
      title={title}
      file={file}
      buttons={(
        <ButtonGroup>
          <Button onClick={addRobot}>Add robot</Button>
        </ButtonGroup>
      )}
    />
  );
}

export function Bot() {
  return (
    <>
      <Text>Welcome to Urban Bot! Type /echo or /logo.</Text>
      <Router>
        <Route path="/echo">
          <Echo />
        </Route>
        <Route path="/logo">
          <Logo />
        </Route>
      </Router>
    </>
  );
}
