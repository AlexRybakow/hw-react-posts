import './App.css';
import Post from './components/post/posts';
import RossAvatar from './assets/RossAvatar.png';
import RossImage from './assets/RossImage.png';
import ProfessorAvatar from './assets/ProfessorAvatar.jpg'
import ProfessorImage from './assets/ProfessorImage.png'



const App = () =>  (
  <div className='post-feed'>
  <Post author={{
            name: "Ross Geller",
            photo: RossAvatar,
            nickname: "@divorce-force"
         }}
         content="Why even Facebook don't believe that we were on a break??"
         image={RossImage}
         date={"12 апр."}
         networks={{
          like:10, 
          repost:5,
          comment:3
         }}
               
/>
<Post author={{
            name: "Sergio Marquina",
            photo: ProfessorAvatar,
            nickname: "@professor"
         }}
         content="Hey,do you want interesting job?"
         image={ProfessorImage}
         date={"12 апр."}
         networks={{
          like:14, 
          repost:12,
          comment:11
         }}       
/>
  </div>  
    )
  

export default App;
