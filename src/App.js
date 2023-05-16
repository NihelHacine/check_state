import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';



function App() {
  const [profil, setprofil] = useState({
    fullName:"Nihel Hacine",
    bio: "Never give up!",
    img: "img1.JPG",
    profession:"Developpeuse web"
  })
  const [shows, setshows] = useState(false)
  return (
  <div className='container'>
 <center> <img src={profil.img} alt=''/> <Button variant="primary" onClick={() => setshows(!shows)}>Taper pour découvrir c'est qui !! </Button> </center>
    {shows?(<Table striped bordered hover variant="dark" className='tab'>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Bio</th>
          <th>Profession</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{profil.fullName}</td>
          <td>{profil.bio}</td>
          <td>{profil.profession}</td>
        </tr>
        <tr>
          <td>Modifier <input type='text' onChange={(e)=>setprofil({...profil, fullName:e.target.value})}/></td>
          <td>Modifier <input type='text' onChange={(e)=>setprofil({...profil, bio:e.target.value})}/></td>
          <td>Modifier <input type='text' onChange={(e)=>setprofil({...profil, profession:e.target.value})}/></td>
        </tr>
      </tbody>
    </Table>):null}
 </div>
//  ceci est un commentaire
  );
}

export default App;
