# p5.turtle.js

p5.jsのためのタートルグラフィックプログラム

これは、シンプルでアニメーションするタートルグラフィックプログラムです。処理は、2つのステップがあります。最初に、setup()の中で、タートルの動きを記録します。2番目に、draw()の中で、タートルの動きをアニメーションで表示します。このプログラムは、p5.jsとp5.play.jsライブラリを必要とします。


## デモ

http://ycatch.github.io/p5.turtle.js/


## 利用条件

Copyright 2015 Yutaka Kachi released under the MIT license.

https://opensource.org/licenses/MIT


## コマンド

- forward(length)		前進
- back(length)			後進
- left(angle in degree)		左回転
- right(angle in degree)	右回転


## Properties and default

- this.x = 200;				X座標
- this.y = 60;				Y座標
- this.step = 5;			アニメーションのステップ
- this.stepAngle = Math.PI / 36;	アニメーションの回転角度
- this.angleInRadians = 0;		角度(ラジアン)
- this.penDown = false;			ペンを下げる
- this.penColor = "#000000";		ペンの色
- this.lineWidth = 2;			線の幅


## Colors

- black : "#000000"		黒
- gray: "#808080"		灰色
- lightgray: "#C0C0C0"		明るい灰色
- red: "#ff0000"		赤
- green: "#00ff00"		緑
- blue: "#0000ff"		青
- yellow: "#ffff00"		黄色
- magenta: "#ff00ff"		紫
- aqua: "#00ffff"		水色
- white: "#ffffff"		白

