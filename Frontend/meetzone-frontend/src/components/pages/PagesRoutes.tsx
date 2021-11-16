import React from 'react';
import classes from '../../styles/Page.module.css';
import CurrentPage from './CurrentPage';
import { Route, Switch } from 'react-router-dom';
import { PageType } from './PageType';

const Page = () => {
    return (
        <div className={classes.Main_container}>
            <Switch>
                <Route path='/' exact>
                    <CurrentPage page_filter={`${PageType.ALL}`}/>
                </Route>
                <Route path={`/${PageType.BASKETBALL}`}>
                    <CurrentPage page_filter={PageType.BASKETBALL}/>
                </Route>
                <Route path={`/${PageType.FOOTBALL}`}>
                    <CurrentPage page_filter={PageType.FOOTBALL}/>
                </Route>
                <Route path={`/${PageType.VOLLEYBALL}`}>
                    <CurrentPage page_filter={PageType.VOLLEYBALL}/>
                </Route>
                <Route path={`/${PageType.TENNIS}`}>
                    <CurrentPage page_filter={PageType.TENNIS}/>
                </Route>
                <Route path={`/${PageType.CHESS}`}>
                    <CurrentPage page_filter={PageType.CHESS}/>
                </Route>
                <Route path={`/${PageType.SIGNIN}`}>
                    <CurrentPage page_filter={PageType.SIGNIN}/>
                </Route> 
                <Route path={`/${PageType.SIGNUP}`}>
                    <CurrentPage page_filter={PageType.SIGNUP}/>
                </Route>                 
            </Switch>            
        </div>
    )
}

export default Page;
