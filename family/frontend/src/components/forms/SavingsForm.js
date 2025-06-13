import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';

function savingForm() {
  return (
    <Form>
      
      <Form.Group>
        <Form.Label>Date</Form.Label>
        <DatePicker />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Amount</Form.Label>
        <Form.Control type="email" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Memo</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example">
          <option>Savings Account</option>
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

export default savingForm;