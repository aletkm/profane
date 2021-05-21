const apiUrl = process.env.NODE_ENV === 'development' 
    ? 'https://profane.vercel.app/api' // development api
    : 'https://profane.vercel.app/api'; // production api

export {
    apiUrl
};
