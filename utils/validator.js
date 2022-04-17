function validateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
        return (true)
    }
    return (false)
}
const regEx = /^\+?(88)?0?1[3456789][0-9]{8}\b/g
const validateNumber = number => regEx.test(number)
module.exports = { validateNumber, validateEmail };
