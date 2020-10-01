/**
 * Returns request header data
 * 
 * @param {Request} req the request object
 * 
 * @returns {Object} Object containing ipaddress, language & software key value pairs
 */
const parseHeaders = (req) => {
    return {
        "ipaddress": req.ip,
        "language": req.header('accept-language'),
        "software": req.header('user-agent')
    }
}

module.exports = {parseHeaders}