const registerHandler = (req, res, db, bcrypt) => {
    const { email, name, password } = req.body;
    const saltRounds = 10;
    if (!email || !name || !password) return res.status(400).json('unable to register')
    bcrypt.hash(password, saltRounds, function (err, hash) {
        db.transaction(trx => {
            trx.insert({
                hash: hash,
                email: email
            })
                .into('login')
                .returning('email')
                .then(loginEmail => {
                    return trx('users')
                        .returning('*')
                        .insert({
                            email: loginEmail[0],
                            name: name,
                            joined: new Date()
                        })
                        .then(user => {
                            res.json(user[0]);
                        })
                })
                .then(trx.commit)
                .catch(trx.rollback)
        }).catch(err => res.status(400).json('unable to register'))
    })
}


module.exports = {
    registerHandler,
}