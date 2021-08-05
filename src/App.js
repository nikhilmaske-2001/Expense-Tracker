import React from 'react';
import { Grid } from "@material-ui/core"

import Details from './components/Details/Details'

const App = () => {
    return (
        <div>
            <Grid>
                <Grid>
                 <Details/>   
                </Grid>
            </Grid>
        </div>
    )
}

export default App
