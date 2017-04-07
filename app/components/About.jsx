var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        Here are some of the tools & Technologies I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the
            JavaScript framework used.
        </li>
        <li>
          <a href="https://reacttraining.com/react-router/"> React Router </a> - Is used for the demonstration of the navigation for this SPA App 
        </li>  
        <li>
          <a href="http://foundation.zurb.com/"> Foundation </a> - Framework is used for styling and to make it responsive 
        </li>
        <li> <a href="https://webpack.github.io/"> Webpack </a> - Is used to bunder and modularize this Project. </li>
        <li><a href="" > Expressjs ( Node js )</a> - Is the Local Server used </li>
        
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used
            Open Weather Map to search for weather data by city name.
        </li>


      </ul>
    </div>
  )
};

module.exports = About;
