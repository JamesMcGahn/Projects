const profileHandler = (req, res, db) => {
    const { id } = req.params;
    db.select('*').from('users').where({ id }).then(user => {
        if (user.length) {
            res.json(user[0])
        } else {
            res.status(400).json('cant find user')
        }
    }).catch(err => (res.status(400).json('error finding user')))
}

module.exports = {
    profileHandler
}