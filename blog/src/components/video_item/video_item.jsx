import React from 'react';

const VideoItem = (props) => (
    <>
    
    <h3>{props.video.snippet.title}</h3>
    <img src={props.video.snippet.thumbnails.default.url} />
    <span style="display: inline-block; overflow: overlay; height: 90px; width: 700px;">

        <small>
            {props.video.snippet.description}
        </small>
    </span>

    
    </>
    );

export default VideoItem;