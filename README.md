# react 学习


坑： 
1. 安装ant-design后，项目启动报错

Error: Cannot find module './locale'

解决方案：
  在package.json中添加
  ```json
  "resolutions": {
    "moment": "2.24.0"
  }
  ```

  把dependencies里的moment固定成了2.24.0，再跑一遍yarn就好了，可以解决问题
 
