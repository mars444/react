import React, {useState, useEffect} from 'react';
import {getData} from "../../../functions/getSend";

import {
    HashRouter as Router,
    Switch,
    Route,
    Link, useRouteMatch
} from "react-router-dom"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {Button} from "primereact/button";
import Brand from "./Brand";
import {InputText} from "primereact/inputtext";

const Dictionary =  () => {

    let { path, url } = useRouteMatch();

    const [dictData, setData] = useState({})

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const  URL = 'http://localhost:3000/dict'

        getData(URL)
            .then((data) => {
                setProducts(Object.keys(data))

            })
    }, []);


    const dict = {
        BMV: {
            X1: {
                color: 'red',
                weight: '1500 kg',
                power: '600 hp'
            },

            X2: {
                color: 'green',
                weight: '1000 kg',
                power: '100 hp'
            },

            X3: {
                color: 'white',
                weight: '100230 kg',
                power: '100234 hp'
            }
        },


        Audi: {
            A3: {
                color: 'red',
                weight: '1500 kg',
                power: '600 hp'
            },

            A4: {
                color: 'green',
                weight: '1000 kg',
                power: '100 hp'
            },

            A5: {
                color: 'white',
                weight: '100230 kg',
                power: '100234 hp'
            }
        },

        Mersedes: {
            A300: {
                color: 'red',
                weight: '1500 kg',
                power: '600 hp'
            },

            A400: {
                color: 'green',
                weight: '1000 kg',
                power: '100 hp'
            },

            A500: {
                color: 'white',
                weight: '100230 kg',
                power: '100234 hp'
            }
        }
    }



    return (
        <div>
            <div>
                <div className="card">
                    <DataTable value={[]} header="Table"  showGridlines responsiveLayout="scroll">
                        <Column field="Brands" header="Brands"></Column>

                    </DataTable>
                </div>
            </div>




            <Switch>
                <Route path={`${path}/brand1`}>
                    <Brand brandparams='111111111'/>
                </Route>
                <Route path={`${path}/brand2`}>
                    <Brand brandparams='2222222'/>
                </Route>
                <Route path={`${path}/brand3`}>
                    <Brand brandparams='3333333333'/>
                </Route>
            </Switch>
        </div>
    );
};

export default Dictionary;