const pdf2base64 = require('pdf-to-base64');


const getFile = ({ path }) => {
	return pdf2base64(path).then(response => response)
};

module.exports = getFile
