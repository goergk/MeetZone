import React from 'react';
import classes from '../../styles/Page.module.css';
import CurrentPage from './CurrentPage';
import { Route, Switch } from 'react-router-dom';

const Page = () => {
    return (
        <div className={classes.Main_container}>
            <Switch>
                <Route path='/' exact>
                    <CurrentPage page_filter="All"/>
                </Route>
                <Route path='/Basketball'>
                    <CurrentPage page_filter="Basketball"/>
                </Route>
                <Route path='/Football'>
                    <CurrentPage page_filter="Football"/>
                </Route>
                <Route path='/Volleyball'>
                    <CurrentPage page_filter="Volleyball"/>
                </Route>
                <Route path='/Tennis'>
                    <CurrentPage page_filter="Tennis"/>
                </Route>
                <Route path='/Chess'>
                    <CurrentPage page_filter="Chess"/>
                </Route>                
            </Switch>            
        </div>
    )
}

export default Page;
