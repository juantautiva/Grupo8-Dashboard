import React, {useEffect, useState} from "react";
import CategoriesProps from "./CategoriesProps";


function Categories() {

  const [ categories, setCategories] = useState([])
  
  useEffect(() => {
  fetch('/api/categories')
    .then(response => response.json())
    .then(data => setCategories(data.countByCategory))
          .catch(error => console.log(error))
}, [])

  return (
   
    <div className="col-lg-6 mb-4">						
    <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-gray-800">Categorías</h6>
        </div>
        <div className="card-body">
            <div className="row">
                {
                    categories.map((category,index)=>{
                        
                        return  <CategoriesProps  name={category.categoryName} count={category.count}  key={index} />
                    })
                }
            </div>
        </div>
    </div>
</div>
        );
}

export default Categories;
