import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Transition } from 'semantic-ui-react';

import { AuthContext } from '../context/auth';

function Dashboardhome() {

  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1>Welcome to Home Page !</h1>
      </Grid.Row>
    </Grid>
  );
}

export default Dashboardhome;