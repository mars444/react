import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import GoHomeBtn from "../../components/buttons/GoHomeBtn";
import {myHook} from "../../myHooks/myHook";



const TestHook_1 = () => {

    const [products, setProducts] = myHook()

const clickRewriteData = () => {
    setProducts([
        {
            id: "1000",
            code: "f230fh0g3",
            name: "Bamboo Watch",
            description: "Product Description",
            image: "bamboo-watch.jpg",
            price: 6500000,
            category: "Accessories",
            quantity: 240,
            inventoryStatus: "INSTOCK",
            rating: 1
        }])
}

    const formatCurrency = (value) => {
        return value.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });
    }

    const imageBodyTemplate = (rowData) => {
        return <img src={`images/product/${rowData.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />;
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }

    const ratingBodyTemplate = (rowData) => {
        return <Rating value={rowData.rating} cancel={false}  />;
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={`product-badge status-${rowData.inventoryStatus.toLowerCase()}`}>{rowData.inventoryStatus}</span>;
    }

    const header = (
        <div className="table-header pb-5">
           11111111111111111111111111111 <GoHomeBtn/>
        </div>
    );
    const footer = `In total there are ${products ? products.length : 0} products.`;

    return (
        <div className="datatable-templating-demo test test_2">

            <div className=" bg-green-900">
                <DataTable value={products} header={header} footer={footer} responsiveLayout="scroll">
                    <Column field="name" header="Name"></Column>
                    <Column header="Image" body={imageBodyTemplate}></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate}></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="rating" header="Reviews" body={ratingBodyTemplate}></Column>
                    <Column header="Status" body={statusBodyTemplate}></Column>
                </DataTable>

                <Button label="Click"   onClick={clickRewriteData}/>
            </div>
        </div>
    );
}

export default TestHook_1;
                 