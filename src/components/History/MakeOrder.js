import React, { useState, useEffect } from 'react';
import ls from 'local-storage'
import {FormContainer, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, 
    FormButton, Text, Column, Row, FormTextArea, FormSelect, Option, MainContainer} from './MakeOrderElements';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const MakeOrder = () => {
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
    

    const addImpact = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

      var data = {
        "impact_title": form.get('name'),
        "_dimension": form.get('dimension'),
        "_level": form.get('level'),
        "_type": form.get('type'),
        "_reference": form.get('reference')
      }
      console.log("hi " + JSON.stringify(data))  
    fetch('http://localhost:5000/addimpact/' + JSON.stringify(data)
    ,
        {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST"
        }
    )
    .then(response => 
      response.json().then(data => ({
          data: data,
          status: response.status
      })
      )
      .then(res => {
          console.log(res.status);
          toast.success("Impact successfully added!");
          setTimeout(function() {
            window.location='/viewSusAF'
          }, 5000);
      }));
  }


  return (
    <>
    <ToastContainer position="top-center" autoClose={4000} hideProgressBar={false} 
    newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
    <MainContainer>
    <FormContainer>
        <FormWrap>
          <FormContent>
            <Form  onSubmit={addImpact}>
              <FormH1>Add new impact</FormH1>
              <Row>
                <Column> 
                    <TextField type = 'text' name = 'name' label = "Impact name" fullWidth variant='standard' required/>
                </Column>
                <Column>
                <FormControl variant="standard" sx={{minWidth: 200 }}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native" required> Dimension </InputLabel>
                    <Select defaultValue = "" name="dimension" label="Dimension" fullWidth required>
                      
                      <MenuItem value={1}>Social</MenuItem>
                      <MenuItem value={2}>Environmental</MenuItem>
                      <MenuItem value={3}>Economic</MenuItem>
                      <MenuItem value={4}>Technical</MenuItem>
                      <MenuItem value={5}>Individual</MenuItem>
                    </Select>
                </FormControl>  
                </Column>
                <Column>
                <FormControl variant="standard" sx={{minWidth: 200 }}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native" required> Level </InputLabel>
                    <Select defaultValue = "" name="level" label="Levels" fullWidth required>
                      
                      <MenuItem value={1}>Immediate</MenuItem>
                      <MenuItem value={2}>Enabling</MenuItem>
                      <MenuItem value={3}>Systematic</MenuItem>
                      <MenuItem value={4}>Undefined</MenuItem>
                      
                    </Select>
                </FormControl> 
                </Column>
              </Row>
              <Row>
                <Column>
                <FormControl variant="standard" sx={{minWidth: 200 }}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native" required> Impact type </InputLabel>
                    <Select defaultValue = "" name="type" label="Types" fullWidth required>
                      
                      <MenuItem value={1}>Positive</MenuItem>
                      <MenuItem value={2}>Negative</MenuItem>
                      
                    </Select>
                </FormControl>
                </Column>
             
                <Column>

              <FormControl variant="standard" sx={{minWidth: 200 }}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native" required > Reference impact </InputLabel>
                    <Select defaultValue = "" name="reference" label="References" fullWidth required>
                      {impacts.map((item) => ( 
                        <MenuItem value={item.id_impact}> {item.impact_title} </MenuItem>
                      ))}
                        
                    </Select>
                </FormControl>
                </Column>

              </Row>
              <FormButton type = 'submit'>Add impact</FormButton>  
            </Form>
          </FormContent> 
        </FormWrap>
      </FormContainer>
      </MainContainer>
    </>
  )
}

export default MakeOrder;