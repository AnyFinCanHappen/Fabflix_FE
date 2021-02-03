import {useState} from "react";
import SearchForm from "./SearchForm";
import Col from "react-bootstrap/Col"
function SearchPage(){
    const [query, setQuery] = useState({
        title:"",
        year:"",
        director:"",
        genre:"",
        hidden:"false",
        limit:10,
        offset:0,
        orderby:"rating",
        direction:"desc"
    });


    return(
        <>
            <Col>
                <SearchForm query = {query} setQuery = {setQuery}></SearchForm>
            </Col>
        </>
    )
}
export default SearchPage;