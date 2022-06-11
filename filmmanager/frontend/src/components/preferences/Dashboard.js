import React, { Fragment } from 'react';
import Form from './Form';
import Preferences from './Preferences';

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Preferences />
    </Fragment>
  );
}
