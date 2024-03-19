import React, { useState, useEffect } from 'react'

export default function Accueil() {
    const [tasks, setTasks] = useState([]); // j'initalise à un tableau vide
    const [inputValue, setInputValue] = useState(''); // représente ma variable de mon input

      // Fonction pour ajouter une tâche à la liste
  const addTask = () => {
    if (inputValue.trim() !== '') { // vérifie si la valeur n'est pas vide ou ne contient pas d'espace
      const newTasks = [...tasks, inputValue]; // créé un nouveau tableau de tâche 
      setTasks(newTasks);// met à jour l'état de 'Task' avec le nouveau tableau de tâches
      setInputValue(''); // réinitialise la valeur de l'input à une chaine vide
      localStorage.setItem('tasks', JSON.stringify(newTasks)); // Stocker les tâches dans le localStorage
    }
  };

  // Fonction pour supprimer une tâche de la liste
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks); // met a jour l'état 'tasks' avec le nouveau tableau de tâches sans la ta^che supprimé
    localStorage.setItem('tasks', JSON.stringify(newTasks)); // Mettre à jour le localStorage après suppression
  };

  useEffect(() => { // permet de charger les tâches depuis localStorage
    const storedTasks = JSON.parse(localStorage.getItem('tasks')); // récupère les tâches stockées dans localStorage
    if (storedTasks) { // vérifie si tâche présente dans localStorage
      setTasks(storedTasks);
    }
  }, []);

  return (
    <div className='containerGeneral'>
    <h1>Ma liste de tâches</h1>
    <div className='containerAccueil'>
        <div className='containerInput'>
            <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />
            <svg id='add' onClick={addTask} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><defs><mask id="ipTAddOne0"><g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><path fill="#555" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"/><path stroke-linecap="round" d="M24 16v16m-8-8h16"/></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTAddOne0)"/></svg>
        </div>
        
        <ul>
        {tasks.map((task, index) => (
            <li key={index}>
            {task}
            <svg id='delete' onClick={() => deleteTask(index)} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path stroke-linecap="round" d="M8 11h32M18 5h12"/><path fill="currentColor" d="M12 17h24v23a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3z"/></g></svg>
            </li>
        ))}
        </ul>
    </div>
    </div>
  )
}
