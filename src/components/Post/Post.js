import React from 'react';
import './Post.css';

const Post = () => {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://www.topsoft.am/media/1009/blog_post-657x345.jpg"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">
                        {/* <Link className="link" to="/posts?cat=Music"> */}
                        Music
                        {/* </Link> */}
                    </span>
                    <span className="postCat">
                        {/* <Link className="link" to="/posts?cat=Music"> */}
                        Life
                        {/* </Link> */}
                    </span>
                </div>
                <span className="postTitle">
                    {/* <Link to="/post/abc" className="link"> */}
                    Lorem ipsum dolor sit amet
                    {/* </Link> */}
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione atque, exercitationem quibusdam, reiciendis odio laboriosam?
            </p>
        </div>
    );
};

export default Post;