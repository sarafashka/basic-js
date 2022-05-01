const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members)) {
      const membersStr = [];
      members.forEach(item => {
        if (typeof item === "string") {
          membersStr.push(item.trimStart().toUpperCase())
        }
      })
      const team = []
      membersStr.sort().forEach(item => {
        team.push(item[0])
      });
      return teamName = team.join('')
    } else return false
  }


module.exports = {
  createDreamTeam
};
