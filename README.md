# react native 工程,
中国rn官网:https://reactnative.cn/docs/components-and-apis/

react native 练习工程-面向Android
MainApplication中加载的是index.android.js文件,里面是注册 ,界面显示是在AndroidApp.js中.app.json是配置android的工程名字.



具体参考：http://huqi.tech/index.php/2018/09/29/code-push_hot_update/

1，code-push 安装CodePush终端：
npm install -g code-push-cli
code-push -v命令进行验证是否成功
还需注册,注册相关参考:https://medium.com/@guanmac/guanmac-blog-69c0dba2c1b4

2，code-push app add <appName> <platform> react-native
在code-push服务端创建一个app.本工程appName是rntest
eg:code-push app add rntest android react-native
中心地址：https://appcenter.ms/apps 可查看注册的CodePush应用的信息

3：集成CodePush SDK
1）安装react-native-code-push插件
npm install --save react-native-code-push
2）运行link命令将react-native-code-push插件添加到原生工程中
react-native link react-native-code-push
将会生成如下：MainApplication生成:getJSBundleFile
3)setting.gradle:include ':react-native-code-push'
                 project(':react-native-code-push').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-code-push/android/app')

4：生成release包。
1）android目录下执行./gradlew aR
2）安装 ：adb install -r /Users/binbin/WORK/WORKSPACE/rnProject/android/app/build/outputs/apk/release/app-release.apk
3）修改部分js文件。eg:修改code_push.js的Welcome to CodePush!
4）将js文件打包为bundle文件
执行：
// react-native bundle --platform 平台 --dev 是否调试 --entry-file 入口文件 --bundle-output 打包后输出的bundle文件路径 --assets-dest 资源输出目录
// react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
5）将bundle文件推送给微软appcenter云端
// code-push release <appName> <updateContents> <targetBinaryVersion>
// code-push release rntest ./bundles/index.android.bundle 1.0.0 --deploymentName Production  --description "对bundle文件进行加密" --mandatory true
// code-push release rntest ./android/app/src/main/assets/index.android.bundle 1.0.0 --description "第一次上传测试" --mandatory true


notice:
本工程有两个js。
1)，index.js.
2),index.android.js
release包通过index.js生成的代码


相关资料:
官网升级demo:
https://github.com/Microsoft/react-native-code-push/blob/master/Examples/CodePushDemoApp/App.js

code-push 中心:
https://appcenter.ms/apps

code-push readme(英文):
https://github.com/Microsoft/react-native-code-push#releasing-updates

热更新相关demo例子:
https://www.jianshu.com/p/6a0a5424b77b







============================================================

与pushy比,code-push 不用上传apk.而是通过version进行处理的.

//http://huqi.tech/index.php/2018/09/29/code-push_hot_update/
// 将js文件打包为bundle文件
// react-native bundle --platform 平台 --dev 是否调试 --entry-file 入口文件 --bundle-output 打包后输出的bundle文件路径 --assets-dest 资源输出目录
// react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
// 将bundle文件推送给微软appcenter云端
// code-push release <appName> <updateContents> <targetBinaryVersion>
// code-push release rntest ./bundles/index.android.bundle 1.0.0 --deploymentName Production  --description "对bundle文件进行加密" --mandatory true
// code-push release rntest ./android/app/src/main/assets/index.android.bundle 1.0.0 --description "第一次上传测试" --mandatory true
// code-push release <appName> <updateContentsPath> <targetBinaryVersion> [options]
