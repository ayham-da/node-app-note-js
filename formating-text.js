
function text(a) {
    var q = a.trim().replace(/\s\s+/g, ' ')
    q = q.toLowerCase()
        .split(" ")
        .map((q) => q.charAt(0).toUpperCase() + q.substring(1))
        .join(" ")
    console.log(q)
}

module.exports = text;