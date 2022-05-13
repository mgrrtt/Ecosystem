export const apiUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3001/api/apps';
  }

  return 'https://run.mocky.io/v3/520d725a-a776-4986-a42b-5071a45d3214';
};
