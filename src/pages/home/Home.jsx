import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
//request 
import requests from '../../request'
import axios from '../../axios'

//component
import Row from '../../components/row/Row'
import Banner from '../../components/banner/Banner'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const Home = () => {
  return (
    <div className='row'>
      <Banner fetchUrl={requests.fetchAnimationMovies} />
      <Row isposter={true} fetchUrl={requests.fetchNetflixOriginals} title='NETFLIX ORIGINALS'/>
      <Row isposter={false} fetchUrl={requests.fetchUpcomming} title='Upcoming Movies'/>
      <Row isposter={false} fetchUrl={requests.fetchTrending} title='Trending Now'/>
      <Row isposter={false} fetchUrl={requests.fetchTopRatedMovies} title='Top Rated'/>
      <Row isposter={false} fetchUrl={requests.fetchActionMovies} title='Action Movies'/>
      <Row isposter={false} fetchUrl={requests.fetchComedyMovies} title='Comedy Movies'/>
       <div className='leftside'>
       Next Page <Link to='/SecondPage' ><DoubleArrowIcon className='nextbutton' /></Link>
      </div>
    </div>
  )
}

export default Home