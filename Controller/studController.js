import data from '../MOCK_DATA.json' assert { type: 'json' };

const getstud = (req, res) => {
    let studata = data;
    res.status(200).json(studata);
};
const addstud = (req, res) => {
    
};
export { getstud };