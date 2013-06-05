var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        if(!window.cordova) {
            this.onDeviceReady();
        }
    },

    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {


        $('#btnHelp').click(function() {
            $('#content').hide();
            $('#instructions').show();
        });

        $('#btnHelpRead').click(function() {
            $('#instructions').hide();
            $('#content').show();
        });

        $('#btnOn').click(function() {
            $('#btnOn').hide();
            $('#btnOff').show();
            window.plugins.Torch.turnOn(
                function() {

                },
                function(e) {
                    console.log( "**** error" ); console.log(e);
                }
            );
        });

        $('#btnOff').click(function() {
            $('#btnOn').show();
            $('#btnOff').hide();
            window.plugins.Torch.turnOff(
                function() {

                },
                function(e) {
                    console.log( "**** error" ); console.log(e);
                }
            );
        });

        window.plugins.Torch.turnOn(
            function() {

            },
            function(e) {
                console.log( "**** error" ); console.log(e);
            }
        );

        console.log("Device is ready! Let's try this torch out...");


    }
};
app.initialize();