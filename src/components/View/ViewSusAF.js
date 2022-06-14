import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ls from 'local-storage'
import {MainContainer, MainBg, Container, FormButton, Text} from './ViewElements';
import UpdateIcon from '@mui/icons-material/Edit';

const ViewSusAF = () => {
  
    const [impacts, setImpactsArray] = useState([]);
    
    useEffect(() => {
      getImpactInfo();
    }, []);

    
    const getImpactInfo = async (e) => {
            fetch('http://localhost:5000/impacts/',
            {
                method: "GET"
            }
        )
        .then(response => 
          response.json().then(data => ({
              data: data,
              status: response.status
          })
          )
          .then(res => {
            setImpactsArray(res.data.result);
          }));
    }


    const getReference = (x,id) => {
      //console.log(id);
              fetch('http://localhost:5000/impact/' + id,
              {
                  method: "GET",
                  headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
              },
              }
          )
          .then(response => 
            response.json().then(data => ({
                data: data,
                status: response.status
            })
            )
            .then(res => {
              //console.log(res.data.result[0].impact_title);
              //setRefImpact(res.data.result[0].impact_title);
              document.getElementById(x).innerText = res.data.result[0].impact_title;
              //return res.data.result[0];
            }));
            
        }

    const getLevel = (category) => {
      if (category === "1") return  "Immediate";
      else if (category === "2") return  "Enabling";
      else if (category === "3") return  "Systematic";
      else return  "";
  }

  const getDimension = (category) => {
      if (category === "1") return  "Social";
      else if (category === "2") return  "Environmental";
      else if (category === "3") return  "Economic";
      else if (category === "4") return  "Technical";
      else if (category === "5") return  "Individual";
      else return  "";
  }

  const getType = (category) => {
      if (category === "1") return  "+";
      else if (category === "2") return  "-";
      else return  "";
  }



    return (
      <>
      <MainContainer>
       
      <Container>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1000 }} aria-label="simple table">
        <TableHead style={{backgroundColor: "#4caf50"}}>
          <TableRow>
            <TableCell >Impact name</TableCell>
            <TableCell >Reference impact</TableCell>
            <TableCell >Level</TableCell>
            <TableCell >Type</TableCell>
            <TableCell >Dimension</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {impacts.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.impact_title}
              </TableCell>
              <TableCell id={row.id_impact}>{(row._reference !== null ? getReference(row.id_impact,row._reference): "No reference")}</TableCell>
              <TableCell>{getLevel(row._level.toString())}</TableCell>
              <TableCell>{getType(row._type.toString())}</TableCell>
              <TableCell>{getDimension(row._dimension.toString())}</TableCell>
              <TableCell> <UpdateIcon style={{ color: '#01bf71' }} /> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          
      </Container>
      </MainContainer>
        </>
    )
}

export default ViewSusAF;