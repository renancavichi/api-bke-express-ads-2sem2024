const logger = (req, res, next) => {
    // const now = new Date()
    // const yyyy = now.getFullYear();
    // const mm = now.getMonth() + 1; // Months start at 0!
    // const dd = now.getDate()
    //console.log(`${dd+'/'+mm+'/'+yyyy} ${req.method} ${req.url}`)
    console.log(`${new Date(Date.now()).toLocaleString()} ${req.method} ${req.url}`)
    next()
}

export default logger