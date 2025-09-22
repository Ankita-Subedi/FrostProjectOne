

// import PasswordDrawer from './components/Drawer/PasswordDrawer'


import CardTemplate from "./components/templates/CardTemplate"


const App = () => {
  return (
    // <div>
    //   <PasswordDrawer title="Password Changed" subtitle='Your Password has been changed successfully !' buttonlabel='Login With New Password'></PasswordDrawer>
    // </div>
   <>
   <svg width="0" height="0" style={{ position: "absolute" }}>
      <defs>
       
      <linearGradient id="gradient-blue-purple" x1="0%" y1="0%" x2="100%" y2="0%">
  <stop offset="0%" stop-color="#299FE7" />
  <stop offset="50%" stop-color="#299FE7" />
  <stop offset="50%" stop-color="#66CD00" />
  <stop offset="100%" stop-color="#66CD00" />
</linearGradient>
      </defs>
    </svg>
      <CardTemplate></CardTemplate>

   </>
  
   
  )
}

export default App


