import {Link, useNavigate, useParams} from "react-router-dom";
import * as React from "react";
import {useContext, useState} from "react";
import {GlobalContext} from "../../contexts/globalContext";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const EditCard = () => {
    const {state: {list}} = useContext(GlobalContext)
    const {id} = useParams()
    const editPost = list.find(el => el.id === +id)
    const {name, imgLink, description} = editPost

    const [newName, setNewName] = useState(name)
    const [newImgLink, setNewImgLink] = useState(imgLink)
    const [newDescription, setNewDescription] = useState(description)
    const {dispatch} = useContext(GlobalContext)
    const [validation, setValidation] = useState(false)
    const navigate = useNavigate()
    const handleSave = (event) => {
        event.preventDefault()

        const editedPost = {
            name: newName,
            imgLink: newImgLink,
            description: newDescription,
            id: +id
        }
        if (newName) {
            dispatch(
                {
                    type: 'EDIT_CARD',
                    payload: editedPost,
                }
            )
            navigate('/list')
        } else {
            setValidation(true)
        }
    }

    return (
        <>
            <Card sx={{maxWidth: 345}}>
                <CardMedia
                    sx={{height: 140}}
                    image={imgLink}
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>

            </Card>
            <Box
                component="form"
                onSubmit={handleSave}
                sx={{
                    '& > :not(style)': {m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="off"
            >
                <Box>
                    <h4>
                        редактирование
                    </h4>
                </Box>
                <TextField
                    required
                    error={validation}
                    id="outlined-basic"
                    label="название"
                    variant="outlined"
                    value={newName}
                    onInput={e => {
                        setNewName(e.target.value)
                        setValidation(false)
                    }}/>
                <TextField
                    id="outlined-basic"
                    label="описание"
                    variant="outlined"
                    value={newDescription}
                    onInput={e => setNewDescription(e.target.value)}/>

                <TextField
                    id="outlined-basic"
                    label="ссылка на изображение"
                    value={newImgLink}
                    variant="outlined"
                    onInput={e => setNewImgLink(e.target.value)}/>

                <Box>
                    <Button variant="contained" type='submit'>сохранить</Button>
                    <Link to='/list'>
                        <Button
                            size="small"
                        >отмена</Button>
                    </Link>
                </Box>

            </Box>
        </>
    )
}