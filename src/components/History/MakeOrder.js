import React, { useState, useEffect } from 'react';
import {ethers} from 'ethers';
import erc20abi from '../../erc20abi.json';
import ls from 'local-storage'
import {FormContainer, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, 
    FormButton, Text, Column, Row, FormTextArea, FormSelect, Option} from './MakeOrderElements';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import image from '../../images/etherium_image.png'
import {MainContainer, MainBg} from '../Wallet/WalletElements'

const categories = [
  { label: "Construction", value: 1 },
  { label: "Furniture", value: 2 },
  { label: "Vehicle", value: 3 },
  { label: "Technology", value: 4 },
  { label: "Service", value: 5 },
  { label: "Electronics", value: 6 },
];

const MakeOrder = () => {
    const [contract, setContract ] = useState(null);
    const [nextOrderId, setNextOrderId ] = useState(null);

    useEffect(() => {
        //handleContract();
      }, []);

    const handleContract = () => {
        
    }

    const makeOrder = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        var name = data.get("name");
        var unit = data.get("unit");
        var categories = data.get("categories");
        var quantity = data.get("quantity");
        var expirationBlock = data.get("expirationBlock");
        var itemDescription = data.get("itemDescription");
        var condition = data.get("condition");
        var price = data.get("price");
        var location = data.get("location");
        var buyer = "0x0000000000000000000000000000000000000000";
        var status = "Active";

        let myObj = {"orderId": nextOrderId, "name": name, "unit": unit, "categories": categories,
        "quantity": quantity, "expirationBlock": expirationBlock, "itemDescription": itemDescription, 
        "condition": condition, "price": price, "buyer": buyer, "location": location, "status": status};
       
        var callPromise = contract.addOrder(myObj);
    
        callPromise.then(function(result){
            console.log(result);
            toast.success("Order is placed!");
            setTimeout(function() {
              window.location='/history'
            }, 5000);
        });
  }

  return (
    <>
    <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} 
    newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
    <MainContainer>
    <FormContainer>
        <FormWrap>
          <FormContent>
            <Form  onSubmit={makeOrder}>
              <FormH1>Add new impact</FormH1>
              <Row>
                <Column> 
                    <TextField type = 'text' name = 'name' label = "Impact name" fullWidth variant='standard' required/>
                </Column>
                <Column>
                <FormControl variant="standard" sx={{minWidth: 200 }}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native" required> Dimension </InputLabel>
                    <Select name="unit" label="Units" fullWidth required>
                      <MenuItem value=""><em>None</em></MenuItem>
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
                    <Select name="condition" label="Condition" fullWidth required>
                      <MenuItem value=""><em>None</em></MenuItem>
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
                    <Select name="categories" label="Category" fullWidth required>
                      <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value={1}>Positive</MenuItem>
                      <MenuItem value={2}>Negative</MenuItem>
                      
                    </Select>
                </FormControl>
                </Column>
             
                <Column>

              <FormControl variant="standard" sx={{minWidth: 200 }}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native" required> Reference impact </InputLabel>
                    <Select name="categories" label="Category" fullWidth required>
                      <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value={1}>Positive</MenuItem>
                      <MenuItem value={2}>Negative</MenuItem>
                      
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