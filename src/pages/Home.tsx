import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

interface Tasks {
  id: number,
  title: string,
  done: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTasks, setNewTasks] = useState('')

  function handleAddTask(newTaskTitle: string) {
    const data = {
      id: new Date().getTime(),
      done: false,
      title: newTasks
    }
    setNewTasks(oldState => [...oldState, data])

  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})