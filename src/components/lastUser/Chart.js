import React, { useEffect, useState } from 'react';
import ChartRowUser from './ChartRowUser';


function Chart (){

    const [ lastUser, setLastUser] = useState([])

    useEffect(() => {
		fetch('/api/users')
			.then(response => response.json())
			.then(data => setLastUser(data.users.pop()))
            .catch(error => console.log(error))
	}, [])

    {/* <SmallCard count={lastUser.first_name + " " + lastUser.last_name} title={'Ultimo usuario'} icon={'fa-award'} color={'success'}/>
    <SmallCard count={lastProduct.name} title={'Ultimo producto'} icon={'fa-award'} color={'success'}/> */}

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            
            <div className="card-body">
                <div className="table-responsive">
                <h2>Último usuario</h2>
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripción</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                                
                                <ChartRowUser { ...lastUser} />
                               
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;