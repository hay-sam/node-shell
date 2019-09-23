function pwdCmd () {
    process.stdout.write("Working directory: " + process.env.PWD);


}

module.exports = pwdCmd;
