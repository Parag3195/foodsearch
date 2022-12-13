import React from "react";



function Product ({data}){
return ( <div> <h2>Results</h2>
<div className="row">
{data.map((data)=>{
    return(
        <div className="col-md-4">
              <div className="card" style={{ width: "18rem" }}>
                <img src={data.recipe.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{data.recipe.label}</h5>
                  <p class="card-text">
                    Total Amount of Calories : {data.recipe.calories}
                  </p>
                  <a href="#" class="btn btn-primary">
                    Buy
                  </a>
                </div>
              </div>
            </div>

    )
})}
</div>

</div>
)
}

export default Product ;
