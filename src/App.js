import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
function App() {

  function posY(elm) {
    var test = elm, top = 0;

    while(!!test && test.tagName.toLowerCase() !== "body") {
        top += test.offsetTop;
        test = test.offsetParent;
    }

    return top;
}

function viewPortHeight() {
    var de = document.documentElement;

    if(!!window.innerWidth)
    { return window.innerHeight; }
    else if( de && !isNaN(de.clientHeight) )
    { return de.clientHeight; }
    
    return 0;
}

function scrollY() {
    if( window.pageYOffset ) { return window.pageYOffset; }
    return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
}

function checkvisible( elm ) {
    var vpH = viewPortHeight(), // Viewport Height
        st = scrollY(), // Scroll Top
        y = posY(elm);
    
    return (y > (vpH + st));
}

window.onscroll = ()=>{
    const cardsHolder = document.getElementById('cards-holder');
    const cardsHolder2 = document.getElementById('cards-holder2');

    if(!checkvisible(cardsHolder)){
        cardsHolder.classList.add('to-left-bias');
    } 
    if(!checkvisible(cardsHolder2)){
        cardsHolder2.classList.add('to-left-bias');
    }
}
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
    </Routes>
  ) ;
}

export default App;
