import React from 'react';

const VideoListItem = ({video, onVideoClick}) => {

  const imageUrl = video.snippet.thumbnails.default.url;
  // console.log('video',video);
  return (
    <li className="list-group-item">
        <div className="vedio-list media">
          <div className="media-left">
            <img src={imageUrl} alt="" className="media-object"/>
          </div>

          <div className="media-body">
            <div className="media heading">
              {video.snippet.title}
            </div>
          </div>
        </div>
    </li>
  );
};

export default VideoListItem;
