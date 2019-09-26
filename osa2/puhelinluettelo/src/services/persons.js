import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}
const create = newObject => {
  return axios.post(baseUrl, newObject)
}
const del = (url) =>{
 return axios.delete(url)
}
const update = (url, updated) => {
return axios.put(url, updated)

}
export default { 
  getAll: getAll,
  create: create,
  del: del,
  update: update
}