let pronouns = ['the', 'our'];
let adjs = ['great', 'big'];
let nouns = ['jogger', 'racoon'];
let domains =[ ".com", ".net", ".us",".io",".co",".on",".ger"];


console.log("Estos son los dominios encontrados");
for(let pronoun of pronouns){
    for(let adj of adjs){
        for(let noun of nouns){
            for(let dom of domains){
                if(noun.slice(-3)==dom.slice(-3)){
                    console.log(pronoun+adj+noun.slice(0,-3)+dom);
                }else if (noun.slice(-2)==dom.slice(-2)){
                    console.log(pronoun+adj+noun.slice(0,-2)+dom);
                }
                else {
                    console.log(pronoun+adj+noun+dom);
                }
            }
        }
    }
}