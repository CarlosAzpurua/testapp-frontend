import { useEffect, useMemo, useState } from 'react';

import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import {filesList as filesListStatics} from '../../shared/Constants'

function TableRow({ index, title }) {
  return (
    <tr key={`title-${index}`}>
      <td colSpan={1} key={`numb-${index}`}>{index}</td>
      <td colSpan={2} key={`title-${index}`}>
        <Link to={`/${title}`} className='text-black text-decoration-none'>
          {title}
        </Link>
      </td>
    </tr>
  );
}

function FilesTable({ data }) {
  const tableRows = useMemo(() => {
    if (!data) {
      return null;
    }

    return data.files.map((title, index) => 
      <TableRow key={`title-${index}`} index={index} title={title} />
    );
  }, [data]);

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
        {tableRows}
      </tbody>
    </Table>
  );
}

function FilesGrid() {

    const [data, setData] = useState(null)

    async function fetchData() {
      try {
        const response = await fetch('http://localhost:4000/api/v1/secret/files');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
        alert("Something unexpected happened. Please check the API or confirm if the files are properly installed.")
      }
    }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className='mx-5 mt-4'>
      <FilesTable data={data} />
    </div>
  );
}

FilesTable.propTypes = {
  data: PropTypes.shape({
    files: PropTypes.arrayOf(PropTypes.string.isRequired),
  }),
};

export default FilesGrid;