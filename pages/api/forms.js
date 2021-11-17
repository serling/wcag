import data from '../../data/form.js';

export default function handler(req, res) {
   res.status(200).json(data);
}
