"use strict";
/**
 * input: - competitions,[homeTeam, awayTeam] an array of pairs representing the teams that have competed against each other
 *        - results, (1-home team; 0-away team), an array containing the results of each competition
 * return: the winner
 * 
 * guaranteen that exactly one team will win the tournament and that each team will compete against all othe
 * teams exactly once. the tournament will always have at least two teams
 * 
 * test case:
 * [['team1', 'team2], ['team2', 'team3'], ['team1', 'team3']], [1, 1, 1] => team1
 * [['team1', 'team2']] , [1]=> team1
 * 
 * pseudo code:
 * make a object: {team: score, ...}
 * loop through competitions array, and results array, add key-value to the object
 * set winner score to 0, and find the highest score 
 * return the highest score's team name
 */

function tournamentWinner(competitions, results) {
  let teamToScore = new Map();

  for (let i = 0; i < competitions.length; i++) {
    if (results[i]) {
      let score = teamToScore.get(competitions[i][0]) || 0;
      teamToScore.set(competitions[i][0], score + 3);
    } else {
      let score = teamToScore.get(competitions[i][1]) || 0;
      teamToScore.set(competitions[i][1], score + 3);
    }
  }

  let max = Math.max(...teamToScore.values());
  for (let key of teamToScore.keys()) {
    if (teamToScore.get(key) === max) {
      return key;
    }
  }
}

//runtime: O(n) | space: O(K), k is the team number, n is the length of competitions
function tournamentWinner2(competitions, results) {
  let currentBestTeam = "";
  let teamToScore = {[currentBestTeam]: 0,};

  for (let i = 0; i < competitions.length; i++) {
		let [homeTeam, awayTeam] = competitions[i];
		let result = results[i];
  	let winnerTeam = result === 1 ? homeTeam : awayTeam;
		
		updateScore(winnerTeam, 3, teamToScore);
		
		if (teamToScore[currentBestTeam] < teamToScore[winnerTeam]) {
			currentBestTeam = winnerTeam;
		  teamToScore[currentBestTeam] = teamToScore[winnerTeam];
		}
	}	
		return currentBestTeam;
}
function updateScore(team, points, teamToScore) {
	if (!(team in teamToScore)) teamToScore[team] = 0;
	
	teamToScore[team] += points;
}
