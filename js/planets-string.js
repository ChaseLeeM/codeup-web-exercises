(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

planetsArray = planetsString.split('|')
    console.log(planetsArray);


let planetsStringBr = planetsArray.join("<br>");
    console.log(planetsStringBr);
document.write(planetsStringBr);
    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?



     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    planetsArray.push("</ul>");
    planetsArray.unshift("<ul>");
    let planetsStringUL = planetsArray.join('<li>');
    console.log(planetsStringUL);
document.write(planetsStringUL);

const planetList = `<ul><li>${planetsArray.join('</li><li>')}</li></ul>`;
    document.write(planetList);
})();
