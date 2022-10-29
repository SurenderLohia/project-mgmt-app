import React from 'react';
import AddClientModal from '../components/AddClientModal';
import Client from '../components/Client';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <>
      <AddClientModal />
      <Projects />
      <Client />
    </>
  );
}
