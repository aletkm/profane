const apiUrl = process.env.NODE_ENV === 'production' 
    ? 'http://localhost:3000/api' // development api
    : 'https://profane.vercel.app/api'; // production api
    
export {
    apiUrl
};