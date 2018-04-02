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
      Team2R: 0
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvQmV0cy5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvQ2F0ZWdvcmllcy5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvRXZlbnRzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9Vc2VyRGF0YS5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL21haW4uanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0IiwiQmV0cyIsIk1ldGVvciIsIndhdGNoIiwicmVxdWlyZSIsInYiLCJNb25nbyIsImNoZWNrIiwiQ29sbGVjdGlvbiIsImlzU2VydmVyIiwicHVibGlzaCIsInVzZXJEYXRhUHVibGljYXRpb24iLCJmaW5kIiwidXNlcklkIiwicmVhZHkiLCJmaWVsZHMiLCJwdWJsaWNGaWVsZHMiLCJzb3J0IiwiZXZlbnRJZCIsIm1ldGhvZHMiLCJlSSIsInAxIiwicDIiLCJwVCIsImIxIiwiYjIiLCJiVCIsImUxIiwiZTIiLCJlVCIsImluc2VydCIsIlByb2IxIiwiUHJvYjIiLCJQcm9iVCIsIlRlYW0xIiwiVGVhbTIiLCJUaWUiLCJFMSIsIkUyIiwiRVQiLCJTdGF0ZSIsImJldElkIiwidXBkYXRlIiwiX2lkIiwiJHNldCIsIkNhdGVnb3JpZXMiLCJDYXRlZ29yaWVzUHVibGljYXRpb24iLCJyZXMiLCJmZXRjaCIsImNvbnNvbGUiLCJsb2ciLCJFdmVudHMiLCJFdmVudHNQdWJsaWNhdGlvbiIsImNhdGVnb3J5IiwibmFtZSIsInBsYWNlIiwiZGF0ZSIsImltYWdlIiwidGVhbTEiLCJ0ZWFtMiIsInByb2IxIiwicHJvYjIiLCJ0aWUiLCJ0eHRUZXN0IiwibkV2ZW50IiwiQ2F0ZWdvcnkiLCJOYW1lIiwiUGxhY2UiLCJJbWFnZSIsIkRhdGUiLCJUZWFtMVIiLCJUZWFtMlIiLCJlSWQiLCJVc2VyRGF0YSIsInR5cGUiLCJjb2lucyIsIkluQmV0IiwiYWxsIiwiU3Ry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QUFNO0FBQ0ZMLGVBQU9oRDtBQURMO0FBRFYsS0FGSjtBQVFILEdBakNVOztBQWtDWCw0QkFBMEJvRCxPQUExQixFQUFtQztBQUMvQk4sYUFBUy9CLE1BQVQsQ0FDSTtBQUFFN0IsY0FBUWtFO0FBQVYsS0FESixFQUVJO0FBQ0luQyxZQUFNO0FBQUVnQyxlQUFPO0FBQVQ7QUFEVixLQUZKO0FBTUgsR0F6Q1U7O0FBMENYLHNCQUFvQkcsT0FBcEIsRUFBNkJFLFFBQTdCLEVBQXVDO0FBQ25DUixhQUFTL0IsTUFBVCxDQUNJO0FBQUU3QixjQUFRa0U7QUFBVixLQURKLEVBRUk7QUFDSUMsWUFBTTtBQUNGTCxlQUFPTTtBQURMO0FBRFYsS0FGSjtBQVFILEdBbkRVOztBQW9EWCwrQkFBNkJBLFFBQTdCLEVBQXVDO0FBQ25DUixhQUFTL0IsTUFBVCxDQUNJO0FBQUU3QixjQUFRLEtBQUtBO0FBQWYsS0FESixFQUVJO0FBQ0ltRSxZQUFNO0FBQ0ZMLGVBQU8sQ0FBQ00sUUFETjtBQUVGTCxlQUFPSztBQUZMO0FBRFYsS0FGSjtBQVNIOztBQTlEVSxDQUFmLEU7Ozs7Ozs7Ozs7O0FDdkJBLElBQUkvRSxNQUFKO0FBQVdILE9BQU9JLEtBQVAsQ0FBYUMsUUFBUSxlQUFSLENBQWIsRUFBc0M7QUFBQ0YsU0FBT0csQ0FBUCxFQUFTO0FBQUNILGFBQU9HLENBQVA7QUFBUzs7QUFBcEIsQ0FBdEMsRUFBNEQsQ0FBNUQ7QUFBK0ROLE9BQU9JLEtBQVAsQ0FBYUMsUUFBUSxxQkFBUixDQUFiO0FBQTZDTCxPQUFPSSxLQUFQLENBQWFDLFFBQVEsMkJBQVIsQ0FBYjtBQUFtREwsT0FBT0ksS0FBUCxDQUFhQyxRQUFRLHVCQUFSLENBQWI7QUFBK0NMLE9BQU9JLEtBQVAsQ0FBYUMsUUFBUSx5QkFBUixDQUFiO0FBT3pORixPQUFPZ0YsT0FBUCxDQUFlLE1BQU0sQ0FDbkI7QUFDRCxDQUZELEUiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1ldGVvciB9IGZyb20gXCJtZXRlb3IvbWV0ZW9yXCI7XHJcbmltcG9ydCB7IE1vbmdvIH0gZnJvbSBcIm1ldGVvci9tb25nb1wiO1xyXG5pbXBvcnQgeyBjaGVjayB9IGZyb20gXCJtZXRlb3IvY2hlY2tcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBCZXRzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oXCJCZXRzXCIpO1xyXG5cclxuaWYgKE1ldGVvci5pc1NlcnZlcikge1xyXG4gICAgLy8gVGhpcyBjb2RlIG9ubHkgcnVucyBvbiB0aGUgc2VydmVyXHJcbiAgICBNZXRlb3IucHVibGlzaCgnQmV0cycsIGZ1bmN0aW9uIHVzZXJEYXRhUHVibGljYXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIEJldHMuZmluZCgpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMudXNlcklkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlYWR5KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICByZXR1cm4gQmV0cy5maW5kKHtcclxuICAgICAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZFxyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBmaWVsZHM6IEJldHMucHVibGljRmllbGRzLFxyXG4gICAgICAgICAgICBzb3J0OiB7ZXZlbnRJZDogMX1cclxuICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbk1ldGVvci5tZXRob2RzKHtcclxuICAgIFwiQmV0cy5hZGRCZXRcIihlSSwgcDEsIHAyLCBwVCwgYjEsIGIyLCBiVCwgZTEsIGUyLCBlVCl7XHJcblxyXG4gICAgICAgIEJldHMuaW5zZXJ0KHtcclxuICAgICAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcclxuICAgICAgICAgICAgZXZlbnRJZDogZUksXHJcbiAgICAgICAgICAgIFByb2IxOiBwMSxcclxuICAgICAgICAgICAgUHJvYjI6IHAyLFxyXG4gICAgICAgICAgICBQcm9iVDogcFQsXHJcbiAgICAgICAgICAgIFRlYW0xOiBiMSxcclxuICAgICAgICAgICAgVGVhbTI6IGIyLFxyXG4gICAgICAgICAgICBUaWU6IGJULFxyXG4gICAgICAgICAgICBFMTogZTEsXHJcbiAgICAgICAgICAgIEUyOiBlMixcclxuICAgICAgICAgICAgRVQ6IGVULFxyXG4gICAgICAgICAgICBTdGF0ZTogXCJPUEVOXCJcclxuICAgICAgICB9KTsgICAgXHJcbiAgICB9LFxyXG4gICAgXCJCZXRzLmNsb3NlQmV0XCIoYmV0SWQpe1xyXG4gICAgICAgIEJldHMudXBkYXRlKFxyXG4gICAgICAgICAgICB7IF9pZDogYmV0SWQgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJHNldDogeyBTdGF0ZTogXCJDTE9TRURcIiB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSBcIm1ldGVvci9tZXRlb3JcIjtcclxuaW1wb3J0IHsgTW9uZ28gfSBmcm9tIFwibWV0ZW9yL21vbmdvXCI7XHJcbmltcG9ydCB7IGNoZWNrIH0gZnJvbSBcIm1ldGVvci9jaGVja1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhdGVnb3JpZXMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcIkNhdGVnb3JpZXNcIik7XHJcblxyXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XHJcbiAgICAvLyBUaGlzIGNvZGUgb25seSBydW5zIG9uIHRoZSBzZXJ2ZXJcclxuICAgIE1ldGVvci5wdWJsaXNoKCdDYXRlZ29yaWVzJywgZnVuY3Rpb24gQ2F0ZWdvcmllc1B1YmxpY2F0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBDYXRlZ29yaWVzLmZpbmQoKTtcclxuLypcclxuICAgICAgICBpZiAoIXRoaXMudXNlcklkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlYWR5KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICByZXR1cm4gVXNlckRhdGEuZmluZCh7XHJcbiAgICAgICAgICAgIHVzZXJJZDogdGhpcy51c2VySWRcclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgZmllbGRzOiBVc2VyRGF0YS5wdWJsaWNGaWVsZHNcclxuICAgICAgICAgIH0pOyovXHJcbiAgICB9KTtcclxufVxyXG5cclxuTWV0ZW9yLm1ldGhvZHMoe1xyXG4gIFwiQ2F0ZWdvcmllcy5nZXRBbGxcIigpe1xyXG4gICAgbGV0IHJlcyA9IENhdGVnb3JpZXMuZmluZCh7fSkuZmV0Y2goKTtcclxuICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgfVxyXG5cclxufSk7IiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSBcIm1ldGVvci9tZXRlb3JcIjtcclxuaW1wb3J0IHsgTW9uZ28gfSBmcm9tIFwibWV0ZW9yL21vbmdvXCI7XHJcbmltcG9ydCB7IGNoZWNrIH0gZnJvbSBcIm1ldGVvci9jaGVja1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEV2ZW50cyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwiRXZlbnRzXCIpO1xyXG5cclxuaWYgKE1ldGVvci5pc1NlcnZlcikge1xyXG4gICAgLy8gVGhpcyBjb2RlIG9ubHkgcnVucyBvbiB0aGUgc2VydmVyXHJcbiAgICBNZXRlb3IucHVibGlzaCgnRXZlbnRzJywgZnVuY3Rpb24gRXZlbnRzUHVibGljYXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIEV2ZW50cy5maW5kKCk7XHJcbiAgICAgICAgLypcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy51c2VySWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWFkeSgpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIFVzZXJEYXRhLmZpbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogdGhpcy51c2VySWRcclxuICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkczogVXNlckRhdGEucHVibGljRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgIH0pOyovXHJcbiAgICB9KTtcclxufVxyXG5cclxuTWV0ZW9yLm1ldGhvZHMoe1xyXG4gICAgXCJFdmVudHMuZ2V0QWxsXCIoKSB7XHJcbiAgICAgICAgbGV0IHJlcyA9IEV2ZW50cy5maW5kKHt9KS5mZXRjaCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICB9LFxyXG4gICAgXCJFdmVudHMuYWRkRXZlbnRcIihjYXRlZ29yeSwgbmFtZSwgcGxhY2UsIGRhdGUsIGltYWdlLCB0ZWFtMSwgdGVhbTIsIHByb2IxLCBwcm9iMiwgdGllKSB7XHJcbiAgICAgICAgbGV0IHR4dFRlc3QgPSBcIlwiO1xyXG5cclxuICAgICAgICB0eHRUZXN0ICs9IChjYXRlZ29yeSArIFwiXFxuXCIpO1xyXG4gICAgICAgIHR4dFRlc3QgKz0gKG5hbWUgKyBcIlxcblwiKTtcclxuICAgICAgICB0eHRUZXN0ICs9IChwbGFjZSArIFwiXFxuXCIpO1xyXG4gICAgICAgIHR4dFRlc3QgKz0gKGRhdGUgKyBcIlxcblwiKTtcclxuICAgICAgICB0eHRUZXN0ICs9IChpbWFnZSArIFwiXFxuXCIpO1xyXG4gICAgICAgIHR4dFRlc3QgKz0gKHRlYW0xICsgXCJcXG5cIik7XHJcbiAgICAgICAgdHh0VGVzdCArPSAodGVhbTIgKyBcIlxcblwiKTtcclxuICAgICAgICB0eHRUZXN0ICs9IChwcm9iMSArIFwiXFxuXCIpO1xyXG4gICAgICAgIHR4dFRlc3QgKz0gKHByb2IyICsgXCJcXG5cIik7XHJcbiAgICAgICAgdHh0VGVzdCArPSAodGllICsgXCJcXG5cIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHR4dFRlc3QpO1xyXG5cclxuICAgICAgICBsZXQgbkV2ZW50ID0ge1xyXG4gICAgICAgICAgICBDYXRlZ29yeTogY2F0ZWdvcnksXHJcbiAgICAgICAgICAgIE5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIFBsYWNlOiBwbGFjZSxcclxuICAgICAgICAgICAgSW1hZ2U6IGltYWdlLFxyXG4gICAgICAgICAgICBUZWFtMTogdGVhbTEsXHJcbiAgICAgICAgICAgIFRlYW0yOiB0ZWFtMixcclxuICAgICAgICAgICAgRGF0ZTogZGF0ZSxcclxuICAgICAgICAgICAgUHJvYjE6IHByb2IxLFxyXG4gICAgICAgICAgICBQcm9iMjogcHJvYjIsXHJcbiAgICAgICAgICAgIFRpZTogdGllLFxyXG4gICAgICAgICAgICBTdGF0ZTogXCJOT1RfU1RBUlRFRFwiLFxyXG4gICAgICAgICAgICBUZWFtMVI6IDAsXHJcbiAgICAgICAgICAgIFRlYW0yUjogMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIEV2ZW50cy5pbnNlcnQobkV2ZW50KTtcclxuICAgIH0sXHJcbiAgICBcIkV2ZW50cy5zdGFydEV2ZW50XCIoZUlkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTdGFydGluZyBldmVudFwiKTtcclxuXHJcbiAgICAgICAgRXZlbnRzLnVwZGF0ZShcclxuICAgICAgICAgICAgeyBfaWQ6IGVJZCB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAkc2V0OiB7IFN0YXRlOiBcIlNUQVJURURcIiB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfSxcclxuICAgIFwiRXZlbnRzLmVuZEV2ZW50XCIoZUlkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFbmRpbmcgZXZlbnRcIik7XHJcblxyXG4gICAgICAgIEV2ZW50cy51cGRhdGUoXHJcbiAgICAgICAgICAgIHsgX2lkOiBlSWQgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJHNldDogeyBTdGF0ZTogXCJGSU5JU0hFRFwiIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pOyIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gXCJtZXRlb3IvbWV0ZW9yXCI7XHJcbmltcG9ydCB7IE1vbmdvIH0gZnJvbSBcIm1ldGVvci9tb25nb1wiO1xyXG5pbXBvcnQgeyBjaGVjayB9IGZyb20gXCJtZXRlb3IvY2hlY2tcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyRGF0YSA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwiVXNlckRhdGFcIik7XHJcblxyXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XHJcbiAgICAvLyBUaGlzIGNvZGUgb25seSBydW5zIG9uIHRoZSBzZXJ2ZXJcclxuICAgIE1ldGVvci5wdWJsaXNoKCdVc2VyRGF0YScsIGZ1bmN0aW9uIHVzZXJEYXRhUHVibGljYXRpb24oKSB7XHJcbiAgICAgICAgLy9yZXR1cm4gVXNlckRhdGEuZmluZCgpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMudXNlcklkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlYWR5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gVXNlckRhdGEuZmluZCh7XHJcbiAgICAgICAgICAgIHVzZXJJZDogdGhpcy51c2VySWRcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZHM6IFVzZXJEYXRhLnB1YmxpY0ZpZWxkc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5NZXRlb3IubWV0aG9kcyh7XHJcbiAgICBcIlVzZXJEYXRhLmNyZWF0ZVVzZXJEYXRhXCIoKSB7XHJcbiAgICAgICAgVXNlckRhdGEuaW5zZXJ0KHtcclxuICAgICAgICAgICAgdHlwZTogXCJVU0VSXCIsXHJcbiAgICAgICAgICAgIHVzZXJJZDogdGhpcy51c2VySWQsXHJcbiAgICAgICAgICAgIGNvaW5zOiAxMDAwLFxyXG4gICAgICAgICAgICBJbkJldDogMFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFwiVXNlckRhdGEuZ2V0QWxsXCIoKSB7XHJcbiAgICAgICAgbGV0IGFsbCA9IFVzZXJEYXRhLmZpbmQoe30pLmZldGNoKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBbGwgdXNlciBkYXRhOiBcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWxsKTtcclxuICAgICAgICAvL0xvIEFudGVyaW9yIGZ1bmNpb25hXHJcbiAgICAgICAgcmV0dXJuIGFsbDtcclxuICAgIH0sXHJcbiAgICBcIlVzZXJEYXRhLmdldERhdGFcIih1c2VySWQpIHtcclxuICAgICAgICBjaGVjayh1c2VySWQsIFN0cmluZyk7XHJcblxyXG4gICAgICAgIGxldCByZXMgPSBVc2VyRGF0YS5maW5kKFxyXG4gICAgICAgICAgICB7IHVzZXJJZDogdXNlcklkIH1cclxuICAgICAgICApLmZldGNoKCk7XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH0sXHJcbiAgICBcIlVzZXJEYXRhLnVwZGF0ZUNvaW5zXCIoYVVzZXJJZCwgZTEpIHtcclxuICAgICAgICBVc2VyRGF0YS51cGRhdGUoXHJcbiAgICAgICAgICAgIHsgdXNlcklkOiBhVXNlcklkIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICRpbmM6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2luczogZTFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgXCJVc2VyRGF0YS5yZW1vdmVCZXRDb2luc1wiKGFVc2VySWQpIHtcclxuICAgICAgICBVc2VyRGF0YS51cGRhdGUoXHJcbiAgICAgICAgICAgIHsgdXNlcklkOiBhVXNlcklkIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICRzZXQ6IHsgSW5CZXQ6IDAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH0sXHJcbiAgICBcIlVzZXJEYXRhLmFkZENvaW5zXCIoYVVzZXJJZCwgbnVtQ29pbnMpIHsgICAgICAgIFxyXG4gICAgICAgIFVzZXJEYXRhLnVwZGF0ZShcclxuICAgICAgICAgICAgeyB1c2VySWQ6IGFVc2VySWQgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJGluYzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvaW5zOiBudW1Db2luc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH0sXHJcbiAgICBcIlVzZXJEYXRhLnJlbW92ZU5ld0JldENvaW5zXCIobnVtQ29pbnMpIHsgICAgICAgIFxyXG4gICAgICAgIFVzZXJEYXRhLnVwZGF0ZShcclxuICAgICAgICAgICAgeyB1c2VySWQ6IHRoaXMudXNlcklkIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICRpbmM6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2luczogLW51bUNvaW5zLFxyXG4gICAgICAgICAgICAgICAgICAgIEluQmV0OiBudW1Db2luc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIFxyXG59KTtcclxuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5cbmltcG9ydCBcIi4uL2ltcG9ydHMvYXBpL0JldHNcIjtcbmltcG9ydCBcIi4uL2ltcG9ydHMvYXBpL0NhdGVnb3JpZXNcIjtcbmltcG9ydCBcIi4uL2ltcG9ydHMvYXBpL0V2ZW50c1wiO1xuaW1wb3J0IFwiLi4vaW1wb3J0cy9hcGkvVXNlckRhdGFcIjtcblxuTWV0ZW9yLnN0YXJ0dXAoKCkgPT4ge1xuICAvLyBjb2RlIHRvIHJ1biBvbiBzZXJ2ZXIgYXQgc3RhcnR1cFxufSk7XG4iXX0=
