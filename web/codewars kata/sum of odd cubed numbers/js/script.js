function tombfeltoltes(tomb) {
    let osszeg = 0;
    if (Array.isArray(tomb)== false) {
        return null;
    }
    for (let i = 0; i < array.length; i++) {
        if (isNaN(tomb(i))) {
            return null;
        }
        const hatvany = Math.pow(tomb(i), 3);
        if (hatvany % 2 != 0) {
            osszeg += hatvany;
        }
    }
    return osszeg;
}