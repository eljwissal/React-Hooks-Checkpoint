import React,{ useState} from "react";
import '../compenent/movie.css';
import '../compenent/form_.css';
import Moviecard from "./moviecard";
function Movielist()
{    
    const [film,setFilm]=useState([
            {title:"Blade Runner", description:"A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.", posterURL:"http://digitalspyuk.cdnds.net/15/47/1600x800/landscape-1447754794-harrison-ford-blade-runner.jpg", rating:2},
            {title:"Back to the Future", description:"Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.", posterURL:"http://www.blastr.com/sites/blastr/files/back-to-the-future-part-ii-original.jpg", rating:4},
            {title:"Akira", description:"A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath that only two teenagers and a group of psychics can stop.", posterURL:"https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/58d86b3db3db2b57ce8f2986/1490578241899/?format=2500w", rating:5}
         ]);
         const [filmscr,setFilmscr]=useState(film);
         function ajouter()
         {
             if((document.getElementById("t").value==="")||(document.getElementById("d").value==="")||(document.getElementById("p").value==="")||(document.getElementById("r").value===""))
             {
                 alert("fill in the fields !!!");
             }else
             {
                 let title_=document.getElementById("t").value;
                 let description_=document.getElementById("d").value;
                 let posterURL_=document.getElementById("p").value;
                 let rating_=document.getElementById("r").value;
                 //film.push(title_,description_,posterURL_,rating_);
                 let new_mov={
                     title:title_,
                     description:description_, 
                     posterURL:posterURL_, 
                     rating:rating_
                    }
                    setFilmscr(filmscr.concat(new_mov));
                    setFilm(film.concat(new_mov));
                    document.getElementById("t").value="";
                    document.getElementById("d").value="";
                    document.getElementById("p").value="";
                    document.getElementById("r").value="";
            };
        }
     function afficher()
     {
            return film.map(film=>{return (<Moviecard title={film.title} posterURL={film.posterURL} description={film.description} rating={film.rating}/>)})
     }
    // function Tri_rate()
    // {
    //     let x=document.getElementById("rt").value;
    //     var flmx=filmscr.filter(fil =>fil.rating >= x)
    //     setFilm(flmx);
    // }
    function tri()
    {
       let x=document.getElementById("rt").value;
        var flmx=filmscr.filter(fil =>fil.rating >= x)
        let xx=document.getElementById("tt").value;
        var flmx=flmx.filter(fil => fil.title.toUpperCase().includes(xx.toUpperCase()) );
        setFilm(flmx);
    }
    // function Tri_titl()
    // {
    //     let x=document.getElementById("tt").value;
    //     var flmx=filmscr.filter(fil => fil.title.toUpperCase().includes(x.toUpperCase()) );
    //     setFilm(flmx);
    // }
    return(
        <div id="movie-card-list">
            <input className="btn_filter" type="Text" id="tt" /><input className="btn_filter" type="Number" id="rt" max="5" min="0" /> <button className="btn_filter" onClick={tri} >Filter</button>
            {afficher()}
            <>
            <div className="login-root">
            <div className="formbg-outer">
              <div className="formbg">
              <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
              <h1>add a movie</h1>
            </div>
                <div className="formbg-inner padding-horizontal--48">
                  <form id="stripe-login">
                    <div className="field padding-bottom--24">
                      <label for="email">title</label>
                      <input type="text" id="t"/>
                    </div>
                    <div className="field padding-bottom--24">
                      <label for="email">description</label>
                      <input type="text" id="d"/>
                    </div>
                    <div className="field padding-bottom--24">
                      <label for="email">posterURL</label>
                      <input type="text" id="p"/>
                    </div>
                      <div className="field padding-bottom--24">
                      <label for="email">rating</label>
                      <input type="number" max="5" min="1" id="r"/>
                    </div>
                    <div className="field padding-bottom--24">
                      <input type="button" onClick={ajouter} name="submit"  value="add"/>
                    </div>
                  </form>
                </div>
              </div>
              <div className="footer-link padding-top--24">
                <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                  <span><a href="/">© Stackfindover</a></span>
                  <span><a href="/">Contact</a></span>
                  <span><a href="/">Privacy & terms</a></span>
                </div>
              </div>
            </div>
        </div>
            </>
        </div>
    );
}
export default Movielist;
