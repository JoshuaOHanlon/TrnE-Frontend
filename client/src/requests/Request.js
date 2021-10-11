import axios from 'axios';

const api = 'http://18.117.136.113';

//  Users
const getUsers = (callback) => {
  axios.get(`${api}/db/users`)
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      console.log(err);
    })
};

const getUserByUsername = (username, callback) => {
  axios.get(`${api}/db/users?username=${username}`)
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      console.log(err);
    })
};

const getUserByFirstname = (firstName, callback) => {
  axios.get(`${api}/db/users?firstName=${firstName}`)
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      console.log(err);
    })
};

const getUserByLastname = (lastName, callback) => {
  axios.get(`${api}/db/users?lastName=${lastName}`)
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      console.log(err);
    })
};

const getUserByIgn = (ign, callback) => {
  axios.get(`${api}/db/users?ign=${ign}`)
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      console.log(err);
    })
};

const postUser = (user, callback) => {
  axios.post(`${api}/db/users`, user)
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      console.log(err);
    })
};

const updateUser = (username, user, callback) => {
  axios.put(`${api}/db/users?username=${username}`, user)
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      console.log(err);
    })
};

const deleteUser = (id, callback) => {
  axios.delete(`${api}/db/user?id=${id}`)
  .then((res) => {
    callback(res);
  })
  .catch((err) => {
    console.log(err);
  })
};

//  Tournaments
const getTournaments = (callback) => {
  axios.get(`${api}/db/tournament`)
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      console.log(err);
    })
};

const getTournamentById = (id, callback) => {
  axios.get(`${api}/db/tournament?id=${id}`)
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      console.log(err);
    })
};

const getTournamentByName = (name, callback) => {
  axios.get(`${api}/db/tournament?name=${name}`)
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      console.log(err);
    })
};

const getTournamentByGame = (game, callback) => {
  axios.get(`${api}/db/tournament?game=${game}`)
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      console.log(err);
    })
};

const getTournamentByDate = (date, callback) => {
  axios.get(`${api}/db/tournament?date=${date}`)
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      console.log(err);
    })
};

const getTournamentByUserUsername = (user, callback) => {
  axios.get(`${api}/db/tournament?user=${user}`)
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      console.log(err);
    })
};

const postTournament = (tournament, callback) => {
  axios.post(`${api}/db/tournament`, tournament)
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      console.log(err);
    })
};

const updateTournament = (id, tournament, callback) => {
  axios.put(`${api}/db/tournament?id=${id}`, tournament)
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      console.log(err);
    })
};

const deleteTournament = (id, callback) => {
  axios.delete(`${api}/db/tournament?id=${id}`)
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      console.log(err);
    })
};

export {
  getUsers,
  getUserByUsername,
  getUserByFirstname,
  getUserByLastname,
  getUserByIgn,
  postUser,
  updateUser,
  deleteUser,
  getTournaments,
  getTournamentById,
  getTournamentByName,
  getTournamentByGame,
  getTournamentByDate,
  getTournamentByUserUsername,
  postTournament,
  updateTournament,
  deleteTournament
};
