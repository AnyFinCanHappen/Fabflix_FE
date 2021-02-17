import { useState } from "react";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function FilterPopover(props) {
    const [isShow, setShow] = useState(false);
    const { query, setQuery } = props;
    const onChecked = (e) => {
        const { name, value } = e.target;
        setQuery((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    return (
        <>
            <OverlayTrigger
                show={isShow}
                placement="bottom"
                overlay={
                    <Popover>
                        <Popover.Title>
                            <span>Filters</span>
                        </Popover.Title>
                        <Popover.Content>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Direction</Form.Label>
                                    <br></br>
                                    {["Desc", "Asc"].map((item) => {
                                        let queryValue =
                                            item[0].toLowerCase() +
                                            item.slice(1);
                                        return (
                                            <Form.Check
                                                inline
                                                type="checkbox"
                                                name="direction"
                                                label={item}
                                                value={queryValue}
                                                id={"direction" + item}
                                                key={"direction" + item}
                                                onChange={onChecked}
                                                checked={
                                                    queryValue ===
                                                    query.direction
                                                }
                                            ></Form.Check>
                                        );
                                    })}
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Order By</Form.Label>
                                    <br></br>
                                    {["Year", "Rating", "Title"].map((item) => {
                                        let queryValue =
                                            item[0].toLowerCase() +
                                            item.slice(1);
                                        return (
                                            <Form.Check
                                                inline
                                                type="checkbox"
                                                name="orderby"
                                                label={item}
                                                value={queryValue}
                                                id={"orderby" + item}
                                                key={"orderby" + item}
                                                onChange={onChecked}
                                                checked={
                                                    queryValue === query.orderby
                                                }
                                            ></Form.Check>
                                        );
                                    })}
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Number of Results</Form.Label>
                                    <br></br>
                                    {["10", "20", "100"].map((item) => {
                                        return (
                                            <Form.Check
                                                inline
                                                type="checkbox"
                                                name="limit"
                                                label={item}
                                                value={item}
                                                id={"limit" + item}
                                                key={"limit" + item}
                                                onChange={onChecked}
                                                checked={item === query.limit}
                                            ></Form.Check>
                                        );
                                    })}
                                </Form.Group>
                            </Form>
                            <div style={{ width: "100%", textAlign: "center" }}>
                                <Button
                                    style={{ alignItems: "center" }}
                                    onClick={() => {
                                        setShow(!isShow);
                                    }}
                                >
                                    Done
                                </Button>
                            </div>
                        </Popover.Content>
                    </Popover>
                }
            >
                <Button
                    onClick={() => {
                        setShow(!isShow);
                    }}
                >
                    F
                </Button>
            </OverlayTrigger>
        </>
    );
}
export default FilterPopover;
