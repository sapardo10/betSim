import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const UserData = new Mongo.Collection("UserData");

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
        console.log(all);
        //Lo Anterior funciona
        return all;
    },
    "UserData.getData"(userId) {
        check(userId, String);

        let res = UserData.find(
            { userId: userId }
        ).fetch();
        return res;
    },
    "UserData.updateCoins"(aUserId, e1) {
        UserData.update(
            { userId: aUserId },
            {
                $inc: {
                    coins: e1
                }
            }
        );
    },
    "UserData.removeBetCoins"(aUserId) {
        UserData.update(
            { userId: aUserId },
            {
                $set: { InBet: 0 }
            }
        );
    },
    "UserData.addCoins"(aUserId, numCoins) {        
        UserData.update(
            { userId: aUserId },
            {
                $inc: {
                    coins: numCoins
                }
            }
        );
    },
    "UserData.removeNewBetCoins"(numCoins) {        
        UserData.update(
            { userId: this.userId },
            {
                $inc: {
                    coins: -numCoins,
                    InBet: numCoins
                }
            }
        );
    }
    
});
