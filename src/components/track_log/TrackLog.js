import React from 'react';
import {Col, Spinner, Row} from 'react-bootstrap';
import './TrackLog.scss';

export default function TrackLog(props) {
    const [track_log, setTrackLog] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const { jwt } = props

    React.useEffect(() => {
        fetch("/api/me/track_log", {
            method: 'GET',
            headers: {
                jwt: jwt
            }
        }).then(res => res.json())
            .then(setTrackLog)
            .then(_ => setLoading(false))
            .catch(err => console.error(err));
    }, []);

    return <Col>{loading ? <Spinner animation="border" /> : track_log.map((track,ind)=><Track key={"track_"+ind} track={track}/>)}</Col>
}

function Track(props){
    const {createdAt, name, uri, artists, album} = props.track
    const track_url = "https://open.spotify.com/track/" + uri.split(":")[2]

    return <a href={track_url}>
        <Row className='track'>
                <img src={album.image_url} className='track-img'/>
            <Col>
                <h6>{name}</h6>
                <p>{album.name}</p>
                <p>{artists[0].name}</p>
                <p>Added at {createdAt}</p>
            </Col>
        </Row>
    </a>

}