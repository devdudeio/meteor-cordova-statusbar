Template.index.helpers({
    cordova: function(){
        return cordova;
    },
    meteor: function(){
        return Meteor
    }
});

Template.index.events({
    'click button': function () {
        if (StatusBar.isVisible) {
            Meteor.call("console", "statusbar is visible and will be hidden");
            StatusBar.hide();
        }else{
            Meteor.call("console", "statusbar is hidden and will be shown");
            StatusBar.show();
        }
    }
});
