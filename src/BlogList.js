const BlogList = ({ blogs, blogTitle }) => {
	// const blogs = props.blogs;
	// console.log(props, blogs);
	return (
		<div className='blog-list'>
			<h2>{blogTitle}</h2>
			{blogs.map((blog) => (
				<div className='blog' key={blog.id}>
					<h2 className='blog__title'>{blog.title}</h2>
					<p className='blog__description'>{blog.description}</p>
					<a className='blog__link' href={blog.url}>
						Read More
					</a>
				</div>
			))}
		</div>
	);
};

export default BlogList;
