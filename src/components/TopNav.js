import React from 'react';
import { Link } from 'react-router-dom';

const topics = [
  'World',
  'U.S.',
  'Politics',
  'Business',
  'Tech',
  'Science',
  'Health',
  'Sports',
  'Arts',
  'Food',
  'Travel',
  'Real Estate',
];

const TopNav = () => {
  return (
    <ul className='nav justify-content-between'>
      {topics.map((topic) => (
        <li key={topic}>
          <Link to={`/search/${topic}`}>{topic}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TopNav;
