import DCRFLogo from './../../assets/homePage/dcrf.webp';
import ProfilePic from './../../assets/homePage/Eric Navar.webp';
import GatorUXLogo from './../../assets/homePage/gatorux.webp';
import DatabasePic from './../../assets/homePage/database.webp';
import InspirationPic from './../../assets/homePage/inspiration.webp';

export default [
  {
    "_id": 1,
    "tools": "MERN Stack web app",
    "headerText": "DC Rock Fitness",
    "subText": ["(No longer functional) A website for a fitness center where an admin can create ","blog posts"," and nutrition posts. Clients can view their assigned ", " personalized workout"," plans for the week."],
    "link": "https://dcrf.ericnavar.com",
    "image": DCRFLogo,
    "altLabel": "DC Rock Fitness Logo",
    "ariaLabel": "DC Rock Fitness website"
  },
  {
    "_id": 2,
    "tools": "React app",
    "headerText": "My Resume",
    "subText": ["My resume but with way more CSS than necessary and now with dark mode 😎. Hosted on ","AWS Amplify","."],
    "link": "/resume",
    "image": ProfilePic,
    "altLabel": "Eric Navar",
    "ariaLabel": "Eric Navar resume"
  },
  {
    "_id": 3,
    "tools": "React app",
    "headerText": "Inspiration Generator",
    "subText": ["Autogenerated ","inspiration"," with each refresh!"],
    "link": "/inspire",
    "image": InspirationPic,
    "altLabel": "Mountain",
    "ariaLabel": "Inspiration Generator"
  },
  {
    "_id": 5,
    "tools": "Flask app",
    "headerText": "SQL Injection Demo",
    "subText": ["A ","flask app"," I got running that serves as an example for how ","SQL injection"," in a website with poor security may occur"],
    "link": "https://sql-ssd.herokuapp.com/login",
    "image": DatabasePic,
    "altLabel": "Database icon",
    "ariaLabel": "SWL injection playground"
  },
  {
    "_id": 6,
    "tools": "React",
    "headerText": "Gator UX Website",
    "subText": ["My attempt to make a responsive, well-designed webpage for Gator UX using some ","principles of UX"," I've learned from attending the club."],
    "link": "http://gatorux.ericnavar.com",
    "image": GatorUXLogo,
    "altLabel": "Gator UX Logo",
    "ariaLabel": "Gator UX website"
  }
]