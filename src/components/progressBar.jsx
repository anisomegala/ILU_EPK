/** @jsxImportSource theme-ui */ 
import { useState } from "react";

const ProgressBar = () => {
    const [filled, setFilled] = useState(0); 
    const [isRunning, setIsRunning] = useState(false);
    
    return (
        <div className="progressBar">
            <div sx={{
                height: "100%",
                width: `${filled}%`,
                bg: "#a66cff",
                transition: "width 0.5s"
            }}>
                <div>

                </div>
                <span>{filled}%</span>
            </div>
        </div>
    )
}

export default ProgressBar;