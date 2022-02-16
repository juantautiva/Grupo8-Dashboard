import React, { useEffect, useState } from 'react';
import SmallCard from '../SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */


let moviesInDB = {
    title: 'Movies in Data Base',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let totalAwards = {
    title:' Total awards', 
    color:'success', 
    cuantity: '79',
    icon:'fa-award'
}

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'Actors quantity' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}

let cartProps = [moviesInDB, totalAwards, actorsQuantity];

function ContentRowMovies(){
    
    const [ countUsers, setCountUsers] = useState([])
    const [ countProducts, setcountProducts] = useState([])
    const [ lastUser, setLastUser] = useState([])
    const [ countCategories, setCountCategories] = useState([])
    const [ maxDiscount, setMaxDiscount] = useState([])


    useEffect(() => {
		fetch('/api/users')
			.then(response => response.json())
			.then(data => setCountUsers(data.count))
            .catch(error => console.log(error))
	}, [])

    useEffect(() => {
		fetch('/api/users')
			.then(response => response.json())
			.then(data => setLastUser(data.users.pop()))
            .catch(error => console.log(error))
	}, [])

    useEffect(() => {
		fetch('/api/products')
			.then(response => response.json())
			.then(data => setCountCategories(data.countByCategory))
            .catch(error => console.log(error))
	}, [])

    useEffect(() => {
		fetch('/api/products')
			.then(response => response.json())
			.then(data => setcountProducts(data.count))
            .catch(error => console.log(error))
	}, [])

    return (
    
        <div className="row">
            <SmallCard count={Number(countUsers.count)} title={'Cantidad de usuarios'} icon={'fa-clipboard-list'} color={'primary'}/>
            <SmallCard count={Number(countProducts.count)} title={'Cantidad de productos'} icon={'fa-award'} color={'success'}/>
            <SmallCard count={lastUser.first_name + " " + lastUser.last_name} title={'Ultimo usuario'} icon={'fa-award'} color={'success'}/>
            <SmallCard count={countCategories.length} title={'Total de categorias'} icon={'fa-award'} color={'success'}/>
        </div>
    )
}

export default ContentRowMovies;