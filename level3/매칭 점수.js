function solution(word, pages) {
    const getPageURL = (pageArr) => {
        const urlRegex = new RegExp(/"https:\S*"/, "gi");
        const urlIdx = pageArr.findIndex(e => e.includes("meta property"))
        return pageArr[urlIdx].match(urlRegex)[0];
    }
    const getBody = (pageArr) => {
        const bodyStart = pageArr.findIndex(el => el.includes("<body>"));
        const bodyEnd = pageArr.findIndex(el => el.includes("</body>"));
        return pageArr.slice(bodyStart + 1, bodyEnd).map(e => e.toLowerCase());
    }
    const getBasicPoint = (body, word) => {
        return body.flatMap(e => e
            .replace(/[\d|\W]/g, " ")
            .replace(/ +/g, " ")
            .trim().split(" ")
            .filter(e => e === word)
        ).length;
    }
    const getOutLink = (body) => {
        const REGEX_URL = new RegExp(/<a href="https:\S*"/, "gi");
        return body.flatMap(e => e.match(REGEX_URL)).filter(e => e).map(e => e.substring(8))

    }

    const Lword = word.toLowerCase();
    const infos = {}
    const answer = [];
    let index = 0;

    for (const page of pages) {
        const pageArr = page.split("\n");
        const pageURL = getPageURL(pageArr);
        const body = getBody(pageArr)
        const basicPoint = getBasicPoint(body, Lword);
        const outLink = getOutLink(body, pageURL);
        const linkPoint = basicPoint / outLink.length;

        infos[pageURL] = { index: index++, basicPoint, outLink, linkPoint, matchPoint: basicPoint };
    }

    for (const value of Object.values(infos)) {
        value["outLink"].forEach(e => infos[e] ? infos[e]["matchPoint"] += value["linkPoint"] : null);
    }
    for (const value of Object.values(infos)) {
        answer.push([value["index"], value["matchPoint"]]);
    }
    answer.sort((a, b) => b[1] - a[1] || a[0] - b[0]);
    return answer[0][0];
}



solution("Muzi", ["<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta property=\"og:url\" content=\"https://careers.kakao.com/interview/list\"/>\n</head>  \n<body>\n<a href=\"https://programmers.co.kr/learn/courses/4673\"></a>#!MuziMuzi!)jayg07con&&\n\n</body>\n</html>", "<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta property=\"og:url\" content=\"https://www.kakaocorp.com\"/>\n</head>  \n<body>\ncon%\tmuzI92apeach&2<a href=\"https://hashcode.co.kr/tos\"></a>\n\n\t^\n</body>\n</html>"])