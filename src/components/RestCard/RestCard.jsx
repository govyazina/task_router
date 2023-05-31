import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {GlobalContext} from "../../contexts/globalContext";

export default function RestCard({
                                     name,
                                     imgLink,
                                     description,
                                     id
                                 }) {
    const navigate = useNavigate()
    const {dispatch} = useContext(GlobalContext)
    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    }
    const handleDelit = () => {
        dispatch(
            {
                type: 'DELETE_CARD',
                payload: id
            }
        )
    }
    return (
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
            <CardActions>
                <Button
                    size="small"
                    onClick={() => handleEdit(id)}
                >изменить</Button>
                <Button
                    size="small"
                    onClick={handleDelit}
                >удалить</Button>
            </CardActions>
        </Card>
    );
}