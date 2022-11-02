const alphabet = [{
    letter: "а",
    symbol: 4
},
{
    letter: "е",
    symbol: 3
},
{
    letter: "о",
    symbol: 0
},
{
    letter: "и",
    symbol: 1
},
{
    letter: "я",
    symbol: 9
}]

function recursive(node) {
    for (let i = 0; i < node.childNodes.length; i++) {
        const oneNode = node.childNodes[i];
        if (oneNode.nodeName === "#text") {
            const filteredTextByReg = oneNode.textContent.match(/[^\n\s] */gm)

            if (filteredTextByReg) {

                const popi = filteredTextByReg.map((letter, idx) => {
                    const alphabetItem = alphabet.find((item) => item.letter === letter.toLowerCase())
                    if (Math.floor(Math.random() * 2)) {
                        if (alphabetItem) {
                            letter = (alphabetItem.symbol).toString()

                        }


                        if (idx % 2 == 0) {
                            return letter.toUpperCase();
                        } else {
                            return letter.toLowerCase();
                        }
                    }
                    return letter
                });
                // oneNode.textContent = popi.join("")
                oneNode.textContent = generateStringConstructions(popi.join("").split(" ")).join(" ")
            }


        }
        recursive(oneNode)
    }

}

function generateStringConstructions(arrOfWords) {

    const stringConstr = ["!", "*", ".", "(", "{", "}"]
    const arrayWithSC = arrOfWords.map((word => {
        const amountSC = Math.floor(Math.random() * 4)
        let string = ""
        for (let i = 0; i < amountSC; i++) {
            const indexSC = Math.floor(Math.random() * 6)
            string += stringConstr[indexSC]
            // console.log('amountSC', amountSC);
            // console.log('indexSC', indexSC);
            // console.log('string', string);
        }
        // console.log('word', word);
        return word = string + word

    }))
    return arrayWithSC;


}

recursive(document.querySelector("body"))