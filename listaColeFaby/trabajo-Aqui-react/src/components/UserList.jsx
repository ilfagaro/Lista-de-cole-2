//PINTAR UNA LISTA DE USUARIOS EN LA WEB

//Yo como usuario quiero generar una lista de participantes en un evento
//Yo como usuario quiero un campo donde escribir un nombre
//Yo como ususario quiero un botón que añada el el nombre a una lista
//Yo como usuario quiero ver una lista numerada con los participantes que voy añadiendo

// Manejo de eventos: onchange, onclick
// Hooks: useState, useEffect(por razones un poco confusas, en una primera instancia no era necesario)
// Métodos: .map()


//para usar los hooks hay que importarlos
import React, { useState } from 'react';

const UserList = () => {
  const [eventName, setEventName] = useState('');
  const [userName, setUserName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userList, setUserList] = useState([]);

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setUserLastName(e.target.value);
  };

  const handleAddUserToList = () => {
    if (userName.trim() !== '' && userLastName.trim() !== '') {
      setUserList((prevUserList) => [
        ...prevUserList,
        `${userName} ${userLastName}`,
      ]);

      setUserName('');
      setUserLastName('');
    }
  };

  const handleSaveList = () => {
    // Lógica para guardar la lista con el nombre del evento
    console.log('Lista guardada:', { eventName, userList });
  };

  return (
    <>
      <h1>Qué lista eres</h1>

      <label>
        Nombre del Evento:
        <input
          type="text"
          name="eventName"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
      </label>

      <label>
        Nombre:
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={handleNameChange}
        />
      </label>

      <label>
        Apellido:
        <input
          type="text"
          name="userLastName"
          value={userLastName}
          onChange={handleLastNameChange}
        />
      </label>

      <button onClick={handleAddUserToList}>Añadir usuario</button>
      <button onClick={handleSaveList}>Guardar Lista</button>

      <ul>
        {userList.map((user, index) => (
          <li key={index}> {user} </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;

//Segunda parte 

//Yo como usuario quiero generar una lista de participantes en un evento
//Yo como usuario quiero dos campos de formulario donde añadir los datos "Nombre" y "Apellido" 
//Yo como usuario quiero un botón que añada los datos del formulario a una lista
//Yo como usuario quiero ver la lista de participantes numerada


// Tercera parte

//Yo como usuario quiero generar una lista de participantes en un evento
//Yo como usuario quiero campos de formulario donde añadir los datos del participante
//Yo como usuario quiero un campo de formulario para añadir el dato "Nombre del evento"
//Yo como usuario quiero un botón que añada los datos del formulario a una lista
//Yo como usuario quiero ver la lista de participantes numerada y el título de la lista
//Yo como usuario quiero un botón que guarde la lista de participantes con el nombre del evento (genera un elemento lógico,
// no visual, es un objeto que no vemos en la web sino en consola o debugueando con breakpoints)

