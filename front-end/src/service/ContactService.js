import axios from 'axios';

const http = axios.create({
  baseURL: '',
  headers: { "Content-type": "application/json" }
});

class ContactService {
  saveContact = async (contact) => {
    try {
      const res = await http.post('https://api.tungle.click/contacts', contact);
      return res;
    } catch (error) {
      return null;
    }
  }
}

const contactService = new ContactService();
export default contactService;