function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },

    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

function numPointsScored(playerName) {
  const game = gameObject();
  for (const teamKey in game) {
    const team = game[teamKey];
    const players = team.players;

    if (playerName in players) {
      return players[playerName].points;
    }
  }
}

function shoeSize(playerName) {
  const game = gameObject();
  for (const teamKey in game) {
    const team = game[teamKey];
    const players = team.players;

    if (playerName in players) {
      return players[playerName].shoe;
    }
  }
}

function teamColors(teamName) {
  const game = gameObject();
  for (const teamKey in game) {
    const team = game[teamKey];

    if (team.teamName === teamName) {
      return team.colors;
    }
  }
}
function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}
function playerNumbers(teamName) {
  const game = gameObject();
    const numbers = [];
    for (const teamKey in game) {   
      const team = game[teamKey];
      if (team.teamName === teamName) {
        const players = team.players;
        for (const playerName in players) {
          numbers.push(players[playerName].number);
        }
      }
    }
    return numbers;
}

function bigShoeRebounds() {
  const game = gameObject();
  let biggestShoe = 0;
  let rebounds = 0;

  for (const teamKey in game) {
    const team = game[teamKey];
    const players = team.players;

    for (const player in players) {
      const playerData = players[player];
      if (playerData.shoe > biggestShoe) {
        biggestShoe = playerData.shoe;
        rebounds = playerData.rebounds;
      }
    }
  }
  return rebounds;
}

function mostPointsScored() {
  const game = gameObject();
  let maxPoints = 0;
  let topScorer = "";

  for (const teamKey in game) {
    const team = game[teamKey];
    const players = team.players;

    for (const playerName in players) {
      const points = players[playerName].points;
      if (points > maxPoints) {
        maxPoints = points;
        topScorer = playerName;
      }
    }
  }
  return topScorer;
}
function winningTeam() {
  const game = gameObject();
  let homePoints = 0;
  let awayPoints = 0;

  for (const teamKey in game) {
    const team = game[teamKey];
    const players = team.players;

    for (const playerName in players) {
      if (teamKey === "home") {
        homePoints += players[playerName].points;
      } else {
        awayPoints += players[playerName].points;
      }
    }
  }

  return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}
function playerWithLongestName() {
  const game = gameObject();
    let longestName = "";
    for (const teamKey in game) {
        const team = game[teamKey];
        const players = team.players;
    
        for (const playerName in players) {
            if (playerName.length > longestName.length) {
            longestName = playerName;
            }
        }
        }
    return longestName;
}

function doesLongNameStealATon() {
  const game = gameObject();
  const longestName = playerWithLongestName();
  let mostSteals = 0;
  let topStealer = "";

  for (const teamKey in game) {
    const players = game[teamKey].players;

    for (const playerName in players) {
      const steals = players[playerName].steals;
      if (steals > mostSteals) {
        mostSteals = steals;
        topStealer = playerName;
      }
    }
  }

  return longestName === topStealer;
}

console.log("Most Points Scored:", mostPointsScored());
console.log("Winning Team:", winningTeam());
console.log("Player with Longest Name:", playerWithLongestName());
console.log("Does Long Name Steal A Ton?", doesLongNameStealATon());
console.log("Big Shoe Rebounds:", bigShoeRebounds());
console.log("Team Names:", teamNames());
console.log("Team Colors for Brooklyn Nets:", teamColors("Brooklyn Nets"));
console.log("Team Colors for Charlotte Hornets:", teamColors("Charlotte Hornets"));
console.log("Player Numbers for Brooklyn Nets:", playerNumbers("Brooklyn Nets"));
console.log("Player Numbers for Charlotte Hornets:", playerNumbers("Charlotte Hornets"));
console.log("Points Scored by Alan Anderson:", numPointsScored("Alan Anderson"));
console.log("Shoe Size of Reggie Evans:", shoeSize("Reggie Evans"));
console.log("Shoe Size of Jeff Adrien:", shoeSize("Jeff Adrien"));
console.log("Shoe Size of Ben Gordon:", shoeSize("Ben Gordon"));
