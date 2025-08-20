import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen '> 
      <h1 className='text-6xl font-bold text-gray-500 mb-4'>
        404
      </h1>
      <span>Oops! Page not found</span>
      <Link to="/" className='text-blue-500 hover:underline block'>Go back to Home</Link>
    </div>
  )
}
