import './App.css'
import Post from './components/post/index'


const RossGeller = "https://i.pinimg.com/originals/20/13/a4/2013a4bece1fd4e40c261ea4a609c90a.png";

const DoctorGeller = "https://img.buzzfeed.com/buzzfeed-static/static/2018-10/10/11/enhanced/buzzfeed-prod-web-05/enhanced-733-1539186461-15.png?downsize=900:*&output-format=auto&output-quality=auto";


const App = () => {
  return (<>
   <Post author={{
            name: "Ross Geller",
            photo: RossGeller,
            nickname: "@divorce-force"
         }}
         content="Why even Facebook don't believe that we were on a break??"
         image={DoctorGeller}
         date={"12 апр."}
         
         
/>
    </>
    )
  }

export default App;
