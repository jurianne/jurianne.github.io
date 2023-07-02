// window.addEventListener('DOMContentLoaded', init);
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GUI } from "https://unpkg.com/three@0.127.0/examples/jsm/libs/dat.gui.module.js";

const width = 960;
const height = 540;

// レンダラーを作成
const canvasElement = document.querySelector("#myCanvas");
const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement,
});
renderer.setSize(width, height);
renderer.setPixelRatio(window.devicePixelRatio);

// シーンを作成
const scene = new THREE.Scene();
// scene.background = new THREE.Color(0x0000);

// カメラを作成
const camera = new THREE.PerspectiveCamera(45, width / height);
// カメラの初期座標を設定（X座標:0, Y座標:0, Z座標:0）
camera.position.set(0, 0, 1000);
// カメラコントローラー
const controls = new OrbitControls(camera, renderer.domElement);
// 滑らかにコントロール
controls.enableDamping = true;
controls.damplingFactor = 0.2;
controls.update();  //制御の更新処理

// 箱を作成
// const geometry = new THREE.BoxGeometry(100, 100, 100);
// const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
// const box = new THREE.Mesh(geometry, material);
// box.position.set(0, 5, 0);
// scene.add(box);

// 図形を作成
var geometry;
var material;
var model;
geometry = new THREE.BoxGeometry(100, 100, 100);
function changeModel(name) {
    if (name == 'box') {
        geometry = new THREE.BoxGeometry(100, 100, 100);
    } else if (name == 'sphere') {
        geometry = new THREE.SphereGeometry(5, 32, 32);
    } else if (name == 'dounut') {
        geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    } else {
        geometry = new THREE.BoxGeometry(100, 100, 100);
    }
}
material = new THREE.MeshStandardMaterial({ color: 0xffffff });
model = new THREE.Mesh(geometry, material);
model.position.set(0, 5, 0);
scene.add(model);

// 平行光源
// const light = new THREE.DirectionalLight(0xFFFFFF);
// light.intensity = 3; // 光の強さを倍に
// light.position.set(1, 1, 2); // ライトの方向
// // シーンに追加
// scene.add(light);

const hemisphereLight = new THREE.HemisphereLight(
  /* sky color = */ 0x51a8dd,
  /* ground color = */ 0xe83015, 1
);
hemisphereLight.intensity = 3; // 光の強さを倍に
scene.add(hemisphereLight);

// レンダリング
// renderer.render(scene, camera);
animate();


function animate() {
    requestAnimationFrame(animate);
    controls.update();  //制御の更新処理
    // レンダリング
    renderer.render(scene, camera);

}

animate();

// GUI
const gui = new GUI({ width: 300 });
gui.open();

// 光源制御
let param = {
    "sky color": hemisphereLight.color.getHex(),
    "ground color": hemisphereLight.groundColor.getHex(),
    "debug": true,
    "分割数": 10,
    "options": "box"
};

gui.addColor(param, "sky color").onChange((val) => {
    hemisphereLight.color.setHex(val);
});

gui.addColor(param, "ground color").onChange((val) => {
    hemisphereLight.groundColor.setHex(val);
});

gui.add(param, 'debug').onChange(function () {
    if (param.debug) {
        console.log("DEBUG MODE");
    } else {
        console.log("NORMAL MODE");
    }
});

gui.add(param, "分割数", 1, 50).onChange(function () {

});

