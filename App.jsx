// const youtuber="thapa tech";
// const favprog="React js";

// function myName()
// {
//    let nam='vinod'
// return nam;
// }


// function myNames()
// {
// let nam='vinods'
// return nam;
// }
// export default youtuber;
// export { favprog,myName,myNames };
import Header from "./Header";
import Todos from "./Todos";
import Footer from "./Footer";
function App()
{
   let myvar=345;
   return(
      <>
      <Header title="my todo list" searchBar={true}/>
      <Todos/>
      <Footer/>
      </>
   );
}
export default App;