const bcrypt = require('bcrypt');


// generate salts seperate
const hashPassword = async (pw) => {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(pw, salt);
    console.log(salt);
    console.log(hash);
}

//generate hash and salt
const hashPassword2 = async (pw) => {
    const hash = await bcrypt.hash(pw, 12);
    console.log(hash);
}

const login = async (pw, hashedPassword) => {
    const result = await bcrypt.compare(pw, hashedPassword);
    if (result) {
        console.log("Logged you in")
    } else {
        console.log("incorrect");
    }
}


// hashPassword('monkey');
login('monkey', '$2b$12$kniO/UmZwXTfVNjgwgbDe.Fiwzt3T0BIdoFPQ6ETEsiAFfR1Jhi06');

