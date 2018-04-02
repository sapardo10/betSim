import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Bets = new Mongo.Collection("Bets");

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
            sort: {eventId: 1}
          });
    });
}

Meteor.methods({
    "Bets.addBet"(eI, p1, p2, pT, b1, b2, bT, e1, e2, eT){

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
    "Bets.closeBet"(betId){
        Bets.update(
            { _id: betId },
            {
                $set: { State: "CLOSED" }
            }
        );
    }
});
