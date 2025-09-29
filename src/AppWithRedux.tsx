import './App.css';
import TodoList from "./components/TodoList";
import {AddItemForm} from "./components/AddItemForm";
import {useAppSelector} from "./hooks/useTypeSelectorHook";
import Container from '@mui/material/Container';
import {Grid, Paper} from "@mui/material";
import {useDispatch} from "react-redux";
import {addTodoListAC} from "./state/todoListReducer";
import uuid from 'react-uuid';


function AppWithRedux() {
    const dispatch = useDispatch()
    const todoLists = useAppSelector(state => state.todoLists)
    return (
        <div className="App">
            <Container fixed>
                <AddItemForm placeholder={"Add todolist"} addItem={(title: string) => {
                    dispatch(addTodoListAC(title, uuid()))
                }}/>
                <Grid container spacing={6}>
                    {todoLists.map(tl => {
                        return <Grid item key={tl.id}>
                            <Paper elevation={6} style={{ padding: 15 }}>
                                <TodoList

                                    title={tl.title}
                                    id={tl.id}
                                    filter={tl.filter}
                                />
                            </Paper>
                        </Grid>
                    })}
                </Grid>
            </Container>
        </div>
    );
}

export default AppWithRedux;

