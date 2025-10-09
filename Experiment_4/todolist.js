 import React, { useState } from 'react';
 import SQLite from 'react-native-sqlite-storage';

import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  FlatList 
} from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  const addTask = () => {
    if (task.trim().length === 0) return;
    const newTask = { id: Date.now().toString(), text: task, completed: false };
    setTaskItems([...taskItems, newTask]);
    setTask(''); // Clear input
  };

  const deleteTask = (id) => {
    setTaskItems(taskItems.filter(item => item.id !== id));
  };

  const toggleTaskCompleted = (id) => {
    setTaskItems(
      taskItems.map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const renderTask = ({ item }) => (
    <View style={styles.taskContainer}>
      <TouchableOpacity 
        style={styles.checkbox} 
        onPress={() => toggleTaskCompleted(item.id)}
      >
        {item.completed && <Text style={styles.checkmark}>✓</Text>}
      </TouchableOpacity>
      <Text style={[styles.taskText, item.completed && styles.completedTask]}>
        {item.text}
      </Text>
      <TouchableOpacity onPress={() => deleteTask(item.id)}>
        <Text style={styles.deleteButton}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a task"
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={taskItems}
        keyExtractor={item => item.id}
        renderItem={renderTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: '#2196F3',
    paddingHorizontal: 15,
    borderRadius: 8,
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  checkmark: {
    fontSize: 18,
    color: 'green',
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  deleteButton: {
    fontSize: 18,
    marginLeft: 10,
  },
});
