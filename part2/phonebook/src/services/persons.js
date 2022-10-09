import axios from 'axios'

const url = '/api/persons'

export const getAllPerson = () => {
  return axios.get(url).then((res) => res.data)
}

export const addPerson = (newPerson) => {
  return axios.post(url, newPerson).then((res) => res.data)
}

export const deletePerson = (id) => {
  return axios.delete(`${url}/${id}`)
}

export const updatePerson = (id, update) => {
  return axios.put(`${url}/${id}`, update).then((res) => res.data)
}
