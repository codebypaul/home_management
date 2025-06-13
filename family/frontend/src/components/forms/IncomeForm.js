import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function incomeForm() {
  return (
    <Form>

      <Form.Group>
        <Form.Label>Date</Form.Label>
        <DatePicker />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Gross</Form.Label>
        <Form.Control type="email" placeholder="" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Tax</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Deductions</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Net</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example">
          <option>Income Source</option>
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

export default incomeForm;