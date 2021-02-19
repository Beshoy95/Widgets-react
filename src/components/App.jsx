import React, { useState } from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import NavBar from './NavBar';
import NotFound from './NotFound';
import { Redirect, Route, Switch } from 'react-router-dom';

const items = [
    {
        title: 'what is React?',
        content: 'React is a frontend javascript framework'
    }, {
        title: 'why use React?',
        content: 'React is a favorite Js library among engineers '
    }, {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

const options = [
    {
        label: 'Red',
        value: 'red',
    }, {
        label: 'Green',
        value: 'green',
    }, {
        label: 'Blue',
        value: 'blue',
    }
]

const App = () => {
    const [selected, setSelected] = useState(options[0])
    return (
        <>
            <div className="container">
                <NavBar />
                <Switch>
                    <Route path="/accordion" render={(props)=><Accordion items={items} {...props} />} />
                    <Route path="/search" component={Search} />
                    <Route path="/dropdown" render={(props)=>
                    <Dropdown 
                        selected={selected}
                        onSelectedChange={setSelected}
                       options={options}{...props}/>} />
                    <Route path="/translate" component={Translate} />
                    <Route path="/notfound" component={NotFound} />
                    <Redirect from="/" exact to="/accordion" />
                    <Redirect to="/notfound" />
                </Switch>
            </div>
        </>
    );
}

export default App;