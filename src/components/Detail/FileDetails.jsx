import { useEffect, useState } from 'react';

import Table from 'react-bootstrap/Table';
import {fileDetails} from '../../shared/Constants'
import { useParams } from 'react-router-dom'

const _ = require("lodash");

function FileDetails() {

    const [dataFile, setDataFile] = useState({})
    const params = useParams()

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:4000/api/v1/secret/file/${params.fileId}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setDataFile(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, [params.fileId])

    const keys = _.keys(dataFile)
    const detailsFile = dataFile.file

    return (
        <div className='mx-5 mt-4'>
            <Table striped bordered hover size="sm" className="custom-table">
            <thead>
                <tr>
                    {fileDetails.titles.map((title, i) => 
                        <th key={`title-${i}`} className='bold'>{title}</th>)
                    } 
                </tr>
            </thead>
            <tbody>
                {_.map(detailsFile, (_value, index) => (
                <tr key={`row-${index}`}>
                    {keys.map(key => (
                    <td key={`${key}-${index}`}>{dataFile[key][index] ?? '-'}</td>
                    ))}
                </tr>
                ))}
            </tbody>
            </Table>
        </div>
    );
}

export default FileDetails;