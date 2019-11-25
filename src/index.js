var THREE = require('three')

// 1、创建场景
var scene = new THREE.Scene();
// 2、创建相机（透视相机）
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// 3、创建渲染器
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // 3.1 设置渲染器尺寸
document.body.appendChild(renderer.domElement); // 3.2 渲染器dom元素添加至html


// 4、创建模型
var geometry = new THREE.BoxGeometry(1, 1, 1); // 4.1、 创建立方体
var material = new THREE.MeshBasicMaterial({  // 4.2、 创建材质
    color: 0x00ff00
});
var cube = new THREE.Mesh(geometry, material);  // 4.3、 创建网格，网格包含一个几何体以及作用在此几何体上的材质
scene.add(cube); // 4.4、网格对象放入到场景中

camera.position.z = 5;  // 4.5 移动相机位置


// 5、渲染场景
var animate = function () {
    requestAnimationFrame(animate);

    // 5.1 动画旋转
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();