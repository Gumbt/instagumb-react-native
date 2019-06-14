# instagumb-react-native

react-native init instagumb //inicia o projeto

react-native run-android
react-native start
adb connect IP_DO_SEU_EMULADOR:5555
adb devices

yarn add react-navigation react-native-gesture-handler//gestos e rotas
react-native link react-native-gesture-handler //essa biblioteca precisa modificar arquivos que ja estao, precisa reintalar com run-android

react-native start --reset-cache

yarn add axios
yarn add socket.io-client

yarn add react-native-image-picker
react-native link react-native-image-picker //tb entrar na doc da lib pra pegar os codigos pra pedir permissao pra usar camera e img

gerar apk
react-native init instagumb //inicia o projeto

react-native run-android
react-native start
adb connect IP_DO_SEU_EMULADOR:5555
adb devices

yarn add react-navigation react-native-gesture-handler//gestos e rotas
react-native link react-native-gesture-handler //essa biblioteca precisa modificar arquivos que ja estao, precisa reintalar com run-android

react-native start --reset-cache

yarn add axios
yarn add socket.io-client

yarn add react-native-image-picker
react-native link react-native-image-picker //tb entrar na doc da lib pra pegar os codigos pra pedir permissao pra usar camera e img

gerar apk
cd android
Em seguida roda ./gradlew bundleRelease (Se seu sistema for windows, tira o ./ do antes do gradlew)

apk sai em instagumb\android\app\build\outputs
tutoria pika pra gerar apk: https://dev.to/zilurrane/generate-release-mode-apk-for-react-native-project-to-publish-on-playstore-5f78
