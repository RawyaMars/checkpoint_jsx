import React from 'react'
import Table from 'react-bootstrap/Table';
const Resume = () => {
  return (
    <div>
    <Table border="0" style={{textAlign:"left"}}>
    <thead>
    <tr >
            <th>Year</th>
            <th>Degree</th>
        </tr>
    </thead>
        <tbody>
        <tr >
            <td>2018/2021 : </td>
            <td>Master in Computer Science : Information System and New Technologies (SINT) <br/> Faculty of
                Economics and Management of Sfax</td>
        </tr>
        <tr>
            <td>2015/2018 : </td>
            <td>Fundamental licence in Computer Science Applied to Management <br/> higher institute of
                management of Gabes</td>
        </tr>
        <tr >
            <td>2014/2015 : </td>
            <td>Bachelor of Experimental sciences <br/> Secondary School of Medenine</td>
        </tr>
        </tbody>
        <tfoot></tfoot>
    </Table></div>
  )
}

export default Resume