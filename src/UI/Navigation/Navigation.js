import React, {Suspense} from "react"
import { useAsyncResource } from 'use-async-resource';

import DisplayState from '../Pages/Display-State-Data/DisplayState'
import Total from '../Pages/Total/Total'
import {Switch, Route} from "react-router-dom";
import './Navigation.css'

const Navigation = () => {
 
    const API_URL = 'https://covidnigeria.herokuapp.com/api'
    const fetchUser = () => fetch(API_URL).then(res => res.json());
    const [userReader, getNewUser] = useAsyncResource(fetchUser, []);
    return (
        <div>
             <Switch>
                <Suspense fallback={<div className='loading'>Loading...</div>}>
                    <Route exact path="/">
                        <Total userReader={userReader}/>
                    </Route>
                    <Route exact path="/displayState">
                        <DisplayState userReader={userReader}/>
                    </Route>
                </Suspense>
            </Switch>
        </div>
    
    )
}

export default Navigation
