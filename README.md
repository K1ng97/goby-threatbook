



## 快速开始

1、通过插件中心下载或手动下载安装插件，安装成功后，会在右侧插件栏中显示微步 X 情报社区 Logo；

2、配置微步在线API Key；

微步在线 API 接口链接，普通用户每天可免费查询 50 次：

```tex
https://x.threatbook.cn/v5/myApi
```

![image](https://z3.ax1x.com/2021/04/03/cuGZZ9.png)



首次使用该插件时，会弹出配置提示，填入微步的 API Key ，然后重启 goby。

![image](https://z3.ax1x.com/2021/04/01/cENz7t.png)



或者在 ”设置-扩展设置“ 中进行 API Key 配置。

![image](https://z3.ax1x.com/2021/04/03/cuJeOg.png)



3、创建一个扫描任务，点击开始按钮，启动扫描任务，当扫描任务完成时，威胁情报插件会自动提取扫描任务中的资产IP，并通过微步在线情报接口查询IP情报（局域网及保留地址不做查询）。

![image](https://z3.ax1x.com/2021/04/01/cEUJBR.png)



![image](https://z3.ax1x.com/2021/04/01/cEUsud.png)



4、Github: https://github.com/K1ng97/goby-threatbook，也可以从 git 上下载插件，手动放入到 /extensions 目录，然后重启 goby。
