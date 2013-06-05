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
        var sfx = new Media("/android_asset/www/sfx/SlapWorkout.mp3",
            function() {
                console.log('Success loading sound');
            },
            function(err) {
                console.log('Error loading sound');
            }
        );

        function turnOnTorch() {
            $('#btnOn').hide();
            $('#btnOff').show();
            window.plugins.Torch.turnOn(
                function() {
                    sfx.play({ numberOfLoops: 10});
                },
                function(e) {
                    console.log( "**** error" ); console.log(e);
                }
            );
        }

        function turnOffTorch() {

            $('#btnOn').show();
            $('#btnOff').hide();
            window.plugins.Torch.turnOff(
                function() {
                    sfx.stop();
                },
                function(e) {
                    console.log( "**** error" ); console.log(e);
                }
            );
        }

        $('#btnHelp').click(function() {
            $('#content').hide();
            $('#instructions').show();
        });

        $('#btnHelpRead').click(function() {
            $('#instructions').hide();
            $('#content').show();
        });

        $('#btnOn').click(function() {
            turnOnTorch();
        });

        $('#btnOff').click(function() {
            turnOffTorch();
        });

        turnOnTorch();

        console.log("Device is ready! Let's try this torch out...");
    }
};
app.initialize();