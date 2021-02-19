import {Col,Row} from "react-bootstrap";

const posterUrl = "http://image.tmdb.org/t/p/w185";
function SearchResult(props){
    const {movies} = props;
    return(
        <Row sm = {3} >
            {movies.map(movie =>{
                return(
                    <Col style = {{textAlign:"center"}}>
                        {movie.title}
                        <br></br>
                        <img src = {posterUrl + movie.poster_path} alt = "x" id = {movie.movie_id}></img>
                    </Col>
                )
            })}
        </Row>
    );
}
export default SearchResult;