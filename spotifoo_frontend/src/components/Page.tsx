import React from "react";
import picture from "./../assets/picture-placeholder.jpg";

const Page = (props: any) => {
  console.log("props", props);

  return (
     <div>
        <section className='section' >
        <h2 className="h2">Songs</h2>
        
          <article className="article"  >
           
          <div className = "card">
             
            <img className="image card-img-top"
                           src={`http://localhost:8080/${props.carddetails.pathToAlbum}`}/>
           <h3 className="h3 card-title"  >{props.carddetails.title}</h3>
           </div>
          </article>
      
      </section>
    </div>
  );
};
export default Page;
