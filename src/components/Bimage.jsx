export const Bimage = ({src, width, height}) => {
   
    return(
        <div style={{
            width: `${width}px`,
            height: `${height}px`
        }} >
         <img src={src} alt="" style={{width: "100%", height: "100%"}} />
        </div>

    )
}