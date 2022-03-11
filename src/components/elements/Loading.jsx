import { Spinner } from 'react-bootstrap';

const Loading = () => {

    return (
        <div>
            <Spinner animation="border" role="status" style={{marginTop:50}}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}

export default Loading;