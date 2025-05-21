import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { AppSettings } from "../AppSettings/AppSettings";
import Swal from "sweetalert2";

const CourseCreate = () => {

    const [course, setCourse] = useState({name: '',description: '', credits: 0});
    const navigate = useNavigate();

    const handleChange = (e) => {
        //obtenemos el nombre del campo y su valor
        const { name, value } = e.target;

        //actualizamos solo el campo que ha cambiado
        setCourse({
            ...course, //mantenemos el resto de los campos sin cambios
            [name]: value //actualizamos el campo que ha cambiado
        });
    };

    /**
    const headleChange = (e) => {   
        setCourse({...course, [e.target.name]: e.target.value});
    };
    */

    const handleSubmit = async (e) => {
        
        e.preventDefault(); //evitamos que se recargue la pagina
        try{
            const response = await fetch(`${AppSettings.apiUrl}Course`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${AppSettings.token}` //enviamos el token de autenticacion
                },
                body: JSON.stringify(course), //convertimos el objeto course a un objeto JSON
            });
            if(!response.ok) throw new Error('Error creating course');
            navigate('/course'); //redireccionamos a la lista de cursos
        } catch (error) {
            console.error(error);
            Swal.fire({title: 'Error', text: 'Could not create course', icon: 'error'});
        }
    };

    return (
        <Container className="mt-4">
            <h4>Create Course</h4>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name" value={course.name} onChange={handleChange} required/>
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="text" name="description" id="description" value={course.description} onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="credits">Credits</Label>
                    <Input type="number" name="credits" id="credits" value={course.credits} onChange={handleChange} required/>
                </FormGroup>
                <Button color="primary" type="submit">Create</Button>
            </Form>
        </Container>
    );

};

export default CourseCreate