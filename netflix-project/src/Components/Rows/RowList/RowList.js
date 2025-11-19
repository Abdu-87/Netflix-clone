import React from 'react'
import Row from '../Row/Row'
import requests from '../../../Utils/requests'; 

console.log('Requests object check:', requests); 

const RowList = () => {
  return (
    <div>
        <Row title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}></Row>
        <Row title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}></Row>
        <Row title="Top Rated"
        fetchUrl={requests.fetchTopRatedMovies}
        ></Row>
        <Row title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        ></Row>
        <Row title="Commedy Movie"
        fetchUrl={requests.fetchComedyMovies}
        ></Row>
        <Row title="Horrer movie"
        fetchUrl={requests.fetchHorrorMovies}
        ></Row>
        <Row title="Romantics movie"
        fetchUrl={requests.fetchRomanticMovies}
        ></Row>
        <Row title="TV show"
        fetchUrl={requests.fetchTvShow}
        ></Row>
        <Row title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        ></Row>
    </div>
  )
}

export default RowList