import React, { useEffect, useState } from 'react';
import imagenFondo from '../../assets/images/mandalorian.jpg';

function LastProduct(){
    
    const [ product, setProduct] = useState([])
    const [ lastProduct, setLastProduct] = useState([])

    useEffect(() => {
        console.log('Crea')
		fetch('/api/products')
			.then(response => response.json())
			.then(data => setLastProduct(data.products.pop()))
            .catch(error => console.log(error))
	}, [])

    useEffect(() => {
        if(lastProduct !== undefined){
            console.log('Actualiza')
            console.log(lastProduct.id_products)
            const url = `/api/product/${lastProduct.id_products}`
            fetch(url)
                .then(response => response.json())
                .then(data => setProduct(data.product))
                .catch(error => console.log(error))
        }
        
	}, [lastProduct])

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto</h5>
                </div>
                <div className="card-body">
                    <h3>{ product[0] ? product[0].name : null }</h3>
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={product[0] ? product[0].image : null} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>{ product[0] ? product[0].description : null }</p>
                    {/* <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a> */}
                </div>
            </div>
        </div>
    )
}

export default LastProduct;
