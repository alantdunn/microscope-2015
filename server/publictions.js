/**
 * Created by gfb15103 on 10/04/2015.
 */
Meteor.publish('posts', function() {
    return Posts.find();
});