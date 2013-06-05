Courage Torch - fearless in the dark!
=====================================

There are many torch apps, but only this one sings you songs specifically designed to make you brave!

Licensing
=========

Licensed under the GPLv3 license.

Technical
=========

Keys
----

You'll need a release keystore to make a release, something along the lines of:

    keytool -genkey -v -keystore my-release-key.keystore -alias SoftPaws -keyalg RSA -keysize 2048 -validity 10000

Build in Apache Cordova
-----------------------

You need Cordova installed. Once you have that, you can test and release using the supplied helper scripts.

Test using:

    ./test.sh

Release using:

    ./release.sh
