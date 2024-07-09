import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageurl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ position: 'relative' }}>
                   <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:0}}>
                    <span className="badge rounded-pill bg-danger">
                        {source}
                    </span>
                   </div>
                    <img src={imageurl ? imageurl : "https://cdn.vox-cdn.com/thumbor/bNRxjIXIJ1AI8FrLhADmrXc7b3I=/0x0:4000x2094/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25447983/1746649757.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>

                        <p className="card-text">
                            <small className="text-success">
                                By {author ? author : "unknown"}
                                on {new Date(date).toGMTString()}
                            </small></p>
                        <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
