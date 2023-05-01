import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import {filesList as filesListStatics} from '../../shared/Constants'


function FilesGrid() {

    const [data, setData] = useState(null)

  useEffect(() => {
     async function fetchData() {
       await fetch('http://localhost:4000/api/v1/secret/files')
      .then(response => response.json())
      .then(data => setData(data))
    }
    fetchData();
  }, [])

  return (
    <Table striped bordered hover size="sm" className="custom-table">
      <thead>
        <tr>
            {filesListStatics.titles.map((title, i) => 
                <th colSpan={2} key={`title-${i}`} className='bold'>{title}</th>)
            } 
        </tr>
      </thead>
      <tbody>
        {data && data.files.map((title, index) => 
            <tr key={`title-${index}`}>
                <td  colSpan={2} key={`numb-${index}`}>{index}</td>
                <td  colSpan={2} key={`title-${index}`}>{title}</td>
            </tr>)
        }
      </tbody>
    </Table>
  );
}

export default FilesGrid;