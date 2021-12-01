import { useDispatch } from "react-redux";
import { Formik, Form, getIn } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@material-ui/core';
import venues from '../../api/venues';
import { fetchVenuesFailure, fetchVenuesRequest, fetchVenuesSuccess } from "../../redux/venues/actions";

function Search(props) {
  const dispatch= useDispatch()
  const onSubmit = (values) => {
    dispatch(fetchVenuesRequest())
    venues(20190724, values.location)
    .then((res) => {
      const data = res.data.response.groups[0].items
      dispatch(fetchVenuesSuccess(data))
      })
      .catch(err => dispatch(fetchVenuesFailure(err.response.data.meta.errorDetail)))
  }
  return (
    <div className="container">
        <Formik
            initialValues={{ location: '' }}
            validationSchema={Yup.object({
                location: Yup.string().required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              props.clearVotes()
              onSubmit(values);
              setSubmitting(false);
            }}
          >
            {({ handleChange, errors, touched }) => (
              <Form className="form-base">
                <div className="location-input">
                  <TextField
                    label={'Location'}
                    type="text"
                    name="location"
                    variant="outlined"
                    onChange={handleChange}
                    error={Boolean(
                      getIn(touched, 'location') &&
                        getIn(errors, 'location')
                    )}
                    helperText={
                      getIn(touched, 'location') &&
                      getIn(errors, 'location')
                        ? getIn(errors, 'location')
                        : ''
                    }
                  />
                </div>     
                <Button className="search-button" type="submit" variant="contained" color="primary">
                  Search
                </Button>
              </Form>
            )}
          </Formik>
    </div>
  );
}

export default Search;
