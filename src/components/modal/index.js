import { useState } from 'react'
import Modal from '@material-ui/core/Modal';
import { 
  TextField, 
  Button, 
  FormControl, 
  InputLabel, 
  NativeSelect
} from '@material-ui/core';
import { Formik, Form, getIn } from 'formik';
import * as Yup from 'yup';

function PartModal(props) {
  const {venuesData} = props
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className='part-container'>
      <h2 id="simple-modal-title">Add participant</h2>
      <Formik
            initialValues={{ participant: '' }}
            validationSchema={Yup.object({
                participant: Yup.string().required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              props.onSubmit(values);
              handleClose()
              setSubmitting(false);
            }}
          >
            {({ handleChange, errors, touched }) => (
              <Form className="form-base">
                <div className="text-field">
                  <TextField
                    label={'Participant'}
                    type="text"
                    name="participant"
                    variant="outlined"
                    onChange={handleChange}
                    error={Boolean(
                      getIn(touched, 'participant') &&
                        getIn(errors, 'participant')
                    )}
                    helperText={
                      getIn(touched, 'participant') &&
                      getIn(errors, 'participant')
                        ? getIn(errors, 'participant')
                        : ''
                    }
                  />
                  <div className="select-field-container">
                    <FormControl variant="outlined" className="select-field">
                      <InputLabel>Restaurants</InputLabel>
                      <NativeSelect
                        onChange={handleChange}
                        label="Restaurant"
                        inputProps={{
                          name: 'restaurant',
                          id: 'outlined-age-native-simple',
                        }}
                      >
                        <option aria-label="None" value="None" />
                        {
                          venuesData && venuesData.map((item, index) => {
                            return (
                              <option key={index} value={index+1}>{item.venue.name}</option>
                              )

                          })
                        }
                      </NativeSelect>
                    </FormControl>
                  </div>
                </div>   
                <Button className="search-button" type="submit" variant="contained" color="primary">
                  Vote
                </Button>
              </Form>
            )}
          </Formik>
    </div>
  );

  return (
    <div className="container">
      <Button 
        className="search-button" 
        type="button" 
        variant="contained" 
        color="primary" 
        onClick={handleOpen}>
          Add participant
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default PartModal;
