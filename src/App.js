import './App.css'
import Post from './components/post/index'


const RossGeller = "https://i.pinimg.com/originals/20/13/a4/2013a4bece1fd4e40c261ea4a609c90a.png";

const DoctorGeller = "https://cdn3.whatculture.com/images/2016/01/e4PD8qSM.png"

const Professor = "http://d1ydle56j7f53e.cloudfront.net/assets/news_images/The-Professor--1--111036.jpg";

const LaCasaDePapel = "https://miro.medium.com/max/1120/0*XhURthSzEKmBSAMW.png";

const App = () => {
  return (<>
  <div className='post-feed'>
  <Post author={{
            name: "Ross Geller",
            photo: RossGeller,
            nickname: "@divorce-force"
         }}
         content="Why even Facebook don't believe that we were on a break??"
         image={DoctorGeller}
         date={"12 апр."}       
/>
<Post author={{
            name: "Sergio Marquina",
            photo: Professor,
            nickname: "@professor"
         }}
         content="Hey,do you want interesting job?"
         image={LaCasaDePapel}
         date={"12 апр."}       
/>
  </div>
   
    </>
    )
  }

export default App;
