var getName = function (name){
    let infoName = `Nombre: `+ name
    return console.log(infoName)
};

var getStar = function(star){
    let infoStar = `Personaje de tv favorito es: ` + star
    return console.log(infoStar)
};

module.exports = {getName,getStar};