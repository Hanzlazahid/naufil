import React from 'react'
import { Text2Xl, TextSm } from "@/component/commons";


const PortfolioLayout1 = ({ leftHeading, leftTextSm1, leftTextSm2, leftTextSm3, rightHeading }) => {
    return (
        <div className="bg-dark mt-24 min-h-screen flex flex-col md:flex-row relative">
            <div className="md:fixed md:w-[30%] w-full p-9">
                {leftHeading &&
                    <Text2Xl text={leftHeading} classes={"text-white mb-4"} />
                }
                {leftTextSm1 &&
                    <TextSm text={leftTextSm1} classes={"text-grey mb-4"} />
                }
                {leftTextSm2 &&
                    <TextSm text={leftTextSm2} classes={"text-grey mb-4"} />
                }
                {leftTextSm3 &&
                    <TextSm text={leftTextSm3} classes={"text-grey mb-4"} />
                }
            </div>
            <div className="md:ml-[30%] md:w-[70%] flex flex-col justify-evenly py-5 px-7 md:pl-16">
                {rightHeading &&
                    <Text2Xl text={"Long Form:"} classes={"text-white mb-3"} />
                }
                <div className="md:w-5/6 w-full h-[350px] bg-green-500 mb-5">hello</div>
                <div className="md:w-5/6 w-full h-[350px] mb-5 bg-green-500">hello</div>
                <div className="md:w-5/6 w-full h-[350px] mb-5 bg-green-500">hello</div>
            </div>
        </div>
    )
}

export default PortfolioLayout1