if (Meteor.isClient) {
    Meteor.call("console", cordova);

    Template.hello.helpers({
       cordova: function(){
           return cordova;
       }
    });

    Template.hello.events({
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


}


if(Meteor.isServer){
    Meteor.methods({
        console: function (text) {
            console.log(text);
        }
    });
}
