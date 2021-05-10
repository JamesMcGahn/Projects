
module.exports.getDate = function () {
    const today = new Date();
    return day = today.toLocaleDateString('en-US',
        {
            weekday: "long",
            day: "numeric",
            month: "long"
        })

}

