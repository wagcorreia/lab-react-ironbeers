import React, { Component } from 'react';
import AllBeers from '../assets/beers.png';
import RandomBeer from '../assets/random-beer.png';
import NewBeer from '../assets/new-beer.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  return (
    <div className="container mt-5">
      <div className="AllBeers">
        <Link
          to={'/beers/:id'}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <img src={AllBeers} className="img-fluid" />
          <h2>All Beers</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          ornare nisi ac nulla euismod cursus. Morbi in tortor nec velit
          vestibulum hendrerit in sollicitudin tortor. Nam ac tristique arcu.
          Sed pharetra, augue finibus consectetur pellentesque, nunc tellus
          ornare tellus, sit amet pulvinar est erat ut diam. Sed sagittis
          fermentum laoreet. Cras malesuada libero non feugiat ornare.
          Pellentesque facilisis pulvinar ex, id consectetur dui pharetra sed.
          Proin accumsan tortor quis elit lacinia tristique. Pellentesque
          sodales dui in urna feugiat, eu sollicitudin velit consectetur.
        </p>
      </div>
      <div className="RandomBeer">
        <Link>
          <img src={RandomBeer} className="img-fluid" />
        </Link>
        <h2>Random Beer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          ornare nisi ac nulla euismod cursus. Morbi in tortor nec velit
          vestibulum hendrerit in sollicitudin tortor. Nam ac tristique arcu.
          Sed pharetra, augue finibus consectetur pellentesque, nunc tellus
          ornare tellus, sit amet pulvinar est erat ut diam. Sed sagittis
          fermentum laoreet. Cras malesuada libero non feugiat ornare.
          Pellentesque facilisis pulvinar ex, id consectetur dui pharetra sed.
          Proin accumsan tortor quis elit lacinia tristique. Pellentesque
          sodales dui in urna feugiat, eu sollicitudin velit consectetur.
        </p>
      </div>
      <div className="NewBeer">
        <Link>
          <img src={NewBeer} className="img-fluid" />
        </Link>
        <h2>New Beer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          ornare nisi ac nulla euismod cursus. Morbi in tortor nec velit
          vestibulum hendrerit in sollicitudin tortor. Nam ac tristique arcu.
          Sed pharetra, augue finibus consectetur pellentesque, nunc tellus
          ornare tellus, sit amet pulvinar est erat ut diam. Sed sagittis
          fermentum laoreet. Cras malesuada libero non feugiat ornare.
          Pellentesque facilisis pulvinar ex, id consectetur dui pharetra sed.
          Proin accumsan tortor quis elit lacinia tristique. Pellentesque
          sodales dui in urna feugiat, eu sollicitudin velit consectetur.
        </p>
      </div>
    </div>
  );
}
export default HomePage;
