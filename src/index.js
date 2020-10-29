import * as BABYLON from 'babylonjs'

const canvas = document.querySelector('#canvas')
const engine = new BABYLON.Engine(canvas, true)

const createScene = () => {
    // create the scene space
    const scene = new BABYLON.Scene(engine)
    const camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0,0,-10), scene)
    const light = new BABYLON.PointLight('light', new BABYLON.Vector3(0,10,0), scene)
    // scene.clearColor = new BABYLON.Color3(1, 0, 1)
    const spere = BABYLON.Mesh.CreateSphere('sphere', 32, 2, scene);
        
    return scene
}

const scene = createScene() // call the create scene function

// register a render loop to repeatedly render the scene
engine.runRenderLoop( () => {
    scene.render()
})

// watch for browser/canvas resize events
window.addEventListener('resize', () => {
    engine.resize()
})
