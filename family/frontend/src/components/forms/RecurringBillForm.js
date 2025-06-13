import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';

function recurringBillForm() {
  return (
    <Form>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Vendor</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="email" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Amount</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>

      <Form.Group>
        <Form.Select aria-label="Default select example">
          <option>Due Date</option>
          <option value="1">1st</option>
          <option value="2">2nd</option>
          <option value="3">3rd</option>
          <option value="3">4th</option>
          <option value="3">5th</option>
          <option value="3">6th</option>
          <option value="3">7th</option>
          <option value="3">8th</option>
          <option value="3">9th</option>
          <option value="3">10th</option>
          <option value="3">11th</option>
          <option value="3">12th</option>
          <option value="3">13th</option>
          <option value="3">14th</option>
          <option value="3">15th</option>
          <option value="3">16th</option>
          <option value="3">15th</option>
          <option value="3">16th</option>
          <option value="3">17th</option>
          <option value="3">18th</option>
          <option value="3">19th</option>
          <option value="3">20th</option>
          <option value="3">21st</option>
          <option value="3">22nd</option>
          <option value="3">23rd</option>
          <option value="3">24th</option>
          <option value="3">25th</option>
          <option value="3">26th</option>
          <option value="3">27th</option>
          <option value="3">28th</option>
          <option value="3">29th</option>
          <option value="3">30th</option>
          <option value="3">31st</option>
        </Form.Select>
      </Form.Group>

      <Form.Group>
        <Form.Label>Start Date</Form.Label>
        <DatePicker />
      </Form.Group>

      <Form.Group>
        <Form.Label>End Date</Form.Label>
        <DatePicker />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default recurringBillForm;