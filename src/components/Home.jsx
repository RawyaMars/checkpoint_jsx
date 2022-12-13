import React from 'react'
import { Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import About from './About';
import Resume from './Resume';
import Work from './Work';
const Home = () => {
  return (
    <div>
        <div className='home_class'>
        <Card style={{ width: '200px', border:'0px'}}>
      <Card.Img variant="center" src="https://media-exp1.licdn.com/dms/image/C5603AQF99UiNHaedHQ/profile-displayphoto-shrink_800_800/0/1658501441170?e=1672876800&v=beta&t=vdLX2LjanUVelxvsd4b7Rb9ttxqZdNgd7sJZCQMJM_U" />
    </Card>
    <Card style={{ width: '1000px', border:'0px', align:'center'}}>
      <Card.Body>     
        <h1>Hello, I am Rawya Mars<br/> <br/> </h1> 
        <h2>Blockchain researcher at ReDCAD Laboratory </h2> 
        <h2> Full stuck web development student, at GoMyCode</h2>
      </Card.Body>
    </Card>
</div>
<div className='About_class'>
        <Card style={{ width: '250px', border:'0px'}}>
        <Card.Body>     
        <h1>About me</h1> 
      </Card.Body></Card>
    <Card style={{ width: '1000px', border:'0px', align:'Left'}}>
      <Card.Body>     
        <About></About>
      </Card.Body>
    </Card>
</div>

<div className='Resume_class'>
        <Card style={{ width: '250px', border:'0px'}}>
        <Card.Body>     
        <h1>Resume</h1> 
      </Card.Body></Card>
    <Card style={{ width: '1000px', border:'0px', align:'Left'}}>
      <Card.Body>     
        <Resume></Resume>
      </Card.Body>
    </Card>
</div>

</div>
  )
}

export default Home