
export default function List ({people}){
    return(
      <div>
      {
        people.map((person)=>{
          const {name,image,age,id}=person;
          return(
  
             
  
  
  
  
            
            <article id={id}>
                   <div className="col m4">
          <div className="card">
            <div className="row  ">
              <div className="col s2">
                <img src={image} alt="" className="circle responsive-img" />  
              </div>
              <div className="col s4">
                <span className="black-text">
                <div>
              <p>{name}</p>
            <p>{age}</p>
            </div>
                </span>
              </div>
            </div>
          </div>
          </div>
  
              
          
           
            
            </article>
          )
        })
      }
    </div>
    )
  }