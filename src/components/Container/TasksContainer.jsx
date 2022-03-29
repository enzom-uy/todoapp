import React, { useContext, useEffect, useState } from 'react'
import Task from '../Task/Task'
import { List, Flex } from '@chakra-ui/react'
import { TasksContext } from '../../context/TasksContext'
import { db } from '../../firebase'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'

const ItemsContainer = () => {
    /*
     * I'm getting the user interaction from the context.
     * By default it's false, but when the user interacts with the app,
     * it changes to the opposite of what it was before.
     */
    const { userInteraction } = useContext(TasksContext)
    const [tasks, setTasks] = useState([])

    console.log(orderBy)

    // It is used to get the tasks from the database
    // It is also used to set the tasks in the state
    // It is also used to listen for changes in the database
    useEffect(() => {
        const collectionRef = query(collection(db, 'userTasks'), orderBy('timestamp')) // Get the collection of tasks from the database. Order by timestamp.
        const collectionSnap = getDocs(collectionRef) // Get the snapshot of the collection.
        collectionSnap.then((res) => {
            // Get the tasks from the snapshot.
            const resFormatted = res.docs.map((doc) => doc.data()) // Format the snapshot.
            setTasks(resFormatted) // Set the tasks in the state.
        }) // End of collectionSnap.then().
    }, [userInteraction]) // End of useEffect(). Everytime the userInteraction changes, the useEffect() will run.

    return (
        <List w={'100%'}>
            <Flex direction="column" align={'center'}>
                {tasks.map((task) => (
                    <Task name={task.name} key={task.id} id={task.id} date={task.date} dateLimit={task.limit} />
                ))}
            </Flex>
        </List>
    )
}
export default ItemsContainer
