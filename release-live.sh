#!/bin/bash
cordova/clean
pushd `pwd`/assets/www
export VER=`git describe --abbrev=0`

./compile.sh
popd

# Automatically update the version in the android manifest
sed "s/versionName=\"0.[0-9]*\"/versionName=\"0.$VER\"/" AndroidManifest.xml > tmp1.xml
sed "s/versionCode=\"[0-9]*\"/versionCode=\"$VER\"/" tmp1.xml > AndroidManifest.xml
rm tmp1.xml

cordova/release
pushd `pwd`/bin
jarsigner -verbose -sigalg MD5withRSA -digestalg SHA1 -keystore my-release-key.keystore -sigalg MD5withRSA -digestalg SHA1 -keystore ../my-release-key.keystore  CourageTorch-release-unsigned.apk CourageTorch
cp CourageTorch-release-unsigned.apk CourageTorch-$VER.apk
jarsigner -verify -verbose -certs CourageTorch-$VER.apk
popd
echo Built version $VER
rm `pwd`/assets/www/index.html
zipalign -f -v 4 `pwd`/bin/CourageTorch-$VER.apk bin/CourageTorch-al-$VER.apk

# Copy built, signed, aligned APK location to clipboard
echo `pwd`/bin/CourageTorch-al-$VER.apk | xclip -selection clipboard
