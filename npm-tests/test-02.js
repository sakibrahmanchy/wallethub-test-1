//@ts-check
/** 
 * run from root folder as : node ./npm-tests/test-02.js
 * 
 * Parse the response from the given REST end point and print out "hobbies" property in the following format: ITEM1, ITEM2, ...
 */
import https from "https";


https.get('https://coderbyte.com/api/challenges/json/rest-get-simple', (resp) => {
    if (resp.statusCode === 200) {
        resp.on('data', (data) => {
            const userInfo = JSON.parse(data.toString() || "{}");
            if (userInfo && userInfo.hobbies && userInfo.hobbies.length) {
                console.log(userInfo.hobbies.join(", "));
            }
        })   
    }
})