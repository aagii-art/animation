import { Bimage } from "./Bimage"

export const Planet = ( {width, height, } ) => {
    return (
        <div style={{
            position: "absolute",
            left: "45%",
            top: "43%",
            height: `${height}px`,
            width: `${width}px`,
            border: "2px dashed white",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            animation: "spin 5s linear infinite"
            
        }} >

            <Bimage width={20} height={20} src="/img/sun.png" />
        </div>
    )
}