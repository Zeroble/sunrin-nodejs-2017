const request = require('request');
const qs = require('querystring');
// request.post(
// { url : 'http://127.0.0.1:4321/api/user',
// form: {userId : 'blgada12', userPw: '12321232'},
// },
// (err, res, body) => {
//     console.log(err);
//     console.log(body);
// });
let url = "https://kr.api.riotgames.com";
let apiKey = "RGAPI-e07c6125-1c2e-407d-a853-7d8772e35335";
let apiAuth = {'X-Riot-Token': apiKey};
let accountId = 207625593;

request.get({
  url:  url + '/lol/summoner/v3/summoners/by-name/'+qs.escape('타릭장인 로리콘')+'?api_key='+apiKey,
}, (err, res, body) => {
  console.log(err, body);
})

request.get({
  url:  url + '/lol/match/v3/matchlists/by-account/'+accountId+'?api_key='+apiKey,
}, (err, res, body) => {
  console.log(err, body);
})
