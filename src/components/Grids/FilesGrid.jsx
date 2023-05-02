import { useEffect, useState } from 'react';

import {Link} from 'react-router-dom'
import Table from 'react-bootstrap/Table';
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
    <div className='mx-5 mt-4'>
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
                  <td colSpan={1} key={`numb-${index}`}>{index}</td>
                  <td colSpan={2} key={`title-${index}`}>
                    <Link to={`/${title}`} className='text-black text-decoration-none'>
                      {title}
                    </Link>
                  </td>
              </tr>)
          }
        </tbody>
      </Table>
    </div>
  );
}

export default FilesGrid;