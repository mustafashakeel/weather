var React = require('react');
var {Link} = require('react-router');

var PopularCities = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Popular Cities</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Vancouver'>Vancouver, B.C. , Canada</Link>
        </li>
        <li>
          <Link to='/?location=Toronto'>Toronto, On. Canada</Link>
        </li>
        <li>
          <Link to='/?location=London'>London, England</Link>
        </li>
        <li>
          <Link to='/?location=Sydney'>Sydney, Australia</Link>
        </li>
        <li>
          <Link to='/?location=Seattle'>Seattle, WA , USA</Link>
        </li>
        <li>
          <Link to='/?location=Tokyo'>Tokyo, Japan</Link>
        </li>
        <li>
          <Link to='/?location=Bangkok'>Bangkok, Thailand</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  )
};
module.exports = PopularCities;
