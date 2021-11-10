function getIsoCodes(url) {
        const paragraph = url;
        const regexCountry = /\/([a-z]{2})(-[A-Z]{2})\//g;
        const regexLanguage = /\/[a-z]{2}\//g;
        let foundC = paragraph.match(regexCountry);
        let foundL = paragraph.match(regexLanguage);
        if (foundC == null){
            if (foundL == null){
  	            foundL = ['/en/'];
                foundC = ['/en-US/'];
            }
            else {foundC = ['/en-US/'];}
            }
        return foundC[0];
    }
