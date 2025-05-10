import { lazy, Suspense } from "react"; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
 
const Home = lazy(() => import("./Home")); 
const About = lazy(() => import("./About")); 
 
const Main = () => { 
  return ( 
    <Router> 
      <Suspense fallback={<h3>Loading Page...</h3>}> 
        <Switch> 
          <Route path="/" exact component={Home} /> 
          <Route path="/about" component={About} /> 
        </Switch> 
      </Suspense> 
    </Router> 
  ); 
}; 
 
export default Main;