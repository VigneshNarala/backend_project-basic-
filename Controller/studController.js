import data from '../MOCK_DATA.js';

const getstud = (req, res) => {
    let studata = data;
    res.status(200).json(studata);
};
const addstud = (req, res) => {
    console.log(data);
    res.status(200).json({data});
};
export {getstud,addstud};