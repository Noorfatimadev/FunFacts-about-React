
function Header(){
    return(
         <header>
        <nav className="nav">
            <img className="nav--icon" src="./react-logo.png"  ></img>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">ReactCourse - Project 1
            </h4>
        </nav>
    </header>)
}
function Footer()
{
    return(
        <footer className="Footr"><small>2021 Ziroll development. All rights reserved.</small></footer>
      
    )
}

function Reactpage() {
   
    return(
     <div className="Main">
        <Header /> 
        <div className="container">
         <h1 className="main--title"><b>Fun Facts about React</b></h1>
         <ul className="Listpoints">
             <li>Was first released in 2013</li>
             <li>Was originally created by Jordan Walke</li>
             <li>Has well over 100K stars on Github</li>
             <li>Is maintained by Facebook</li>
             <li>Powers thousands of enterprise apps, including mobile apps</li>
         </ul>
         </div>
          <Footer /> </div>

)}
 ReactDOM.render(<Reactpage />,document.getElementById('root'))