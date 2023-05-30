import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {useContext, useState} from "react";
import {GlobalContext} from "../../contexts/globalContext";

export default function AddCard() {
    const [name, setName] = useState('')
    const [imgLink, setImgLink] = useState('')
    const [description, setDescription] = useState('')
    const {dispatch} = useContext(GlobalContext)
    const [validation, setValidation] = useState(false)
    const handleAdd = (event) => {
        event.preventDefault()
        const post = {
            name,
            imgLink,
            description
        }
        if (post.name) {
            dispatch(
                {
                    type: 'ADD_CARD',
                    payload: post,
                }
            )
        } else {
            setValidation(true)
        }


    }
    return (
        <Box
            component="form"
            onSubmit={handleAdd}
            sx={{
                '& > :not(style)': {m: 1, width: '25ch'},
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                error={validation}
                id="outlined-basic"
                label="название"
                variant="outlined"
                onInput={e => {
                    setName(e.target.value)
                    setValidation(false)
                }}/>
            <TextField
                id="outlined-basic"
                label="описание"
                variant="outlined"
                onInput={e => setDescription(e.target.value)}/>
            <TextField
                id="outlined-basic"
                label="ссылка на изображение"
                variant="outlined"
                onInput={e => setImgLink(e.target.value)}/>

            <Button variant="contained" type='submit'>Добавить</Button>
        </Box>
    );
}