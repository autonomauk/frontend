import React from 'react';
import { Col, Spinner, Row } from 'react-bootstrap';
import './TrackLog.scss';
import moment from 'moment';

export default function TrackLog(props) {
    const [track_logs, setTrackLogs] = React.useState([]);
    const [offset, setOffset] = React.useState(0);
    let length = 10;
    const [total, setTotal] = React.useState(Infinity);
    const [loading, setLoading] = React.useState(true);
    const { jwt } = props;

    React.useEffect(() => {
        let tmp_len = length;
        if (total - offset < length) {
            tmp_len = total - offset
        }
        fetch("/api/me/track_log?offset=" + offset + "&length=" + tmp_len, {
            method: 'GET',
            headers: {
                jwt: jwt
            }
        }).then(res => res.json())
            .then(res => {
                setTrackLogs(track_logs.concat(res.track_log));
                setTotal(res.total);
            })
            .then(_ => setLoading(false))
            .catch(err => console.error(err));
    }, [jwt, offset]); //eslint-disable-line

    if (process.env.NODE_ENV === "development" && track_logs.length <= 4) {
        while (track_logs.length <= 4) {
            const track_log = {
                track: {
                    uri: 'asdasd:sadasd',
                    name: 'test',

                    album: {

                        uri: 'asdasd:sadasd',
                        name: 'test',
                        image_url: '/favicon.ico'

                    },
                    artists: [
                        {
                            name: 'test',
                            uri: 'sadasd:sadasd'
                        }
                    ]
                },
                playlist: {
                    uri: 'asdasd:sadasd',
                    name: 'test'
                },
                createdAt: "2030-10-21T10:10:10.111111"
            }
            track_logs.push(track_log)
        }
    }


    const track_list_items = track_logs.map((track_log, idx) => <Track key={'track_' + idx} track_log={track_log} />)
    if (track_logs.length < total) {
        track_list_items.push(<p id='more-text-button' onClick={() => setOffset(offset + length)}>More <i class="fas fa-caret-down"></i></p>)
    }

    return <Col id='track-log'>{
        loading ?
            <Spinner animation="border" />
            :
            <div>
                <h4>History</h4>
                <div id='break' />
                <div id='track-list'>
                    {track_logs.length > 0 ? track_list_items : "Nothing here yet. Get liking!"}
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

    const artists_str = track.artists.length === 1 ?
        track.artists[0].name
        :
        track.artists.map((artist, _) => artist.name).join(', ');

    const addedAt_str = moment(createdAt, 'YYYY-MM-DDTHH:mm:ss.SSSSSS').fromNow()
    return <Row className='track-row'>
        <Col className="track-img-col"><a href={album_url} className='track-img'><img src={track.album.image_url} alt={"album: " + track.album.name} className='track-img' /></a></Col>
        <Col className='track-text-col'>
            <div className="track-text">
                <a href={track_url}>
                    <i className="fab fa-spotify"></i>
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