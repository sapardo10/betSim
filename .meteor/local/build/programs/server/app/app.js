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
    //return Bets.find();
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
  "UserData.addBet"(eI, p1, p2, pT, b1, b2, bT, eR) {
    Bets.insert({
      userId: this.userId,
      eventId: eI,
      Prob1: p1,
      Prob2: p2,
      ProbT: pT,
      Team1: b1,
      Team2: b2,
      Tie: bT,
      Earnings: eR
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
      Bets: []
    };
    Events.insert(nEvent);
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
      coins: 1000
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvQmV0cy5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvQ2F0ZWdvcmllcy5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvRXZlbnRzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9Vc2VyRGF0YS5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL21haW4uanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0IiwiQmV0cyIsIk1ldGVvciIsIndhdGNoIiwicmVxdWlyZSIsInYiLCJNb25nbyIsImNoZWNrIiwiQ29sbGVjdGlvbiIsImlzU2VydmVyIiwicHVibGlzaCIsInVzZXJEYXRhUHVibGljYXRpb24iLCJ1c2VySWQiLCJyZWFkeSIsImZpbmQiLCJmaWVsZHMiLCJwdWJsaWNGaWVsZHMiLCJzb3J0IiwiZXZlbnRJZCIsIm1ldGhvZHMiLCJlSSIsInAxIiwicDIiLCJwVCIsImIxIiwiYjIiLCJiVCIsImVSIiwiaW5zZXJ0IiwiUHJvYjEiLCJQcm9iMiIsIlByb2JUIiwiVGVhbTEiLCJUZWFtMiIsIlRpZSIsIkVhcm5pbmdzIiwiQ2F0ZWdvcmllcyIsIkNhdGVnb3JpZXNQdWJsaWNhdGlvbiIsInJlcyIsImZldGNoIiwiY29uc29sZSIsImxvZyIsIkV2ZW50cyIsIkV2ZW50c1B1YmxpY2F0aW9uIiwiY2F0ZWdvcnkiLCJuYW1lIiwicGxhY2UiLCJkYXRlIiwiaW1hZ2UiLCJ0ZWFtMSIsInRlYW0yIiwicHJvYjEiLCJwcm9iMiIsInRpZSIsInR4dFRlc3QiLCJuRXZlbnQiLCJDYXRlZ29yeSIsIk5hbWUiLCJQbGFjZSIsIkltYWdlIiwiRGF0ZSIsIlVzZXJEYXRhIiwidHlwZSIsImNvaW5zIiwiYWxsIiwiU3RyaW5nIiwic3RhcnR1cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBT0MsTUFBUCxDQUFjO0FBQUNDLFFBQUssTUFBSUE7QUFBVixDQUFk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LFFBQUkzQixNQUFNdUIsU0FBUy9DLElBQVQsQ0FDTjtBQUFFRixjQUFRQTtBQUFWLEtBRE0sRUFFUjJCLEtBRlEsRUFBVjtBQUdBLFdBQU9ELEdBQVA7QUFDSDs7QUF0QlUsQ0FBZixFOzs7Ozs7Ozs7OztBQ3ZCQSxJQUFJcEMsTUFBSjtBQUFXSCxPQUFPSSxLQUFQLENBQWFDLFFBQVEsZUFBUixDQUFiLEVBQXNDO0FBQUNGLFNBQU9HLENBQVAsRUFBUztBQUFDSCxhQUFPRyxDQUFQO0FBQVM7O0FBQXBCLENBQXRDLEVBQTRELENBQTVEO0FBQStETixPQUFPSSxLQUFQLENBQWFDLFFBQVEscUJBQVIsQ0FBYjtBQUE2Q0wsT0FBT0ksS0FBUCxDQUFhQyxRQUFRLDJCQUFSLENBQWI7QUFBbURMLE9BQU9JLEtBQVAsQ0FBYUMsUUFBUSx1QkFBUixDQUFiO0FBQStDTCxPQUFPSSxLQUFQLENBQWFDLFFBQVEseUJBQVIsQ0FBYjtBQU96TkYsT0FBT2dFLE9BQVAsQ0FBZSxNQUFNLENBQ25CO0FBQ0QsQ0FGRCxFIiwiZmlsZSI6Ii9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tIFwibWV0ZW9yL21ldGVvclwiO1xyXG5pbXBvcnQgeyBNb25nbyB9IGZyb20gXCJtZXRlb3IvbW9uZ29cIjtcclxuaW1wb3J0IHsgY2hlY2sgfSBmcm9tIFwibWV0ZW9yL2NoZWNrXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQmV0cyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwiQmV0c1wiKTtcclxuXHJcbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcclxuICAgIC8vIFRoaXMgY29kZSBvbmx5IHJ1bnMgb24gdGhlIHNlcnZlclxyXG4gICAgTWV0ZW9yLnB1Ymxpc2goJ0JldHMnLCBmdW5jdGlvbiB1c2VyRGF0YVB1YmxpY2F0aW9uKCkge1xyXG4gICAgICAgIC8vcmV0dXJuIEJldHMuZmluZCgpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMudXNlcklkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlYWR5KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICByZXR1cm4gQmV0cy5maW5kKHtcclxuICAgICAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZFxyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBmaWVsZHM6IEJldHMucHVibGljRmllbGRzLFxyXG4gICAgICAgICAgICBzb3J0OiB7ZXZlbnRJZDogMX1cclxuICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbk1ldGVvci5tZXRob2RzKHtcclxuICAgIFwiVXNlckRhdGEuYWRkQmV0XCIoZUksIHAxLCBwMiwgcFQsIGIxLCBiMiwgYlQsIGVSKXtcclxuXHJcbiAgICAgICAgQmV0cy5pbnNlcnQoe1xyXG4gICAgICAgICAgICB1c2VySWQ6IHRoaXMudXNlcklkLFxyXG4gICAgICAgICAgICBldmVudElkOiBlSSxcclxuICAgICAgICAgICAgUHJvYjE6IHAxLFxyXG4gICAgICAgICAgICBQcm9iMjogcDIsXHJcbiAgICAgICAgICAgIFByb2JUOiBwVCxcclxuICAgICAgICAgICAgVGVhbTE6IGIxLFxyXG4gICAgICAgICAgICBUZWFtMjogYjIsXHJcbiAgICAgICAgICAgIFRpZTogYlQsXHJcbiAgICAgICAgICAgIEVhcm5pbmdzOiBlUlxyXG5cclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgfSAgXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tIFwibWV0ZW9yL21ldGVvclwiO1xyXG5pbXBvcnQgeyBNb25nbyB9IGZyb20gXCJtZXRlb3IvbW9uZ29cIjtcclxuaW1wb3J0IHsgY2hlY2sgfSBmcm9tIFwibWV0ZW9yL2NoZWNrXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ2F0ZWdvcmllcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwiQ2F0ZWdvcmllc1wiKTtcclxuXHJcbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcclxuICAgIC8vIFRoaXMgY29kZSBvbmx5IHJ1bnMgb24gdGhlIHNlcnZlclxyXG4gICAgTWV0ZW9yLnB1Ymxpc2goJ0NhdGVnb3JpZXMnLCBmdW5jdGlvbiBDYXRlZ29yaWVzUHVibGljYXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIENhdGVnb3JpZXMuZmluZCgpO1xyXG4vKlxyXG4gICAgICAgIGlmICghdGhpcy51c2VySWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVhZHkoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgIHJldHVybiBVc2VyRGF0YS5maW5kKHtcclxuICAgICAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZFxyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBmaWVsZHM6IFVzZXJEYXRhLnB1YmxpY0ZpZWxkc1xyXG4gICAgICAgICAgfSk7Ki9cclxuICAgIH0pO1xyXG59XHJcblxyXG5NZXRlb3IubWV0aG9kcyh7XHJcbiAgXCJDYXRlZ29yaWVzLmdldEFsbFwiKCl7XHJcbiAgICBsZXQgcmVzID0gQ2F0ZWdvcmllcy5maW5kKHt9KS5mZXRjaCgpO1xyXG4gICAgY29uc29sZS5sb2cocmVzKTtcclxuICB9XHJcblxyXG59KTsiLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tIFwibWV0ZW9yL21ldGVvclwiO1xyXG5pbXBvcnQgeyBNb25nbyB9IGZyb20gXCJtZXRlb3IvbW9uZ29cIjtcclxuaW1wb3J0IHsgY2hlY2sgfSBmcm9tIFwibWV0ZW9yL2NoZWNrXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRXZlbnRzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oXCJFdmVudHNcIik7XHJcblxyXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XHJcbiAgICAvLyBUaGlzIGNvZGUgb25seSBydW5zIG9uIHRoZSBzZXJ2ZXJcclxuICAgIE1ldGVvci5wdWJsaXNoKCdFdmVudHMnLCBmdW5jdGlvbiBFdmVudHNQdWJsaWNhdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gRXZlbnRzLmZpbmQoKTtcclxuICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnVzZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlYWR5KCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gVXNlckRhdGEuZmluZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZFxyXG4gICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzOiBVc2VyRGF0YS5wdWJsaWNGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgfSk7Ki9cclxuICAgIH0pO1xyXG59XHJcblxyXG5NZXRlb3IubWV0aG9kcyh7XHJcbiAgICBcIkV2ZW50cy5nZXRBbGxcIigpIHtcclxuICAgICAgICBsZXQgcmVzID0gRXZlbnRzLmZpbmQoe30pLmZldGNoKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIH0sXHJcbiAgICBcIkV2ZW50cy5hZGRFdmVudFwiKGNhdGVnb3J5LCBuYW1lLCBwbGFjZSwgZGF0ZSwgaW1hZ2UsIHRlYW0xLCB0ZWFtMiwgcHJvYjEsIHByb2IyLCB0aWUpe1xyXG4gICAgICAgIGxldCB0eHRUZXN0ID0gXCJcIjtcclxuXHJcbiAgICAgICAgdHh0VGVzdCArPSAoY2F0ZWdvcnkgKyBcIlxcblwiKTtcclxuICAgICAgICB0eHRUZXN0ICs9IChuYW1lICsgXCJcXG5cIik7XHJcbiAgICAgICAgdHh0VGVzdCArPSAocGxhY2UgKyBcIlxcblwiKTtcclxuICAgICAgICB0eHRUZXN0ICs9IChkYXRlICsgXCJcXG5cIik7XHJcbiAgICAgICAgdHh0VGVzdCArPSAoaW1hZ2UgKyBcIlxcblwiKTtcclxuICAgICAgICB0eHRUZXN0ICs9ICh0ZWFtMSArIFwiXFxuXCIpO1xyXG4gICAgICAgIHR4dFRlc3QgKz0gKHRlYW0yICsgXCJcXG5cIik7XHJcbiAgICAgICAgdHh0VGVzdCArPSAocHJvYjEgKyBcIlxcblwiKTtcclxuICAgICAgICB0eHRUZXN0ICs9IChwcm9iMiArIFwiXFxuXCIpO1xyXG4gICAgICAgIHR4dFRlc3QgKz0gKHRpZSArIFwiXFxuXCIpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0eHRUZXN0KTtcclxuXHJcbiAgICAgICAgbGV0IG5FdmVudCA9IHtcclxuICAgICAgICAgICAgQ2F0ZWdvcnk6IGNhdGVnb3J5LFxyXG4gICAgICAgICAgICBOYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICBQbGFjZTogcGxhY2UsXHJcbiAgICAgICAgICAgIEltYWdlOiBpbWFnZSxcclxuICAgICAgICAgICAgVGVhbTE6IHRlYW0xLFxyXG4gICAgICAgICAgICBUZWFtMjogdGVhbTIsXHJcbiAgICAgICAgICAgIERhdGU6IGRhdGUsXHJcbiAgICAgICAgICAgIFByb2IxOiBwcm9iMSxcclxuICAgICAgICAgICAgUHJvYjI6IHByb2IyLFxyXG4gICAgICAgICAgICBUaWU6IHRpZSxcclxuICAgICAgICAgICAgQmV0czogW11cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBFdmVudHMuaW5zZXJ0KG5FdmVudCk7XHJcbiAgICB9XHJcbn0pOyIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gXCJtZXRlb3IvbWV0ZW9yXCI7XHJcbmltcG9ydCB7IE1vbmdvIH0gZnJvbSBcIm1ldGVvci9tb25nb1wiO1xyXG5pbXBvcnQgeyBjaGVjayB9IGZyb20gXCJtZXRlb3IvY2hlY2tcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyRGF0YSA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwiVXNlckRhdGFcIik7XHJcblxyXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XHJcbiAgICAvLyBUaGlzIGNvZGUgb25seSBydW5zIG9uIHRoZSBzZXJ2ZXJcclxuICAgIE1ldGVvci5wdWJsaXNoKCdVc2VyRGF0YScsIGZ1bmN0aW9uIHVzZXJEYXRhUHVibGljYXRpb24oKSB7XHJcbiAgICAgICAgLy9yZXR1cm4gVXNlckRhdGEuZmluZCgpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMudXNlcklkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlYWR5KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICByZXR1cm4gVXNlckRhdGEuZmluZCh7XHJcbiAgICAgICAgICAgIHVzZXJJZDogdGhpcy51c2VySWRcclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgZmllbGRzOiBVc2VyRGF0YS5wdWJsaWNGaWVsZHNcclxuICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbk1ldGVvci5tZXRob2RzKHtcclxuICAgIFwiVXNlckRhdGEuY3JlYXRlVXNlckRhdGFcIigpe1xyXG4gICAgICAgIFVzZXJEYXRhLmluc2VydCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiVVNFUlwiLFxyXG4gICAgICAgICAgICB1c2VySWQ6IHRoaXMudXNlcklkLFxyXG4gICAgICAgICAgICBjb2luczogMTAwMFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFwiVXNlckRhdGEuZ2V0QWxsXCIoKSB7XHJcbiAgICAgICAgbGV0IGFsbCA9IFVzZXJEYXRhLmZpbmQoe30pLmZldGNoKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBbGwgdXNlciBkYXRhOiBcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWxsKTtcclxuICAgICAgICAvL0xvIEFudGVyaW9yIGZ1bmNpb25hXHJcbiAgICAgICAgcmV0dXJuIGFsbDtcclxuICAgIH0sXHJcbiAgICBcIlVzZXJEYXRhLmdldERhdGFcIih1c2VySWQpIHtcclxuICAgICAgICBjaGVjayh1c2VySWQsIFN0cmluZyk7XHJcblxyXG4gICAgICAgIGxldCByZXMgPSBVc2VyRGF0YS5maW5kKFxyXG4gICAgICAgICAgICB7IHVzZXJJZDogdXNlcklkIH0gICAgICAgICAgIFxyXG4gICAgICAgICkuZmV0Y2goKTtcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfSAgICBcclxufSk7XHJcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuXG5pbXBvcnQgXCIuLi9pbXBvcnRzL2FwaS9CZXRzXCI7XG5pbXBvcnQgXCIuLi9pbXBvcnRzL2FwaS9DYXRlZ29yaWVzXCI7XG5pbXBvcnQgXCIuLi9pbXBvcnRzL2FwaS9FdmVudHNcIjtcbmltcG9ydCBcIi4uL2ltcG9ydHMvYXBpL1VzZXJEYXRhXCI7XG5cbk1ldGVvci5zdGFydHVwKCgpID0+IHtcbiAgLy8gY29kZSB0byBydW4gb24gc2VydmVyIGF0IHN0YXJ0dXBcbn0pO1xuIl19
