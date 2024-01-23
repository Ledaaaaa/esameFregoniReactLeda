import axios from "axios";

const baseUrl = 'https://zdfjzdtgnbfdfpckswja.supabase.co/rest/v1/Leda table' //'https://opgjotdbnmjbptrgxchl.supabase.co/rest/v1/communityLoadouts'

export const PostInsta = async ( username, text, image, likes, comments  ) => {

  axios.defaults.headers['apikey'] = ''//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wZ2pvdGRibm1qYnB0cmd4Y2hsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5MTg2NDMsImV4cCI6MjAyMTQ5NDY0M30.wNULyv1Lh82k6k0QUCY9c-lPyO8s6irge-HtDpl3ASk"
  axios.defaults.headers['Authorization'] = ''//"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wZ2pvdGRibm1qYnB0cmd4Y2hsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5MTg2NDMsImV4cCI6MjAyMTQ5NDY0M30.wNULyv1Lh82k6k0QUCY9c-lPyO8s6irge-HtDpl3ASk"

  await axios.post(baseUrl, {

    username : username,
    text : text,
    image : image,
    likes : likes,
    comments : comments
  }, {}).then(res => {
    console.log(res);
    console.log(res.data);
    return "Tutto corretto"

  })
  .catch(error => {
    console.log(error)
    return "Tutto sbagliato..."

  }
  );

}
const getInsta = async() =>{
    //let getString = "?select=*" 
    //axios.defaults.headers['apikey'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkZmp6ZHRnbmJmZGZwY2tzd2phIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5NTYyNzAsImV4cCI6MjAyMTUzMjI3MH0.XI3O-l3IBRprzGb1aLjjY9DxcV9VttTtP8Kq93-Cpxs"
   // axios.defaults.headers['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkZmp6ZHRnbmJmZGZwY2tzd2phIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5NTYyNzAsImV4cCI6MjAyMTUzMjI3MH0.XI3O-l3IBRprzGb1aLjjY9DxcV9VttTtP8Kq93-Cpxs"
  
    const response = await axios.get("https://zdfjzdtgnbfdfpckswja.supabase.co/rest/v1/LedaTable?select=*", {
      headers: {
      'apikey': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkZmp6ZHRnbmJmZGZwY2tzd2phIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5NTYyNzAsImV4cCI6MjAyMTUzMjI3MH0.XI3O-l3IBRprzGb1aLjjY9DxcV9VttTtP8Kq93-Cpxs",
      'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkZmp6ZHRnbmJmZGZwY2tzd2phIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5NTYyNzAsImV4cCI6MjAyMTUzMjI3MH0.XI3O-l3IBRprzGb1aLjjY9DxcV9VttTtP8Kq93-Cpxs"
       }
    });
      console.log('response api', response.data);
      return response.data
  }

  export {getInsta};



