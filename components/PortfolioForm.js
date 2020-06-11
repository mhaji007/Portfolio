import {Row, Col} from 'reactstrap';
import DatePicker from 'react-datepicker';
import {useForm} from 'react-hook-form';

const PortfolioForm = ({onSubmit}) => {

    const {register, handleSubmit} = useForm();

    return (

            <Row>
                <Col md="8">
                    {/* <form onSubmit={handleSubmit((data) => {
                        alert(JSON.stringify(data))
                    })}> */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                            ref={register}
                            name="title"
                            type="text"
                            className="form-control"
                            id="title"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="city">Company</label>
                            <input
                            ref={register}
                            name="company"
                            type="text"
                            className="form-control"
                            id="company"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="city">Company Website</label>
                            <input
                            ref={register}
                            name="companyWebsite"
                            type="text"
                            className="form-control"
                            id="companyWebsite"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="street">Location</label>
                            <input
                            ref={register}
                            name="location"
                            type="text"
                            className="form-control"
                            id="location"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="street">Job Title</label>
                            <input
                            ref={register}
                            name="jobTitle"
                            type="text"
                            className="form-control"
                            id="jobTitle"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                            ref={register}
                            name="description"
                            rows="5"
                            type="text"
                            className="form-control"
                            id="description">
                            </textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="startDate">Start Date</label>
                            <div>
                            <DatePicker
                            showYearDropDown
                            selected={new Date()}
                            onChange={() => {}}
                            />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="endDate">End Date</label>
                            <div>
                            <DatePicker
                            showYearDropDown
                            selected={new Date()}
                            onChange={() => {}}
                            />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary">Create
                        </button>
                    </form>
                </Col>
                    </Row>
    )

}

export default PortfolioForm;