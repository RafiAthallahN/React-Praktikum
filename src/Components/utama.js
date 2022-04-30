import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BMI from '../bmi';
import Bank from '../bank';
import Hitung from '../harga';
import Biner from '../biner';
import Decimal from '../decimal';
import Oktal from '../oktal';
import Hexadecimal from '../hexadecimal';

const Utama = () => (
    <Switch>
        <Route path="/bmi" component={BMI} />
        <Route path="/bank" component={Bank} />
        <Route path="/hitung" component={Hitung} />
        <Route path="/biner" component={Biner} />
        <Route path="/decimal" component={Decimal} />
        <Route path="/oktal" component={Oktal} />
        <Route path="/hexadecimal" component={Hexadecimal} />
    </Switch>
)

export default Utama;