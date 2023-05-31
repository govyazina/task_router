import * as React from 'react';
import {useContext, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {GlobalContext} from "../../contexts/globalContext";
import Container from "@mui/material/Container";
import {useNavigate} from "react-router-dom";

export default function AddCard() {
    const [name, setName] = useState('')
    const [imgLink, setImgLink] = useState('https://cdn.dribbble.com/users/1018252/screenshots/14246350/cat.png')
    const [description, setDescription] = useState('')
    const {dispatch} = useContext(GlobalContext)
    const [validation, setValidation] = useState(false)
    const navigate = useNavigate()
    const handleAdd = (event) => {
        event.preventDefault()

        const post = {
            name,
            imgLink,
            description,
            id: Date.now()
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
        navigate('/list')



    }
    return (
        <Container>

            <Box
                component="form"
                onSubmit={handleAdd}
                sx={{
                    '& > :not(style)': {m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="off"
            >
                <Box>
                    <h4>
                        Добавить новый ресторан
                    </h4>
                    <p>
                        введите название, небольшое описание и ссылку на изображение
                    </p>
                </Box>
                <TextField
                    required
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

                <Box>
                    <Button variant="contained" type='submit'>Добавить</Button>
                </Box>

            </Box>
        </Container>
    );
}