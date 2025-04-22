
function domainEnd(noun,dom){
    if (noun.slice(-3) == dom.slice(-3)) {
        return noun.slice(0, -3) + dom;
    }
    if (noun.slice(-2) == dom.slice(-2)) {
        return noun.slice(0, -2) + dom;
    }
    return noun + dom;
}

    let pronouns = ['the', 'our'];
    let adjs = ['great', 'big'];
    let nouns = ['jogger', 'racoon'];
    let domains = [".com", ".net", ".us", ".io", ".co", ".on", ".ger"];
    console.log("Estos son los dominios encontrados");
    for (let pronoun of pronouns) {
        for (let adj of adjs) {
            for (let noun of nouns) {
                for (let dom of domains) {
                    let domain = pronoun + adj + domainEnd(noun,dom);
                    console.log(domain);
                }
            }
        }
    }




