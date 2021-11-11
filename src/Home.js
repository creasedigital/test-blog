import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
	const [blogs, setBlogs] = useState([
		{
			title: 'Bloggers Party',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quos!',
			url: 'http://blog189.net',
			id: '1',
		},
		{
			title: 'How To Run A Blog',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quos!',
			url: 'http://blog289.net',
			id: '2',
		},
		{
			title: 'The Blogging Life',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quos!',
			url: 'http://blog389.net',
			id: '3',
		},
		{
			title: 'Bloggers Of Valour',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quos!',
			url: 'http://blog489.net',
			id: '4',
		},
		{
			title: 'Bloggers Of Valour',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quos!',
			url: 'http://blog589.net',
			id: '5',
		},
	]);

	const handleDelete = (id) => {
		const newBlogs = blogs.filter((blog) => blog.id !== id);
		setBlogs(newBlogs);
	};

	return (
		<div className='home'>
			<BlogList
				blogs={blogs}
				blogTitle='All Blogs'
				handleDelete={handleDelete}
			/>
			<BlogList
				blogs={blogs.filter((blog) => blog.title === 'Bloggers Of Valour')}
				blogTitle='Blogs'
			/>
		</div>
	);
};

export default Home;
