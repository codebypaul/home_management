import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker'

function investmentForm() {
  return (
    <Form>
      
      <Form.Group>
        <Form.Label>Date</Form.Label>
        <DatePicker />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Gross</Form.Label>
        <Form.Control type="email" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example">
          <option>Investment Account</option>
          <option value="1">Salary</option>
          <option value="2">Sale</option>
          <option value="3">Other</option>
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

    </Form>
  );
}

export default investmentForm;