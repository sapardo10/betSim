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
    "UserData.createUserData"(){
        UserData.insert({
            type: "USER",
            userId: this.userId,
            coins: 1000
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
    }    
});
