import React from 'react';
import { Col, Spinner, Row } from 'react-bootstrap';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import './TrackLog.scss';
import moment from 'moment';

export default function TrackLog(props) {
    const [track_logs, setTrackLogs] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const { jwt } = props

    React.useEffect(() => {
        fetch("/api/me/track_log", {
            method: 'GET',
            headers: {
                jwt: jwt
            }
        }).then(res => res.json())
            .then(setTrackLogs)
            .then(_ => setLoading(false))
            .catch(err => console.error(err));
    }, []);

    return <Col id='track-log'>{
        loading ?
            <Spinner animation="border" />
            :
            <div>
                <h4>History</h4>
                <div id='break' />
                <div id='track-list'>
                    {track_logs.length>0?track_logs.map((track_log, idx) => <Track key={'track_' + idx} track_log={track_log} />):"Nothing here yet. Get liking!"}
                </div>
            </div>
    }
    </Col>
}

function Track(props) {
    const { createdAt, track, playlist } = props.track_log

    const track_url = "https://open.spotify.com/track/" + track.uri.split(":").pop();
    const album_url = "https://open.spotify.com/album/" + track.album.uri.split(':').pop();
    const artist_url = "https://open.spotify.com/artist/" + track.artists[0].uri.split(':').pop();
    const playlist_url = "https://open.spotify.com/playlist/" + playlist.uri.split(':').pop();

    const artists_str = track.artists.length == 1 ?
        track.artists[0].name
        :
        track.artists.map((artist, _) => artist.name).join(', ');

    const addedAt_str = moment(createdAt, 'YYYY-MM-DDThh:mm:ss.s').fromNow()
    console.log(addedAt_str, createdAt)
    return <Row className='track-row'>
        <Col className="track-img-col"><a href={album_url} className='track-img'><img src={track.album.image_url} className='track-img' /></a></Col>
        <Col className='track-text-col'>
            <div className="track-text">
                <a href={track_url}>
                    <strong>{track.name}</strong>
                </a>
            </div>
            <div className="track-text">
                <a href={artist_url}>
                    {artists_str}
                </a>
            </div>
            <div className="track-text">
                <a href={playlist_url}>
                    Added to <em>{playlist.name}</em> {addedAt_str}
                </a>
            </div>
        </Col>
    </Row>
}