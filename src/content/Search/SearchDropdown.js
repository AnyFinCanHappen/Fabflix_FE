import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

import "../../css/dropdown.css";
function SearchDropdown(props) {
    const { searchBy, setSearchBy } = props;
    const { query, setQuery } = props;
    const handleSelect = (eventKey) => {
        const prevSearch = query[searchBy];
        console.log(prevSearch);
        setSearchBy(eventKey);
        const newQuery = {
            ...query,
        };
        Object.keys(newQuery).forEach((item) => {
            if (
                item === "title" ||
                item === "year" ||
                item === "director" ||
                item === "genre"
            ) {
                if (item === eventKey) newQuery[item] = prevSearch;
                else newQuery[item] = "";
            }
        });
        setQuery(newQuery);
    };
    //do actor later
    const dropdownTitle = searchBy[0].toUpperCase() + searchBy.slice(1);
    return (
        <>
            <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle>{dropdownTitle}</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item eventKey="title" onSelect={handleSelect}>
                        Title
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="year" onSelect={handleSelect}>
                        Year
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="director" onSelect={handleSelect}>
                        Director
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="genre" onSelect={handleSelect}>
                        Genre
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
}
export default SearchDropdown;
