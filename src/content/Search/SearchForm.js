import { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

import searchIcon from "../../css/images/search_icon.png";
import searchEndpoint from "../../util/moviesApi/searchEndpoint";
import FilterPopover from "./FilterPopover";
import SearchDropdown from "./SearchDropdown";
import SearchResult from "./SearchResult";

const firstQuery = {
    title: "",
    year: "2019",
    director: "",
    genre: "",
    hidden: "false",
    limit: "10",
    offset: 0,
    orderby: "rating",
    direction: "desc",
};
function SearchFrom() {
    const [query, setQuery] = useState({
        title: "",
        year: "",
        director: "",
        genre: "",
        hidden: "false",
        limit: "10",
        offset: 0,
        orderby: "year",
        direction: "desc",
    });
    const [movies, setMovies] = useState([]);
    const [searchBy, setSearchBy] = useState("title");

    useEffect(() => {
        search(firstQuery);
    }, []);
    const search = (queryParam) => {
        const email = localStorage.getItem("email");
        const session_id = localStorage.getItem("session_id");
        const headers = {
            email: email,
            session_id: session_id,
            transaction_id: "transaction_id",
        };
        searchEndpoint(headers, queryParam)
            .then((response) => {
                //implement handle no movies found later
                const { data } = response;
                console.log(data);
                setMovies(data.movies);
            })
            .catch((error) => {
                console.log(error);
                console.log(error.response);
            });
    };

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setQuery((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    return (
        <>
            <Row>
                <Col sm={{ span: 6, offset: 3 }} xs={{ span: 10, offset: 1 }}>
                    <div style={{ textAlign: "center" }}>
                        Search
                        <br></br>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <SearchDropdown
                                    query={query}
                                    setQuery={setQuery}
                                    searchBy={searchBy}
                                    setSearchBy={setSearchBy}
                                ></SearchDropdown>
                                <FilterPopover
                                    setQuery={setQuery}
                                    query={query}
                                ></FilterPopover>
                            </InputGroup.Prepend>
                            <FormControl
                                name={searchBy}
                                onChange={handleChange}
                            ></FormControl>
                            <InputGroup.Append>
                                <Button onClick={() => search(query)}>
                                    <img
                                        src={searchIcon}
                                        alt={"x"}
                                        style={{ width: "20px" }}
                                    ></img>
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                </Col>
            </Row>
            <SearchResult movies = {movies}></SearchResult>
        </>
    );
}
export default SearchFrom;
