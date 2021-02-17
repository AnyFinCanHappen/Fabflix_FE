import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function FilterPopover(props) {
    const { setQuery } = props;
    const handleChange = (e) => {
        e.preventDefault();
        const { value, name } = e.target;
        setQuery((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    return (
        <>
            <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={
                    <Popover>
                        <Popover.Title>
                            <span>Filters</span>
                        </Popover.Title>
                        <Popover.Content>
                            <Form>
                                <Form.Group controlId="formYear">
                                    <Form.Label>Year</Form.Label>
                                    <Form.Control
                                        name="year"
                                        onChange={handleChange}
                                        defaultValue={props.query.year}
                                    ></Form.Control>
                                </Form.Group>
                            </Form>
                        </Popover.Content>
                    </Popover>
                }
            >
                <Button>F</Button>
            </OverlayTrigger>
        </>
    );
}
export default FilterPopover;
