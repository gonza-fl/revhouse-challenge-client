import BForm from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const { Group: BGroup, Control: BControl } = BForm;

const Form = () => {
    return (
        <BForm className='w-100 mt-3'>
            <BGroup className='d-sm-flex jsutify-content-between w-100'>
                <BControl type="text" placeholder="First Name" />
                <BControl type="text" placeholder="Last Name" />
                <BControl type="number" placeholder="Participation" />
                <Button variant='outline-light' type="submit" className='mt-2'>Send</Button>
            </BGroup>
        </BForm>
    );
};

export default Form;
