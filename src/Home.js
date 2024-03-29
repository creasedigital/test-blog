import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
	const [blogs, setBlogs] = useState(null);

	useEffect(() => {
		fetch('http://localhost:8000/blogs')
			.then((res) => res.json())
			.then((data) => setBlogs(data));
	}, []);

	return (
		<div className='home'>
			{blogs && <BlogList blogs={blogs} blogTitle='All Blogs' />}
			{/*<BlogList
				blogs={blogs.filter((blog) => blog.title === 'Bloggers Of Valour')}
				blogTitle='Blogs'
      />*/}
		</div>
	);
};

export default Home;
