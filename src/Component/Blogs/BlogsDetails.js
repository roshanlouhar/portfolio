export default class blogsDetails {
    render() {
        return (<article className="blog-post px-3 py-5 p-md-5">
            <div className="container">
                <header className="blog-post-header">
                    <h2 className="title mb-2">Why Every Developer Should Have A Blog</h2>
                    <div className="meta mb-3">
                        <span className="date">Published 3 months ago</span>
                        <span className="time">5 min read</span><span class="comment"><a href="#">4 comments</a></span>
                    </div>
                </header>
            </div>
        </article>)
    }
}