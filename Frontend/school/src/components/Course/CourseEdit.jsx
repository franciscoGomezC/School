import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { AppSettings } from "../AppSettings/AppSettings";



const CourseEdit = () => {

    const { id } = useParams(); //obtenemos el id del curso a editar de la url
    const navigate = useNavigate();
    const [course, setCourse] = useState({name: '',description: '', credits: 0});
    const [originalCourse, setOriginalCourse] = useState(null); //estado para guardar el curso original
    //patch solamente actualiza los campos que han cambiado, no se van a enviar los campos que no han cambiado
    //patch es un metodo de la API REST que se utiliza para actualizar parcialmente un recurso existente.
    //por eso es importante hacer una copia del curso original al momento de traer la entidad 


    //useEffect se ejecuta cuando el componente se monta y cada vez que cambia el id
    useEffect(() => {
        const fetchCourse = async () => {
            try { //fetch original: `http://localhost:5103/api/Course/${id}`
                const response = await fetch(`${AppSettings.apiUrl}Course/${id}`, {
                    headers: {'Authorization': `Bearer ${AppSettings.token}`}  
                });
                //verificamos si la respuesta es correcta
                if (!response.ok) throw new Error('Error fetching course');
                const data = await response.json();
                setCourse(data); //actualizamos el estado con los datos del curso
                setOriginalCourse(data); //guardamos el curso original...guardamos el curso original para compararlo con el curso editado
            } catch (error) {
                console.error(error);
                Swal.fire({title: 'Error', text: 'Could not create course', icon: 'error'});
            }
        };
        fetchCourse();
    }, [id]); //dependencia id, se ejecuta cada vez que cambia el id


    const handleChange = (e) => { //obtenemos el nombre del campo y su valor
        //actualizamos solo el campo que ha cambiado
        setCourse({...course, [e.target.name]: e.target.value}); //mantenemos el resto de los campos sin cambios
    };

    

    const handleSubmit = async (e) => {
        e.preventDefault(); //evitamos que se recargue la pagina

        //si aún no se cargo el curso original, no se puede editar, no hacemos nada
        if (!originalCourse) return; //si no hay curso original, no se puede editar

        //Construimos el arreglo de operaciones json patch solo con las propiedades que han cambiado
        const patchData = [];
        if (course.name !== originalCourse.name) {
            patchData.push({ op: 'replace', path: '/name', value: course.name });
        }
        if (course.description !== originalCourse.description) {
            patchData.push({ op: 'replace', path: '/description', value: course.description });
        }
        if (course.credits !== originalCourse.credits) {
            patchData.push({ op: 'replace', path: '/credits', value: course.credits });
        }

        //puedes optar por no enviar la peticion si no hay cambios
        if (patchData.length === 0) {
            Swal.fire({title: 'Info', text: 'No changes were made, edit something', icon: 'info'});
            return;
        }

        try { //fetch original: `http://localhost:5103/api/Course/${id}`
            const response = await fetch(`${AppSettings.apiUrl}Course/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json-patch+json',
                    'Authorization': `Bearer ${AppSettings.token}`
                 }, //especificamos el tipo de contenido
                body: JSON.stringify(patchData), //convertimos el objeto course a un objeto JSON
            });
            if (!response.ok) throw new Error('Error updating course');
            navigate('/course'); //redireccionamos a la lista de cursos
        } catch (error) {
            console.error(error);
            Swal.fire({title: 'Error', text: 'Could not update course', icon: 'error'});
        }
    };

    return (
        <Container className="mt-4">
            <h2>Edit Course</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" value={course.name} onChange={handleChange} required/>
                </FormGroup>

                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="text" name="description" value={course.description} onChange={handleChange}/>
                </FormGroup>

                <FormGroup>
                    <Label for="credits">Credits</Label>
                    <Input type="number" name="credits" value={course.credits} onChange={handleChange} required/>
                </FormGroup>
                <Button color="secondary" onClick={() => navigate('/course')}>Back</Button>{''}
                <Button color="primary" type="submit">Save</Button>
            </Form>
        </Container>
    );

};
export default CourseEdit