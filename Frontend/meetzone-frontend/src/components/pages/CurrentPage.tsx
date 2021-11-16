import React from 'react';
import EventsPage from './Event/EventsPage';
import { PageType } from './PageType';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

interface Props{
    page_filter: string;
}

const CurrentPage:React.FC<Props> = ({ page_filter }) => {
    if (page_filter ===  PageType.SIGNIN){ return (<SignIn />) }
    if (page_filter ===  PageType.SIGNUP){ return (<SignUp />) }
    else { return (<EventsPage page_filter={page_filter}/>) }
    
}

export default CurrentPage;
