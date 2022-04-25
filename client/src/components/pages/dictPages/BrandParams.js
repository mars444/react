import React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import {Button} from "primereact/button";
import Brand from "./Brand";

import {
    HashRouter as Router,
  useRouteMatch
} from "react-router-dom"



const BrandParams = () => {
    return (
        <div>
            <Link to={`${url}/param1`}>
                <Button className='' type="button" label="color"/>
            </Link>

            <Link to={`${url}/param2`}>
                <Button className='' type="button" label="weight"/>
            </Link>

            <Link to={`${url}/param3`}>
                <Button className='' type="button" label="power"/>
            </Link>

            <Switch>
                <Route path={`${path}/param1`}>
                    <Brand/>
                </Route>
                <Route path={`${path}/param2`}>
                    <Brand/>
                </Route>
                <Route path={`${path}/param3`}>
                    <Brand/>
                </Route>
            </Switch>
        </div>
    );
};

export default BrandParams;