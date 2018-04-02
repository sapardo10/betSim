var require = meteorInstall({"imports":{"api":{"Bets.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// imports/api/Bets.js                                                                     //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
module.export({
  Bets: () => Bets
});
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Mongo;
module.watch(require("meteor/mongo"), {
  Mongo(v) {
    Mongo = v;
  }

}, 1);
let check;
module.watch(require("meteor/check"), {
  check(v) {
    check = v;
  }

}, 2);
const Bets = new Mongo.Collection("Bets");

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('Bets', function userDataPublication() {
    return Bets.find();

    if (!this.userId) {
      return this.ready();
    }

    return Bets.find({
      userId: this.userId
    }, {
      fields: Bets.publicFields,
      sort: {
        eventId: 1
      }
    });
  });
}

Meteor.methods({
  "Bets.addBet"(eI, p1, p2, pT, b1, b2, bT, e1, e2, eT) {
    Bets.insert({
      userId: this.userId,
      eventId: eI,
      Prob1: p1,
      Prob2: p2,
      ProbT: pT,
      Team1: b1,
      Team2: b2,
      Tie: bT,
      E1: e1,
      E2: e2,
      ET: eT,
      State: "OPEN"
    });
  },

  "Bets.closeBet"(betId) {
    Bets.update({
      _id: betId
    }, {
      $set: {
        State: "CLOSED"
      }
    });
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////

},"Categories.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// imports/api/Categories.js                                                               //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
module.export({
  Categories: () => Categories
});
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Mongo;
module.watch(require("meteor/mongo"), {
  Mongo(v) {
    Mongo = v;
  }

}, 1);
let check;
module.watch(require("meteor/check"), {
  check(v) {
    check = v;
  }

}, 2);
const Categories = new Mongo.Collection("Categories");

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('Categories', function CategoriesPublication() {
    return Categories.find();
    /*
            if (!this.userId) {
                return this.ready();
              }
            
              return UserData.find({
                userId: this.userId
              }, {
                fields: UserData.publicFields
              });*/
  });
}

Meteor.methods({
  "Categories.getAll"() {
    let res = Categories.find({}).fetch();
    console.log(res);
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////

},"Events.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// imports/api/Events.js                                                                   //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
module.export({
  Events: () => Events
});
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Mongo;
module.watch(require("meteor/mongo"), {
  Mongo(v) {
    Mongo = v;
  }

}, 1);
let check;
module.watch(require("meteor/check"), {
  check(v) {
    check = v;
  }

}, 2);
const Events = new Mongo.Collection("Events");

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('Events', function EventsPublication() {
    return Events.find();
    /*
            if (!this.userId) {
                return this.ready();
              }
            
              return UserData.find({
                userId: this.userId
              }, {
                fields: UserData.publicFields
              });*/
  });
}

Meteor.methods({
  "Events.getAll"() {
    let res = Events.find({}).fetch();
    console.log(res);
  },

  "Events.addEvent"(category, name, place, date, image, team1, team2, prob1, prob2, tie) {
    let txtTest = "";
    txtTest += category + "\n";
    txtTest += name + "\n";
    txtTest += place + "\n";
    txtTest += date + "\n";
    txtTest += image + "\n";
    txtTest += team1 + "\n";
    txtTest += team2 + "\n";
    txtTest += prob1 + "\n";
    txtTest += prob2 + "\n";
    txtTest += tie + "\n";
    console.log(txtTest);
    let nEvent = {
      Category: category,
      Name: name,
      Place: place,
      Image: image,
      Team1: team1,
      Team2: team2,
      Date: date,
      Prob1: prob1,
      Prob2: prob2,
      Tie: tie,
      State: "NOT_STARTED",
      Team1R: 0,
      Team2R: 0,
      Events: []
    };
    Events.insert(nEvent);
  },

  "Events.startEvent"(eId) {
    console.log("Starting event");
    Events.update({
      _id: eId
    }, {
      $set: {
        State: "STARTED"
      }
    });
  },

  "Events.endEvent"(eId) {
    console.log("Ending event");
    Events.update({
      _id: eId
    }, {
      $set: {
        State: "FINISHED"
      }
    });
  },

  "Events.updateScore"(eId, sc1, sc2) {
    Events.update({
      _id: eId
    }, {
      $set: {
        Team1R: sc1,
        Team2R: sc2
      }
    });
  },

  "Events.addMatchEvent"(eId, fT, fM, fTi) {
    Events.update({
      _id: eId
    }, {
      $push: {
        Events: {
          text: fT,
          minute: fM,
          time: fTi
        }
      }
    });
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////

},"UserData.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// imports/api/UserData.js                                                                 //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
module.export({
  UserData: () => UserData
});
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Mongo;
module.watch(require("meteor/mongo"), {
  Mongo(v) {
    Mongo = v;
  }

}, 1);
let check;
module.watch(require("meteor/check"), {
  check(v) {
    check = v;
  }

}, 2);
const UserData = new Mongo.Collection("UserData");

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('UserData', function userDataPublication() {
    //return UserData.find();
    if (!this.userId) {
      return this.ready();
    }

    return UserData.find({
      userId: this.userId
    }, {
      fields: UserData.publicFields
    });
  });
}

Meteor.methods({
  "UserData.createUserData"() {
    UserData.insert({
      type: "USER",
      userId: this.userId,
      coins: 1000,
      InBet: 0
    });
  },

  "UserData.getAll"() {
    let all = UserData.find({}).fetch();
    console.log("All user data: ");
    console.log(all); //Lo Anterior funciona

    return all;
  },

  "UserData.getData"(userId) {
    check(userId, String);
    let res = UserData.find({
      userId: userId
    }).fetch();
    return res;
  },

  "UserData.updateCoins"(aUserId, e1) {
    UserData.update({
      userId: aUserId
    }, {
      $inc: {
        coins: e1
      }
    });
  },

  "UserData.removeBetCoins"(aUserId) {
    UserData.update({
      userId: aUserId
    }, {
      $set: {
        InBet: 0
      }
    });
  },

  "UserData.addCoins"(aUserId, numCoins) {
    UserData.update({
      userId: aUserId
    }, {
      $inc: {
        coins: numCoins
      }
    });
  },

  "UserData.removeNewBetCoins"(numCoins) {
    UserData.update({
      userId: this.userId
    }, {
      $inc: {
        coins: -numCoins,
        InBet: numCoins
      }
    });
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////

}}},"server":{"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// server/main.js                                                                          //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
module.watch(require("../imports/api/Bets"));
module.watch(require("../imports/api/Categories"));
module.watch(require("../imports/api/Events"));
module.watch(require("../imports/api/UserData"));
Meteor.startup(() => {// code to run on server at startup
});
/////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".jsx"
  ]
});
require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvQmV0cy5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvQ2F0ZWdvcmllcy5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvRXZlbnRzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9Vc2VyRGF0YS5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL21haW4uanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0IiwiQmV0cyIsIk1ldGVvciIsIndhdGNoIiwicmVxdWlyZSIsInYiLCJNb25nbyIsImNoZWNrIiwiQ29sbGVjdGlvbiIsImlzU2VydmVyIiwicHVibGlzaCIsInVzZXJEYXRhUHVibGljYXRpb24iLCJmaW5kIiwidXNlcklkIiwicmVhZHkiLCJmaWVsZHMiLCJwdWJsaWNGaWVsZHMiLCJzb3J0IiwiZXZlbnRJZCIsIm1ldGhvZHMiLCJlSSIsInAxIiwicDIiLCJwVCIsImIxIiwiYjIiLCJiVCIsImUxIiwiZTIiLCJlVCIsImluc2VydCIsIlByb2IxIiwiUHJvYjIiLCJQcm9iVCIsIlRlYW0xIiwiVGVhbTIiLCJUaWUiLCJFMSIsIkUyIiwiRVQiLCJTdGF0ZSIsImJldElkIiwidXBkYXRlIiwiX2lkIiwiJHNldCIsIkNhdGVnb3JpZXMiLCJDYXRlZ29yaWVzUHVibGljYXRpb24iLCJyZXMiLCJmZXRjaCIsImNvbnNvbGUiLCJsb2ciLCJFdmVudHMiLCJFdmVudHNQdWJsaWNhdGlvbiIsImNhdGVnb3J5IiwibmFtZSIsInBsYWNlIiwiZGF0ZSIsImltYWdlIiwidGVhbTEiLCJ0ZWFtMiIsInByb2IxIiwicHJvYjIiLCJ0aWUiLCJ0eHRUZXN0IiwibkV2ZW50IiwiQ2F0ZWdvcnkiLCJOYW1lIiwiUGxhY2UiLCJJbWFnZSIsIkRhdGUiLCJUZWFtMVIiLCJUZWFtMlIiLCJlSWQiLCJzYzEiLCJzYzIiLCJmVCIsImZNIiwiZlRpIiwiJHB1c2giLCJ0ZXh0IiwibWludXRlIiwidGltZSIsIlVzZXJEYXRhIiwidHlwZSIsImNvaW5zIiwiSW5CZXQiLCJhbGwiLCJTdHJpbmciLCJhVXNlcklkIiwiJGluYyIsIm51bUNvaW5zIiwic3RhcnR1cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBT0MsTUFBUCxDQUFjO0FBQUNDLFFBQUssTUFBSUE7QUFBVixDQUFkO0FBQStCLElBQUlDLE1BQUo7QUFBV0gsT0FBT0ksS0FBUCxDQUFhQyxRQUFRLGVBQVIsQ0FBYixFQUFzQztBQUFDRixTQUFPRyxDQUFQLEVBQVM7QUFBQ0gsYUFBT0csQ0FBUDtBQUFTOztBQUFwQixDQUF0QyxFQUE0RCxDQUE1RDtBQUErRCxJQUFJQyxLQUFKO0FBQVVQLE9BQU9JLEtBQVAsQ0FBYUMsUUFBUSxjQUFSLENBQWIsRUFBcUM7QUFBQ0UsUUFBTUQsQ0FBTixFQUFRO0FBQUNDLFlBQU1ELENBQU47QUFBUTs7QUFBbEIsQ0FBckMsRUFBeUQsQ0FBekQ7QUFBNEQsSUFBSUUsS0FBSjtBQUFVUixPQUFPSSxLQUFQLENBQWFDLFFBQVEsY0FBUixDQUFiLEVBQXFDO0FBQUNHLFFBQU1GLENBQU4sRUFBUTtBQUFDRSxZQUFNRixDQUFOO0FBQVE7O0FBQWxCLENBQXJDLEVBQXlELENBQXpEO0FBSWxMLE1BQU1KLE9BQU8sSUFBSUssTUFBTUUsVUFBVixDQUFxQixNQUFyQixDQUFiOztBQUVQLElBQUlOLE9BQU9PLFFBQVgsRUFBcUI7QUFDakI7QUFDQVAsU0FBT1EsT0FBUCxDQUFlLE1BQWYsRUFBdUIsU0FBU0MsbUJBQVQsR0FBK0I7QUFDbEQsV0FBT1YsS0FBS1csSUFBTCxFQUFQOztBQUVBLFFBQUksQ0FBQyxLQUFLQyxNQUFWLEVBQWtCO0FBQ2QsYUFBTyxLQUFLQyxLQUFMLEVBQVA7QUFDRDs7QUFFRCxXQUFPYixLQUFLVyxJQUFMLENBQVU7QUFDZkMsY0FBUSxLQUFLQTtBQURFLEtBQVYsRUFFSjtBQUNERSxjQUFRZCxLQUFLZSxZQURaO0FBRURDLFlBQU07QUFBQ0MsaUJBQVM7QUFB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Q00sUUFETjtBQUVGTCxlQUFPSztBQUZMO0FBRFYsS0FGSjtBQVNIOztBQTlEVSxDQUFmLEU7Ozs7Ozs7Ozs7O0FDdkJBLElBQUl4RixNQUFKO0FBQVdILE9BQU9JLEtBQVAsQ0FBYUMsUUFBUSxlQUFSLENBQWIsRUFBc0M7QUFBQ0YsU0FBT0csQ0FBUCxFQUFTO0FBQUNILGFBQU9HLENBQVA7QUFBUzs7QUFBcEIsQ0FBdEMsRUFBNEQsQ0FBNUQ7QUFBK0ROLE9BQU9JLEtBQVAsQ0FBYUMsUUFBUSxxQkFBUixDQUFiO0FBQTZDTCxPQUFPSSxLQUFQLENBQWFDLFFBQVEsMkJBQVIsQ0FBYjtBQUFtREwsT0FBT0ksS0FBUCxDQUFhQyxRQUFRLHVCQUFSLENBQWI7QUFBK0NMLE9BQU9JLEtBQVAsQ0FBYUMsUUFBUSx5QkFBUixDQUFiO0FBT3pORixPQUFPeUYsT0FBUCxDQUFlLE1BQU0sQ0FDbkI7QUFDRCxDQUZELEUiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1ldGVvciB9IGZyb20gXCJtZXRlb3IvbWV0ZW9yXCI7XHJcbmltcG9ydCB7IE1vbmdvIH0gZnJvbSBcIm1ldGVvci9tb25nb1wiO1xyXG5pbXBvcnQgeyBjaGVjayB9IGZyb20gXCJtZXRlb3IvY2hlY2tcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBCZXRzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oXCJCZXRzXCIpO1xyXG5cclxuaWYgKE1ldGVvci5pc1NlcnZlcikge1xyXG4gICAgLy8gVGhpcyBjb2RlIG9ubHkgcnVucyBvbiB0aGUgc2VydmVyXHJcbiAgICBNZXRlb3IucHVibGlzaCgnQmV0cycsIGZ1bmN0aW9uIHVzZXJEYXRhUHVibGljYXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIEJldHMuZmluZCgpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMudXNlcklkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlYWR5KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICByZXR1cm4gQmV0cy5maW5kKHtcclxuICAgICAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZFxyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBmaWVsZHM6IEJldHMucHVibGljRmllbGRzLFxyXG4gICAgICAgICAgICBzb3J0OiB7ZXZlbnRJZDogMX1cclxuICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbk1ldGVvci5tZXRob2RzKHtcclxuICAgIFwiQmV0cy5hZGRCZXRcIihlSSwgcDEsIHAyLCBwVCwgYjEsIGIyLCBiVCwgZTEsIGUyLCBlVCl7XHJcblxyXG4gICAgICAgIEJldHMuaW5zZXJ0KHtcclxuICAgICAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcclxuICAgICAgICAgICAgZXZlbnRJZDogZUksXHJcbiAgICAgICAgICAgIFByb2IxOiBwMSxcclxuICAgICAgICAgICAgUHJvYjI6IHAyLFxyXG4gICAgICAgICAgICBQcm9iVDogcFQsXHJcbiAgICAgICAgICAgIFRlYW0xOiBiMSxcclxuICAgICAgICAgICAgVGVhbTI6IGIyLFxyXG4gICAgICAgICAgICBUaWU6IGJULFxyXG4gICAgICAgICAgICBFMTogZTEsXHJcbiAgICAgICAgICAgIEUyOiBlMixcclxuICAgICAgICAgICAgRVQ6IGVULFxyXG4gICAgICAgICAgICBTdGF0ZTogXCJPUEVOXCJcclxuICAgICAgICB9KTsgICAgXHJcbiAgICB9LFxyXG4gICAgXCJCZXRzLmNsb3NlQmV0XCIoYmV0SWQpe1xyXG4gICAgICAgIEJldHMudXBkYXRlKFxyXG4gICAgICAgICAgICB7IF9pZDogYmV0SWQgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJHNldDogeyBTdGF0ZTogXCJDTE9TRURcIiB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSBcIm1ldGVvci9tZXRlb3JcIjtcclxuaW1wb3J0IHsgTW9uZ28gfSBmcm9tIFwibWV0ZW9yL21vbmdvXCI7XHJcbmltcG9ydCB7IGNoZWNrIH0gZnJvbSBcIm1ldGVvci9jaGVja1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhdGVnb3JpZXMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcIkNhdGVnb3JpZXNcIik7XHJcblxyXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XHJcbiAgICAvLyBUaGlzIGNvZGUgb25seSBydW5zIG9uIHRoZSBzZXJ2ZXJcclxuICAgIE1ldGVvci5wdWJsaXNoKCdDYXRlZ29yaWVzJywgZnVuY3Rpb24gQ2F0ZWdvcmllc1B1YmxpY2F0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBDYXRlZ29yaWVzLmZpbmQoKTtcclxuLypcclxuICAgICAgICBpZiAoIXRoaXMudXNlcklkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlYWR5KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICByZXR1cm4gVXNlckRhdGEuZmluZCh7XHJcbiAgICAgICAgICAgIHVzZXJJZDogdGhpcy51c2VySWRcclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgZmllbGRzOiBVc2VyRGF0YS5wdWJsaWNGaWVsZHNcclxuICAgICAgICAgIH0pOyovXHJcbiAgICB9KTtcclxufVxyXG5cclxuTWV0ZW9yLm1ldGhvZHMoe1xyXG4gIFwiQ2F0ZWdvcmllcy5nZXRBbGxcIigpe1xyXG4gICAgbGV0IHJlcyA9IENhdGVnb3JpZXMuZmluZCh7fSkuZmV0Y2goKTtcclxuICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgfVxyXG5cclxufSk7IiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSBcIm1ldGVvci9tZXRlb3JcIjtcclxuaW1wb3J0IHsgTW9uZ28gfSBmcm9tIFwibWV0ZW9yL21vbmdvXCI7XHJcbmltcG9ydCB7IGNoZWNrIH0gZnJvbSBcIm1ldGVvci9jaGVja1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEV2ZW50cyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwiRXZlbnRzXCIpO1xyXG5cclxuaWYgKE1ldGVvci5pc1NlcnZlcikge1xyXG4gICAgLy8gVGhpcyBjb2RlIG9ubHkgcnVucyBvbiB0aGUgc2VydmVyXHJcbiAgICBNZXRlb3IucHVibGlzaCgnRXZlbnRzJywgZnVuY3Rpb24gRXZlbnRzUHVibGljYXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIEV2ZW50cy5maW5kKCk7XHJcbiAgICAgICAgLypcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy51c2VySWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWFkeSgpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIFVzZXJEYXRhLmZpbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogdGhpcy51c2VySWRcclxuICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkczogVXNlckRhdGEucHVibGljRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgIH0pOyovXHJcbiAgICB9KTtcclxufVxyXG5cclxuTWV0ZW9yLm1ldGhvZHMoe1xyXG4gICAgXCJFdmVudHMuZ2V0QWxsXCIoKSB7XHJcbiAgICAgICAgbGV0IHJlcyA9IEV2ZW50cy5maW5kKHt9KS5mZXRjaCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICB9LFxyXG4gICAgXCJFdmVudHMuYWRkRXZlbnRcIihjYXRlZ29yeSwgbmFtZSwgcGxhY2UsIGRhdGUsIGltYWdlLCB0ZWFtMSwgdGVhbTIsIHByb2IxLCBwcm9iMiwgdGllKSB7XHJcbiAgICAgICAgbGV0IHR4dFRlc3QgPSBcIlwiO1xyXG5cclxuICAgICAgICB0eHRUZXN0ICs9IChjYXRlZ29yeSArIFwiXFxuXCIpO1xyXG4gICAgICAgIHR4dFRlc3QgKz0gKG5hbWUgKyBcIlxcblwiKTtcclxuICAgICAgICB0eHRUZXN0ICs9IChwbGFjZSArIFwiXFxuXCIpO1xyXG4gICAgICAgIHR4dFRlc3QgKz0gKGRhdGUgKyBcIlxcblwiKTtcclxuICAgICAgICB0eHRUZXN0ICs9IChpbWFnZSArIFwiXFxuXCIpO1xyXG4gICAgICAgIHR4dFRlc3QgKz0gKHRlYW0xICsgXCJcXG5cIik7XHJcbiAgICAgICAgdHh0VGVzdCArPSAodGVhbTIgKyBcIlxcblwiKTtcclxuICAgICAgICB0eHRUZXN0ICs9IChwcm9iMSArIFwiXFxuXCIpO1xyXG4gICAgICAgIHR4dFRlc3QgKz0gKHByb2IyICsgXCJcXG5cIik7XHJcbiAgICAgICAgdHh0VGVzdCArPSAodGllICsgXCJcXG5cIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHR4dFRlc3QpO1xyXG5cclxuICAgICAgICBsZXQgbkV2ZW50ID0ge1xyXG4gICAgICAgICAgICBDYXRlZ29yeTogY2F0ZWdvcnksXHJcbiAgICAgICAgICAgIE5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIFBsYWNlOiBwbGFjZSxcclxuICAgICAgICAgICAgSW1hZ2U6IGltYWdlLFxyXG4gICAgICAgICAgICBUZWFtMTogdGVhbTEsXHJcbiAgICAgICAgICAgIFRlYW0yOiB0ZWFtMixcclxuICAgICAgICAgICAgRGF0ZTogZGF0ZSxcclxuICAgICAgICAgICAgUHJvYjE6IHByb2IxLFxyXG4gICAgICAgICAgICBQcm9iMjogcHJvYjIsXHJcbiAgICAgICAgICAgIFRpZTogdGllLFxyXG4gICAgICAgICAgICBTdGF0ZTogXCJOT1RfU1RBUlRFRFwiLFxyXG4gICAgICAgICAgICBUZWFtMVI6IDAsXHJcbiAgICAgICAgICAgIFRlYW0yUjogMCxcclxuICAgICAgICAgICAgRXZlbnRzOiBbXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIEV2ZW50cy5pbnNlcnQobkV2ZW50KTtcclxuICAgIH0sXHJcbiAgICBcIkV2ZW50cy5zdGFydEV2ZW50XCIoZUlkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTdGFydGluZyBldmVudFwiKTtcclxuXHJcbiAgICAgICAgRXZlbnRzLnVwZGF0ZShcclxuICAgICAgICAgICAgeyBfaWQ6IGVJZCB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAkc2V0OiB7IFN0YXRlOiBcIlNUQVJURURcIiB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfSxcclxuICAgIFwiRXZlbnRzLmVuZEV2ZW50XCIoZUlkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFbmRpbmcgZXZlbnRcIik7XHJcblxyXG4gICAgICAgIEV2ZW50cy51cGRhdGUoXHJcbiAgICAgICAgICAgIHsgX2lkOiBlSWQgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJHNldDogeyBTdGF0ZTogXCJGSU5JU0hFRFwiIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgXCJFdmVudHMudXBkYXRlU2NvcmVcIihlSWQsIHNjMSwgc2MyKSB7XHJcbiAgICAgICAgRXZlbnRzLnVwZGF0ZShcclxuICAgICAgICAgICAgeyBfaWQ6IGVJZCB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAkc2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgVGVhbTFSOiBzYzEsXHJcbiAgICAgICAgICAgICAgICAgICAgVGVhbTJSOiBzYzJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgXCJFdmVudHMuYWRkTWF0Y2hFdmVudFwiKGVJZCwgZlQsIGZNLCBmVGkpIHtcclxuICAgICAgICBFdmVudHMudXBkYXRlKFxyXG4gICAgICAgICAgICB7IF9pZDogZUlkIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICRwdXNoOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGZULFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW51dGU6IGZNLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiBmVGlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgIH1cclxufSk7IiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSBcIm1ldGVvci9tZXRlb3JcIjtcclxuaW1wb3J0IHsgTW9uZ28gfSBmcm9tIFwibWV0ZW9yL21vbmdvXCI7XHJcbmltcG9ydCB7IGNoZWNrIH0gZnJvbSBcIm1ldGVvci9jaGVja1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJEYXRhID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oXCJVc2VyRGF0YVwiKTtcclxuXHJcbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcclxuICAgIC8vIFRoaXMgY29kZSBvbmx5IHJ1bnMgb24gdGhlIHNlcnZlclxyXG4gICAgTWV0ZW9yLnB1Ymxpc2goJ1VzZXJEYXRhJywgZnVuY3Rpb24gdXNlckRhdGFQdWJsaWNhdGlvbigpIHtcclxuICAgICAgICAvL3JldHVybiBVc2VyRGF0YS5maW5kKCk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy51c2VySWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVhZHkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBVc2VyRGF0YS5maW5kKHtcclxuICAgICAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkczogVXNlckRhdGEucHVibGljRmllbGRzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbk1ldGVvci5tZXRob2RzKHtcclxuICAgIFwiVXNlckRhdGEuY3JlYXRlVXNlckRhdGFcIigpIHtcclxuICAgICAgICBVc2VyRGF0YS5pbnNlcnQoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlVTRVJcIixcclxuICAgICAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcclxuICAgICAgICAgICAgY29pbnM6IDEwMDAsXHJcbiAgICAgICAgICAgIEluQmV0OiAwXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgXCJVc2VyRGF0YS5nZXRBbGxcIigpIHtcclxuICAgICAgICBsZXQgYWxsID0gVXNlckRhdGEuZmluZCh7fSkuZmV0Y2goKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkFsbCB1c2VyIGRhdGE6IFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhbGwpO1xyXG4gICAgICAgIC8vTG8gQW50ZXJpb3IgZnVuY2lvbmFcclxuICAgICAgICByZXR1cm4gYWxsO1xyXG4gICAgfSxcclxuICAgIFwiVXNlckRhdGEuZ2V0RGF0YVwiKHVzZXJJZCkge1xyXG4gICAgICAgIGNoZWNrKHVzZXJJZCwgU3RyaW5nKTtcclxuXHJcbiAgICAgICAgbGV0IHJlcyA9IFVzZXJEYXRhLmZpbmQoXHJcbiAgICAgICAgICAgIHsgdXNlcklkOiB1c2VySWQgfVxyXG4gICAgICAgICkuZmV0Y2goKTtcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfSxcclxuICAgIFwiVXNlckRhdGEudXBkYXRlQ29pbnNcIihhVXNlcklkLCBlMSkge1xyXG4gICAgICAgIFVzZXJEYXRhLnVwZGF0ZShcclxuICAgICAgICAgICAgeyB1c2VySWQ6IGFVc2VySWQgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJGluYzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvaW5zOiBlMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH0sXHJcbiAgICBcIlVzZXJEYXRhLnJlbW92ZUJldENvaW5zXCIoYVVzZXJJZCkge1xyXG4gICAgICAgIFVzZXJEYXRhLnVwZGF0ZShcclxuICAgICAgICAgICAgeyB1c2VySWQ6IGFVc2VySWQgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJHNldDogeyBJbkJldDogMCB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfSxcclxuICAgIFwiVXNlckRhdGEuYWRkQ29pbnNcIihhVXNlcklkLCBudW1Db2lucykgeyAgICAgICAgXHJcbiAgICAgICAgVXNlckRhdGEudXBkYXRlKFxyXG4gICAgICAgICAgICB7IHVzZXJJZDogYVVzZXJJZCB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAkaW5jOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29pbnM6IG51bUNvaW5zXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfSxcclxuICAgIFwiVXNlckRhdGEucmVtb3ZlTmV3QmV0Q29pbnNcIihudW1Db2lucykgeyAgICAgICAgXHJcbiAgICAgICAgVXNlckRhdGEudXBkYXRlKFxyXG4gICAgICAgICAgICB7IHVzZXJJZDogdGhpcy51c2VySWQgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJGluYzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvaW5zOiAtbnVtQ29pbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgSW5CZXQ6IG51bUNvaW5zXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcblxuaW1wb3J0IFwiLi4vaW1wb3J0cy9hcGkvQmV0c1wiO1xuaW1wb3J0IFwiLi4vaW1wb3J0cy9hcGkvQ2F0ZWdvcmllc1wiO1xuaW1wb3J0IFwiLi4vaW1wb3J0cy9hcGkvRXZlbnRzXCI7XG5pbXBvcnQgXCIuLi9pbXBvcnRzL2FwaS9Vc2VyRGF0YVwiO1xuXG5NZXRlb3Iuc3RhcnR1cCgoKSA9PiB7XG4gIC8vIGNvZGUgdG8gcnVuIG9uIHNlcnZlciBhdCBzdGFydHVwXG59KTtcbiJdfQ==
